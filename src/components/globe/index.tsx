import { pairs } from 'd3-array'
import Papa from 'papaparse'
import { mesh } from 'topojson-client'
import React, { Component } from 'react'
import {
  Scene,
  Object3D,
  PerspectiveCamera,
  WebGLRenderer,
  LineBasicMaterial,
  CircleGeometry,
  MeshBasicMaterial,
  Mesh,
  Vector3,
  LineSegments,
  BufferGeometry,
  CanvasTexture,
  LinearFilter,
  SRGBColorSpace,
  Sprite,
  SpriteMaterial,
} from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import type { MultiLineString, Position } from 'geojson'
import type { GeometryCollection, Topology } from 'topojson-specification'

import globe from './globe.json'
import cities from './cities.csv?raw'

import * as style from './styles'

interface City {
  city: string
  country: string
  lat: number
  lng: number
  hideLabel: boolean | null
}

const data = Papa.parse<City>(cities, { dynamicTyping: true, header: true, skipEmptyLines: true }).data
// JSON imports widen geometry names and coordinate tuples; restore this static asset's schema.
const topology = globe as unknown as Topology<{ ne_110m_admin_0_countries: GeometryCollection }>

export default class Globe extends Component {
  private mount: HTMLDivElement | null = null
  private scene!: Scene
  private sphereContainer!: Object3D
  private camera!: PerspectiveCamera
  private renderer!: WebGLRenderer
  private controls!: OrbitControls
  private mesh!: LineSegments<BufferGeometry, LineBasicMaterial>
  private frameId: number | null = null

  componentDidMount() {
    if (!this.mount) return
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    this.scene = new Scene()
    this.sphereContainer = new Object3D()
    this.camera = new PerspectiveCamera(75, width / height, 1, 1000)
    this.camera.position.z = 225
    this.renderer = new WebGLRenderer({ alpha: true, antialias: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(width, height)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableZoom = false
    this.controls.enablePan = false
    this.controls.maxDistance = 400
    this.mount.appendChild(this.renderer.domElement)
    window.addEventListener('resize', this.updateDimensions)
    window.addEventListener('mousemove', this.pan)
    this.getData()
    this.updateDimensions()
    this.start()
  }

  componentWillUnmount() {
    if (!this.mount) return
    this.stop()
    this.controls.dispose()
    this.scene.traverse(object => {
      if (object instanceof Mesh || object instanceof LineSegments || object instanceof Sprite) {
        object.geometry.dispose()
        const materials = Array.isArray(object.material) ? object.material : [object.material]
        for (const material of materials) {
          if (material instanceof MeshBasicMaterial || material instanceof SpriteMaterial) material.map?.dispose()
          material.dispose()
        }
      }
    })
    this.renderer.dispose()
    this.mount.removeChild(this.renderer.domElement)
    window.removeEventListener('resize', this.updateDimensions)
    window.removeEventListener('mousemove', this.pan)
  }

  getData() {
    this.mesh = this.wireframe(
      mesh(topology, topology.objects.ne_110m_admin_0_countries),
      new LineBasicMaterial({ color: 0xffffff }),
    )
    this.scene.add(this.mesh)
    this.createPoints()
  }

  updateDimensions = () => {
    if (!this.mount) return
    const { clientWidth, clientHeight } = this.mount
    // const aspect = clientWidth / clientHeight
    // const h = aspect < 1 ? clientHeight * aspect : clientHeight
    this.renderer.setSize(clientWidth, clientHeight)
    this.camera.aspect = clientWidth / clientHeight
    this.camera.updateProjectionMatrix()
  }

  createText(item: City) {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    if (!context) return new Sprite()
    const fontSize = 64
    const font = `${fontSize}px 'Inter', sans-serif`
    const padding = fontSize * 0.25
    const strokeWidth = fontSize * 0.05
    const lineGap = fontSize * 0.15
    const text = item.hideLabel ? '' : item.city
    const texture = new CanvasTexture(canvas)
    texture.colorSpace = SRGBColorSpace
    texture.minFilter = LinearFilter
    texture.magFilter = LinearFilter
    const sprite = new Sprite(new SpriteMaterial({ color: 0xeeeeee, map: texture }))

    const draw = () => {
      if (!text) {
        canvas.width = 1
        canvas.height = 1
        sprite.scale.set(4, 4, 1)
      } else {
        context.font = font
        const textWidth = context.measureText(text).width
        // Keep the original three-line layout, with the city above its marker.
        canvas.width = Math.ceil(textWidth + strokeWidth + 2 * padding)
        canvas.height = Math.ceil(3 * fontSize + 2 * lineGap + strokeWidth + 2 * padding)
        context.font = font
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.lineWidth = strokeWidth
        context.strokeStyle = '#222'
        context.fillStyle = '#fff'
        const x = canvas.width / 2
        const y = padding + strokeWidth / 2 + fontSize / 2
        context.strokeText(text, x, y)
        context.fillText(text, x, y)
        const height = 8 * (3 + 2 * 0.15 + 0.05 + 2 * 0.25)
        sprite.scale.set((canvas.width / canvas.height) * height, height, 1)
      }
      texture.needsUpdate = true
    }

    draw()
    if (document.fonts && text) document.fonts.load(font).then(draw, () => {})
    return sprite
  }

  createPoints() {
    for (const item of data) {
      const sphereGeom = new CircleGeometry(4, 32)
      const sphereMaterial = new MeshBasicMaterial({
        color: 0xbaa6e7, // 0xffffff,
        transparent: true,
        opacity: 0.5,
        depthTest: false,
      })
      const sphere = new Mesh(sphereGeom, sphereMaterial)
      const label = this.createText(item)
      this.placeObjectOnPlanet(sphere, [item.lng, item.lat])
      this.placeObjectOnPlanet(label, [item.lng, item.lat])
      this.sphereContainer.add(label)
      this.sphereContainer.add(sphere)
    }
    this.scene.add(this.sphereContainer)
  }

  placeObjectOnPlanet(object: Object3D, point: Position) {
    const lambda = (point[0] * Math.PI) / 180
    const phi = (point[1] * Math.PI) / 180
    const cosPhi = Math.cos(phi)
    const radius = 228
    object.position.set(radius * cosPhi * Math.cos(lambda), radius * cosPhi * Math.sin(lambda), radius * Math.sin(phi))
    object.rotation.set(0.0, phi, lambda - Math.PI * 0.5)
  }

  // Converts a point [longitude, latitude] in degrees to a Vector3.
  vertex(point: Position) {
    const lambda = (point[0] * Math.PI) / 180
    const phi = (point[1] * Math.PI) / 180
    const cosPhi = Math.cos(phi)
    const radius = 228
    return new Vector3(
      radius * cosPhi * Math.cos(lambda),
      radius * cosPhi * Math.sin(lambda),
      radius * Math.sin(phi),
    )
  }

  // Converts a GeoJSON MultiLineString in spherical coordinates to a LineSegments.
  wireframe(multilinestring: MultiLineString, material: LineBasicMaterial) {
    const vertices: Vector3[] = []
    multilinestring.coordinates.forEach(line => {
      pairs(line.map(this.vertex), (a, b) => {
        vertices.push(a, b)
      })
    })
    const geometry = new BufferGeometry().setFromPoints(vertices)
    return new LineSegments(geometry, material)
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop = () => {
    if (this.frameId !== null) cancelAnimationFrame(this.frameId)
    this.frameId = null
  }

  animate = () => {
    this.mesh.rotation.y += 0.002
    this.mesh.rotation.z += 0.002
    this.sphereContainer.rotation.y += 0.002
    this.sphereContainer.rotation.z += 0.002
    for (const child of this.sphereContainer.children) {
      child.lookAt(this.camera.position)
    }
    this.frameId = window.requestAnimationFrame(this.animate)
    this.renderScene()
  }

  pan = (event: MouseEvent) => {
    this.mesh.rotation.y += event.movementX / 500
    this.mesh.rotation.z += event.movementY / 500
    this.sphereContainer.rotation.y += event.movementX / 500
    this.sphereContainer.rotation.z += event.movementY / 500
    for (const child of this.sphereContainer.children) {
      child.lookAt(this.camera.position)
    }
    this.renderScene()
  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div
        className={style.globe}
        ref={mount => {
          this.mount = mount
        }}
      />
    )
  }
}
