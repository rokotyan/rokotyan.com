import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import cover from "./cover.gif"
import main from "./Underwater Creatures.poster.jpg"
import demoVideo from "./Underwater Creatures.mp4"

export const project: Project = {
  collection: 'archive',
  order: 107,
  link: 'personal-underwater',
  legacyPaths: ['/dataviz/underwater'],
  displayLabel: 'Archive',
  previewImage: cover,
  mainPic: main,
  accentColor: '#FED731',
  fontColor: '#ffffff',
  background: '#000000',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: "Underwater Creatures",
      description: "A simulation of underwater flocking behavior",
      task: "Explore the collective motion of underwater creatures.",
      overview: "A simulation exploring the flocking behavior of underwater creatures.",
      credits: "Created during “Insect Smarts”, a one-day workshop by <a href=\"http://truth-and-beauty.net\" target=\"_blank\" rel=\"noopener noreferrer\">Moritz Stefaner</a> and <a href=\"http://do.minik.us\" target=\"_blank\" rel=\"noopener noreferrer\">Dominikus Baur</a> at <a href=\"http://resonate.io\" target=\"_blank\" rel=\"noopener noreferrer\">Resonate</a>.",
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
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: "credits",
    },
  ],
}
