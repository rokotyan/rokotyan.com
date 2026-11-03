/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react'
import type { CSSProperties } from 'react'
import { withUIStore } from 'store/ui'
import type { WithUIStoreProps } from 'store/ui'
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

// Helpers
import { randomId } from 'utils/helpers/helpers'

import * as s from './styles'

export interface VideoProps {
  source: string
  provider?: 'youtube' | 'vimeo'
  poster?: string
  controls?: boolean
  warningStyle?: CSSProperties
}

interface EmbeddedVideoProps {
  source: string
  provider: 'youtube' | 'vimeo'
  controls: boolean
}

class EmbeddedVideo extends Component<EmbeddedVideoProps> {
  private elementRef = React.createRef<HTMLDivElement>()
  private className: string
  private player: Plyr | null = null
  private unmounted = false

  constructor(props: EmbeddedVideoProps) {
    super(props)
    this.className = `plyr${randomId()}`
  }

  componentDidMount() {
    const { provider, source, controls } = this.props
    const playerElement = document.createElement('div')
    playerElement.className = this.className
    playerElement.setAttribute('data-plyr-provider', provider)
    playerElement.setAttribute('data-plyr-embed-id', source)
    this.elementRef.current?.appendChild(playerElement)

    this.player = new Plyr(playerElement, {
      controls: controls ? ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'] : [],
      autoplay: !controls,
      autopause: false,
      muted: !controls,
      loop: { active: true },
    })
    this.player.on('ready', () => {
      if (this.unmounted) this.player?.destroy()
      else if (!controls) this.player?.play()
    })
  }

  componentWillUnmount() {
    this.unmounted = true
    this.player?.destroy()
  }

  play() {
    return this.player?.play()
  }

  render() {
    return <div ref={this.elementRef} />
  }
}

class Video extends Component<VideoProps & WithUIStoreProps> {
  private videoRef: HTMLVideoElement | EmbeddedVideo | null = null

  playPageVideo = () => {
    const { uiStore } = this.props
    uiStore.setCanAutoplay(true)

    this.videoRef?.play()
  }

  makeRef = (c: HTMLVideoElement | EmbeddedVideo | null) => {
    this.videoRef = c
  }

  render() {
    const { warningStyle, source, poster, provider, controls = false } = this.props
    const { uiStore: { canAutoplay } } = this.props

    return (
      <div className={s.container}>
        <div className={s.autoplayWarning} style={warningStyle} hidden={canAutoplay || controls} onClick={this.playPageVideo}>
          <span>Looks like video autoplay is disabled in your browser. Click here to play ⚡</span>
        </div>
        { provider
          ? <EmbeddedVideo key={`${provider}:${source}`} ref={this.makeRef} provider={provider} source={source} controls={controls} />
          : <video ref={this.makeRef} loop autoPlay={!controls} muted={!controls} controls={controls} preload={controls ? 'metadata' : 'auto'} poster={poster} playsInline style={{ width: '100%', background: poster ? `transparent url('${poster}') no-repeat center center` : 'transparent' }} src={source} />}
      </div>
    )
  }
}

export default withUIStore(Video)
