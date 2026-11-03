import React, { Component } from 'react'
import { withUIStore } from 'store/ui'
import type { UIStore, WithUIStoreProps } from 'store/ui'
import type { LocalizedStrings } from 'react-localization'

import * as style from './styles'

interface LegacyTagStore {
  tags?: { translate: LocalizedStrings<Record<string, string>> }
  selectedTag?: string
  setTag?: (tag: string) => void
  style?: string
}

interface TagContainerProps extends WithUIStoreProps {
  array: string[]
  color?: string
  uiStore: UIStore & LegacyTagStore
}

class TagContainer extends Component<TagContainerProps> {
  // generateLink(tag) {
  //   return {
  //     pathname: '/works',
  //     search: `${tag === 'all' ? `{}` : `?tag=${tag.toLowerCase()}`}`,
  //   }
  // }

  render() {
    const { uiStore, array, color } = this.props
    const { tags } = uiStore
    if (!tags) return null
    tags.translate.setLanguage(uiStore.language)
    return (
      <div className={style.tagsContainer}>
        {array.map(tag => (
          <span key={tag} className={style.tag({ color })}>
            <div
              onClick={() => uiStore.setTag?.(tag)}
              className={style.background({ statement: uiStore.selectedTag === tag, color, style: uiStore.style })}
            >
              <div className={style.text({ statement: uiStore.selectedTag === tag, color })}>
                {tags.translate[tag]}
              </div>
            </div>
          </span>
        ))}
      </div>
    )
  }
}

export default withUIStore(TagContainer)
