import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import cover from "./cover.gif"
import main from "./Bilevel Donut.poster.jpg"
import donutVideo from "./Bilevel Donut.mp4"
import bipartiteVideo from "./Bipartite v2.mp4"
import multibarVideo from "./Multibar.mp4"

export const project: Project = {
  collection: 'archive',
  order: 103,
  link: 'personal-euclid',
  legacyPaths: ['/dataviz/euclid'],
  displayLabel: 'Archive',
  previewImage: cover,
  mainPic: main,
  accentColor: '#FED731',
  fontColor: '#191919',
  background: '#ffffff',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: "D3 Charting Library",
      description: "Reusable interactive charts for Unified Patents",
      task: "Contribute reusable chart components to a private D3.js visualization library.",
      overview: "I contributed to a private D3.js charting library for <a href=\"https://www.unifiedpatents.com\" target=\"_blank\" rel=\"noopener noreferrer\">Unified Patents</a>. These recordings show its bilevel donut, bipartite and multibar charts.",
    } satisfies ProjectEnglishStrings,
    'ru-RU': {},
  }),
  content: [
    {
      type: ContentType.INFO,
      task: 'task',
      tools: "D3.js",
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: "overview",
    },
    {
      type: ContentType.VIDEO,
      source: donutVideo,
    },
    {
      type: ContentType.VIDEO,
      source: bipartiteVideo,
    },
    {
      type: ContentType.VIDEO,
      source: multibarVideo,
    },
  ],
}
