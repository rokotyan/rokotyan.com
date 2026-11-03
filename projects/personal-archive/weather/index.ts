import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import cover from "./cover.gif"
import main from "./Weather_6cities.poster.jpg"
import demoVideo from "./Weather_6cities.mp4"

export const project: Project = {
  collection: 'archive',
  order: 104,
  link: 'personal-weather',
  legacyPaths: ['/dataviz/weather'],
  displayLabel: 'Archive',
  previewImage: cover,
  mainPic: main,
  accentColor: '#FED731',
  fontColor: '#191919',
  background: '#ffffff',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: "City Thermometer",
      description: "An abstract portrait of temperatures around the world",
      task: "Show air temperatures in different cities through an abstract visualization.",
      overview: "An abstract visualization showing air temperatures in different cities around the world, built with Processing and OpenWeatherMap data.",
    } satisfies ProjectEnglishStrings,
    'ru-RU': {},
  }),
  content: [
    {
      type: ContentType.INFO,
      task: 'task',
      tools: "Processing, OpenWeatherMap",
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
