import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import * as style from './styles'
import type { Project } from 'utils/types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={style.projectCard}>
      <LazyLoadImage
        alt={project.strings.title}
        effect="opacity"
        src={project.mainPic}
        width="100%"
        className={style.projectImg}
      />
      <div className={style.projectContent} style={project.collection ? { color: '#fff', background: 'linear-gradient(90deg, rgba(0,0,0,.65), rgba(0,0,0,.15))' } : project.heroStyle}>
        <div className={style.projectTitle}>{project.strings.title}</div>
        <div className={style.projectDescription} style={project.heroDescriptionStyle}>{project.strings.description}</div>
      </div>
    </div>
  )
}
