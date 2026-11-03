import React, { Component } from 'react'
import { withUIStore } from 'store/ui'
import type { WithUIStoreProps } from 'store/ui'
import type { Location } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { headerHeight } from 'utils/styles/misc'

import { content } from './content'
import * as style from './styles'

interface HeaderProps extends WithUIStoreProps {
  location: Location
}

interface HeaderState {
  stickyMode: 'top' | 'active' | ''
}

class Header extends Component<HeaderProps, HeaderState> {
  private previousScroll: number
  private currentScroll = 0

  constructor(props: HeaderProps) {
    super(props)
    this.state = {
      stickyMode: 'top',
    }
    this.previousScroll = 0
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    this.currentScroll = scrollTop
    if (scrollTop < headerHeight) {
      this.setState({ stickyMode: 'top' })
    } else if (this.previousScroll > this.currentScroll && scrollTop - window.innerHeight > 200) {
      this.setState({ stickyMode: 'active' })
    } else {
      this.setState({ stickyMode: '' })
    }
    this.previousScroll = this.currentScroll
  }

  renderHeaderContent() {
    return (
      <nav className={style.content}>
        <NavLink end to="/" className={style.title} id="title">
          {content.strings.title}
        </NavLink>
        <div className={style.tabs}>
          <NavLink to="/projects/" className={style.tab}>
            {content.strings.projects}
          </NavLink>
          <NavLink end to="/about/" className={style.tab}>
            {content.strings.about}
          </NavLink>
          <NavLink to="/talks/" className={style.tab}>
            {content.strings.talks}
          </NavLink>
        </div>
        {/* <LanguageSwitcher /> */}
      </nav>
    )
  }

  renderTopHeader(pathname: string) {
    const { uiStore } = this.props
    return (
      <div
        key="header"
        className={style.header({
          color: uiStore.headerColor,
          main: pathname === '/',
        })}
      >
        {this.renderHeaderContent()}
      </div>
    )
  }

  renderStickyHeader(pathname: string) {
    const { uiStore } = this.props
    const { stickyMode } = this.state
    return (
      <div
        key="headerSticky"
        className={`${style.headerSticky({
          color: uiStore.fontColor,
          background: uiStore.background,
          main: pathname === '/',
        })} ${stickyMode}`}
      >
        {this.renderHeaderContent()}
      </div>
    )
  }

  render() {
    const { uiStore, location } = this.props
    const { pathname } = location
    content.strings.setLanguage(uiStore.language)

    return (
      <header>
        {this.renderTopHeader(pathname)}
        {this.renderStickyHeader(pathname)}
      </header>
    )
  }
}

export default withUIStore(Header)
