import type { CSSProperties } from 'react'
import type { LocalizedStrings } from 'react-localization'

export type ProjectStrings = Record<string, string>
export interface ProjectEnglishStrings extends ProjectStrings {
  title: string
  description: string
}
export type ProjectLocalization = LocalizedStrings<ProjectStrings>
export type ProjectCollection = 'archive' | 'art'
export type VideoProvider = 'youtube' | 'vimeo'

export type ContentStyleName =
  | 'textRegular'
  | 'textSmall'
  | 'textCallout'
  | 'caption'
  | 'padLeft'
  | 'padRight'
  | 'padHorizontal'
  | 'padVertical'
  | 'alignBottom'

export type ContainerStyleName = 'smallMarginTop' | 'smallMarginBottom'

interface ContentLayout {
  containerStyle?: ContainerStyleName[]
  blockStyle?: CSSProperties
}

export interface InfoContent extends ContentLayout {
  type: 'info'
  task: string
  tools: string
}

export interface TextContent extends ContentLayout {
  type: 'text'
  text: string
  style?: ContentStyleName | ContentStyleName[]
}

export interface ImageContent extends ContentLayout {
  type: 'image'
  source: string
}

export interface VideoContent extends ContentLayout {
  type: 'video'
  source: string
  provider?: VideoProvider
  controls?: boolean
  poster?: string
}

export interface IframeContent extends ContentLayout {
  type: 'iframe'
  source: string
  title: string
}

export interface TwoColumnsContent extends ContentLayout {
  type: 'two-columns'
  left: ContentBlock
  right: ContentBlock
}

export type ContentBlock = InfoContent | TextContent | ImageContent | VideoContent | IframeContent | TwoColumnsContent

export interface Project {
  order: number
  year?: number | string
  link: string
  mainPic: string
  previewVid?: string
  previewImage?: string
  accentColor: string
  fontColor: string
  headerColor?: string
  background: string
  hidden?: boolean
  collection?: ProjectCollection
  displayLabel?: string
  legacyPaths?: string[]
  heroStyle?: CSSProperties
  heroDescriptionStyle?: CSSProperties
  strings: ProjectLocalization
  content: ContentBlock[]
}
