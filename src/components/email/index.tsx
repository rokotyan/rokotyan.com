import React, { Component } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

// Style
import * as s from './styles'

interface StudioEmailProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  message?: ReactNode
}

interface StudioEmailState {
  showCopiedMessage: boolean
}

export default class StudioEmail extends Component<StudioEmailProps, StudioEmailState> {
  constructor(props: StudioEmailProps) {
    super(props)
    this.state = {
      showCopiedMessage: false,
    }
  }

  onCopy = () => {
    this.setState({
      showCopiedMessage: true,
    })

    setTimeout(() => {
      this.setState({
        showCopiedMessage: false,
      })
    }, 1500)
  }

  render() {
    const { showCopiedMessage } = this.state
    const { children, className, style, message } = this.props
    const name = 'hello'
    const domain = 'rokotyan'
    const tld = 'com'
    const email = `${name}@${domain}.${tld}`

    return (
      <CopyToClipboard text={email} onCopy={this.onCopy}>
        { !showCopiedMessage
          ? (
            <div className={className} style={style}>
              { children
            || (
              <span className={s.mailContent} data-user="hello" data-site="rokotyan.com">
                { email.split('').reverse().join('') }
              </span>
            )}
            </div>
)
          : (
            <div className={s.message}>
              {/* <span role="img" aria-label="mail">✉️</span> */}
              { message || 'copied to clipboard!' }
            </div>
) }
      </CopyToClipboard>
    )
  }
}
