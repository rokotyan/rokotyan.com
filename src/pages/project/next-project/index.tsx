import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { RightArrow } from 'utils/styles/misc'

import * as style from './styles'
import type { Project } from 'utils/types'

interface NextProjectProps {
  nextProject: Project
  background: string
  labelColor: string
}

export default function NextProject({ nextProject, background, labelColor }: NextProjectProps) {
  return (
    <div className={style.nextProject}>
      <Link to={`/projects/${nextProject.link}`}>
        <LazyLoadImage
          alt={nextProject.strings.title}
          effect="opacity"
          src={nextProject.mainPic}
          width="100%"
          visibleByDefault
          className={style.projectImg}
        />
        <div className={style.nextProjectContent({ color: nextProject.collection ? '#fff' : nextProject.fontColor })}>
          <div className={style.next({ accent: nextProject.collection ? '#fff' : labelColor })}>
            Next project
            <RightArrow color={nextProject.collection ? '#fff' : labelColor} />
          </div>
          <div className={style.projectTitle}>{nextProject.strings.title}</div>
          <div className={style.projectDescription}>{nextProject.strings.description}</div>
        </div>
        <div className={style.grad({ background: nextProject.collection ? '#000000' : background })} />
      </Link>
    </div>
  )
}
