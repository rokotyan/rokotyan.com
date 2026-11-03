import React, { Component } from 'react'
import { withUIStore } from 'store/ui'
import type { WithUIStoreProps } from 'store/ui'
import type { Project } from 'utils/types'
import 'react-lazy-load-image-component/src/effects/opacity.css'

// Enums

// Styles
import * as style from './styles'

// Components
import ProjectCard from './project-card'
import NextProject from './next-project'
import { Content } from './content-modules'

interface ProjectPageProps extends WithUIStoreProps {
  project: Project
}

class ProjectPage extends Component<ProjectPageProps> {
  componentDidMount() {
    const { uiStore, project: { fontColor, background, headerColor } } = this.props
    uiStore.setColors(fontColor, background, headerColor || (this.props.project.collection ? '#fff' : undefined))
    window.scrollTo(0, 0)
  }

  componentDidUpdate(prevProps: ProjectPageProps) {
    const { project, uiStore } = this.props
    if (project !== prevProps.project) {
      uiStore.setColors(project.fontColor, project.background, project.headerColor || (project.collection ? '#fff' : undefined))
      window.scrollTo(0, 0)
    }
  }

  render() {
    const { project, uiStore: { projects, language } } = this.props

    project.strings.setLanguage(language)

    const currentIndex = projects.findIndex(item => item === project)
    const nextProject = projects[currentIndex < projects.length - 1 ? currentIndex + 1 : 0]
    nextProject.strings.setLanguage(language)

    return (
      <div className={style.page({ ...project })}>
        <ProjectCard project={project} />
        <div className={style.content({ ...project })}>
          <Content project={project} language={language} />
        </div>
        <NextProject nextProject={nextProject} background={project.background} labelColor={project.fontColor} />
      </div>
    )
  }
}

export default withUIStore(ProjectPage)
