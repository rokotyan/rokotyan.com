import React, { Component } from 'react'
import { withUIStore } from 'store/ui'
import type { WithUIStoreProps } from 'store/ui'
import * as style from './styles'

class LanguageSwitcher extends Component<WithUIStoreProps> {
  setEnLanguage() {
    const { uiStore } = this.props
    uiStore.setLanguage('en')
  }

  setRuLanguage() {
    const { uiStore } = this.props
    uiStore.setLanguage('ru-RU')
  }

  checkLanguage = () => {
    const { uiStore } = this.props
    if (uiStore.language !== 'ru-RU') {
      this.setRuLanguage()
    } else {
      this.setEnLanguage()
    }
  }

  render() {
    const { uiStore } = this.props
    return (
      <span className={style.langswitcher()} onClick={this.checkLanguage}>
        {uiStore.language !== 'ru-RU' ? 'ru' : 'en'}
      </span>
    )
  }
}

export default withUIStore(LanguageSwitcher)
