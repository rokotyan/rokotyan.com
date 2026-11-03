import React, { useEffect, useRef, useState } from 'react'
import { Markup } from 'interweave'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { cx } from '@emotion/css'
import type { ReactNode } from 'react'
import type { ContentBlock as ProjectContentBlock, ContentStyleName, IframeContent, InfoContent, Project, ProjectLocalization, VideoContent } from 'utils/types'

// Enums
import ContentType from 'utils/enums/contentTypes'

// Components
import Video from 'components/video'

// Styles
import * as s from './styles'

// Strings
import general from './general'

export function Content({ project, language }: { project: Project; language: string }) {
  return (
    <>
      { project.content.map((c, i) => (<ContentBlock key={i} content={c} idx={i} localization={project.strings} language={language} />)) }
    </>
  )
}

interface ContentBlockProps {
  content: ProjectContentBlock
  idx: number
  language: string
  localization: ProjectLocalization
}

export function ContentBlock({ content, idx, language, localization }: ContentBlockProps) {
  const blockId = content.type + idx

  const getContent = (content: ProjectContentBlock): ReactNode => {
    switch (content.type) {
    case ContentType.INFO: return <ContentInfo content={content} localization={localization} language={language} />
    case ContentType.IMAGE: return <ContentImage source={content.source} />
    case ContentType.VIDEO: return <ContentVideo source={content.source} provider={content.provider} controls={content.controls} poster={content.poster} />
    case ContentType.IFRAME: return <ContentIframe source={content.source} title={content.title} />
    case ContentType.TEXT: return <ContentText text={content.text} className={content.style} localization={localization} />
    case ContentType.TWO_COLUMNS: {
      return (
        <div className={s.block}>
          <div className={`${s.blockColumn} left`}>{getContent(content.left)}</div>
          <div className={`${s.blockColumn} right`}>{getContent(content.right)}</div>
        </div>
      )
    }
    default: return null
    }
  }

  const pad = content.type === ContentType.TEXT || content.type === ContentType.INFO || content.type === ContentType.TWO_COLUMNS
  const containerClasses = (content.containerStyle || []).map(name => s[name])
  return (
    <div key={blockId} className={cx(s.contentContainer, { [s.pad]: pad }, ...containerClasses)} style={content.blockStyle}>
      { getContent(content) }
    </div>
  )
}

export function ContentInfo({ content, localization, language }: { content: InfoContent; localization: ProjectLocalization; language: string }) {
  general.setLanguage(language)

  return (
    <div className={s.header}>
      <div className={s.chapter}>
        <div className={s.chapterName}>{general.tools}</div>
        <div className={s.chapterText}>{content.tools}</div>
      </div>
      <div className={s.chapter}>
        <div className={s.chapterName}>{general.task}</div>
        <div className={s.chapterText}>
          <Markup content={localization[content.task]} />
        </div>
      </div>
    </div>
  )
}

export function ContentImage({ source }: { source: string }) {
  return <LazyLoadImage alt={source} effect="opacity" src={source} width="100%" />
}

export function ContentVideo({ source, provider, controls, poster }: Pick<VideoContent, 'source' | 'provider' | 'controls' | 'poster'>) {
  return <Video source={source} provider={provider} controls={controls} poster={poster} />
}

export function ContentIframe({ source, title }: Pick<IframeContent, 'source' | 'title'>) {
  const [interactive, setInteractive] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (interactive) iframeRef.current?.focus({ preventScroll: true })
  }, [interactive])

  return (
    <div className={s.iframeContainer}>
      <iframe ref={iframeRef} className={s.iframe} src={source} title={title} loading="lazy" allow="fullscreen" allowFullScreen inert={!interactive} style={{ pointerEvents: interactive ? 'auto' : 'none' }} />
      {!interactive && <button type="button" className={s.iframeOverlay} onClick={() => setInteractive(true)}>Click to interact</button>}
    </div>
  )
}

interface ContentTextProps {
  text: string
  localization: ProjectLocalization
  className?: ContentStyleName | ContentStyleName[]
}

export function ContentText({ text, localization, className = "textRegular" }: ContentTextProps) {
  const names: Array<ContentStyleName | 'textBasis'> = className instanceof Array ? ['textBasis', ...className] : ['textBasis', className]
  const classes = names.map(c => s[c])
  return (
    <div className={cx(...classes)}>
      <Markup content={localization[text]} />
    </div>
  )
}
