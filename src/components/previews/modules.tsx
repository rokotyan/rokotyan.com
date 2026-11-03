import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from 'utils/types'

// Style
import * as style from './styles'

interface VideoPreviewProps {
  project: Project
}

export default class VideoPreview extends Component<VideoPreviewProps> {
  private video: HTMLVideoElement | null = null
  private promise: Promise<void> | undefined

  handlePlay = () => {
    this.promise = this.video?.play()
  }

  handleStop = () => {
    if (this.promise) {
      this.promise
        .then(() => {
          if (this.video) {
            this.video.currentTime = 0
            this.video.pause()
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  makeRef = (c: HTMLVideoElement | null) => { this.video = c }

  render() {
    const { project } = this.props

    return (
      <div
        className={style.videoContaier}
        style={{ backgroundImage: `url("${project.previewImage || project.mainPic}")` }}
        onMouseEnter={this.handlePlay}
        onMouseLeave={this.handleStop}
      >
        <video
          ref={this.makeRef}
          loop
          muted
          playsInline
          className={style.video}
          poster={project.previewImage || project.mainPic}
          preload="none"
          src={project.previewVid}
        />
      </div>
    )
  }
}

export function ProjectCard({ project, index }: VideoPreviewProps & { index: number }) {
  return (
    <article className={style.article(index)}>
      <Link to={`/projects/${project.link}`}>
        {project.previewVid ? <VideoPreview project={project} /> : (
          <div className={style.videoContaier}>
            <img className={style.video} src={project.previewImage || project.mainPic} alt="" loading="lazy" />
          </div>
        )}
        <div className={style.title}>
          {project.strings.title}{project.year ? `, ${project.year}` : ''}
        </div>
      </Link>
    </article>
  )
}
