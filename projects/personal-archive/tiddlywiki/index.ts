import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import cover from "./cover.gif"
import main from "./TiddlyWiki.png"
import reportVideo from "./Bar Chart Report v2.mp4"
import demoVideo from "./TW1.mp4"

export const project: Project = {
  collection: 'archive',
  order: 108,
  link: 'personal-tiddlywiki',
  legacyPaths: ['/dataviz/tiddlywiki'],
  displayLabel: 'Archive',
  previewImage: cover,
  mainPic: main,
  accentColor: '#FED731',
  fontColor: '#191919',
  background: '#ffffff',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: "D3 Plugin for TiddlyWiki",
      description: "Interactive charts for a personal web notebook",
      task: "Build a custom D3.js charting plugin for financial reports in TiddlyWiki.",
      overview: "<a href=\"https://tiddlywiki.com\" target=\"_blank\" rel=\"noopener noreferrer\">TiddlyWiki</a> is a reusable, nonlinear personal web notebook written in HTML, CSS and JavaScript. I developed a custom D3.js charting plugin to use it as a tool for financial reports, with charts running directly in the browser.",
    } satisfies ProjectEnglishStrings,
    'ru-RU': {},
  }),
  content: [
    {
      type: ContentType.INFO,
      task: 'task',
      tools: "D3.js, TiddlyWiki",
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: "overview",
    },
    {
      type: ContentType.VIDEO,
      source: reportVideo,
    },
    {
      type: ContentType.VIDEO,
      source: demoVideo,
    },
  ],
}
