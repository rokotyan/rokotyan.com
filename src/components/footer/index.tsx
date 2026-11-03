import React, { Component } from 'react'
import { withUIStore } from 'store/ui'
import type { WithUIStoreProps } from 'store/ui'

// Components
import StudioEmail from 'components/email'

// Content
import { content } from './content'

// Styles
import * as style from './styles'

class Footer extends Component<WithUIStoreProps> {

  render() {
    const { uiStore } = this.props
    content.strings.setLanguage(uiStore.language)
    return (
      <footer className={style.footer}>
        <div className={style.separator} />
        <div className={style.content()}>
          <div className={style.column}>
            <div className={style.string}>{`© ${(new Date()).getFullYear()} ${content.strings.title}`}</div>
            <StudioEmail className={style.string} />
          </div>
          <div className={style.column}>
            <a
              className={style.string}
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ernaem"
            >
              X
            </a>
            <a className={style.string} target="_blank" rel="noopener noreferrer" href="https://bsky.app/profile/rokotyan.com">
              Bluesky
            </a>
            <a className={style.string} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rokotyan/">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default withUIStore(Footer)
