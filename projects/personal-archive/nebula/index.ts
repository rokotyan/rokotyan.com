import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import cover from "./cover.gif"
import main from "./Nebula.poster.jpg"
import demoVideo from "./Nebula.mp4"

export const project: Project = {
  collection: 'archive',
  order: 106,
  link: 'personal-nebula',
  legacyPaths: ['/dataviz/nebula'],
  displayLabel: 'Archive',
  previewImage: cover,
  mainPic: main,
  accentColor: '#FED731',
  fontColor: '#ffffff',
  background: '#000000',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: "Nebula",
      description: "Digital pointillism in constant motion",
      task: "Recreate a nebula image using moving, colliding circles.",
      overview: "This sketch explores pointillism on a digital canvas. An image of the Carina Nebula, a region of star birth, is recreated by two thousand circles moving and colliding with one another.",
    } satisfies ProjectEnglishStrings,
    'ru-RU': {},
  }),
  content: [
    {
      type: ContentType.INFO,
      task: 'task',
      tools: "Processing",
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: "overview",
    },
    {
      type: ContentType.VIDEO,
      source: demoVideo,
    },
  ],
}
