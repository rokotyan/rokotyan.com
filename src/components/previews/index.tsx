// Components
import React, { Component } from 'react'
import { withUIStore } from 'store/ui'
import type { WithUIStoreProps } from 'store/ui'
import type { Project } from 'utils/types'

// Modules
import { ProjectCard } from './modules'
// Style
import * as style from './styles'

interface PreviewsProps extends WithUIStoreProps {
  data: Project[]
}

class Previews extends Component<PreviewsProps> {

  render() {
    const { uiStore, data } = this.props

    return (
      <div className={style.previews}>
        {data.map((project, i) => {
          project.strings.setLanguage(uiStore.language)
          return <ProjectCard key={project.link} project={project} index={i} />
        })}
      </div>
    )
  }
}

export default withUIStore(Previews)
