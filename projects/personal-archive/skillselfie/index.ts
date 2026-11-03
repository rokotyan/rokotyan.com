import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import cover from "./cover.gif"
import main from "./Iris.poster.jpg"
import irisVideo from "./Iris.mp4"
import confettiVideo from "./Confetti.mp4"
import gapVideo from "./GapAnalysis.mp4"
import comparison from "./POTUS_highres.gif"

export const project: Project = {
  collection: 'archive',
  order: 102,
  link: 'personal-skillselfie',
  legacyPaths: ['/dataviz/skillselfie'],
  displayLabel: 'Archive',
  previewImage: cover,
  mainPic: main,
  accentColor: '#FED731',
  fontColor: '#191919',
  background: '#ffffff',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: "Selfie of Your Skills",
      description: "Mapping knowledge and experience to a single interactive image",
      task: "Explore a visual way to present and compare people’s skills and experience.",
      overview: "Map an entire skill set to a single interactive image. This project explores a different way to present people’s knowledge and experience, compare skill sets, and identify candidates for a job.",
    } satisfies ProjectEnglishStrings,
    'ru-RU': {},
  }),
  content: [
    {
      type: ContentType.INFO,
      task: 'task',
      tools: "D3, React/Redux, Webpack, Express, MongoDB, ES7",
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: "overview",
    },
    {
      type: ContentType.VIDEO,
      source: irisVideo,
    },
    {
      type: ContentType.VIDEO,
      source: confettiVideo,
    },
    {
      type: ContentType.VIDEO,
      source: gapVideo,
    },
    {
      type: ContentType.IMAGE,
      source: comparison,
    },
  ],
}
