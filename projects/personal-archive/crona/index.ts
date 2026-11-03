import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import cover from "./cover.gif"
import main from "./Crona.poster.jpg"
import demoVideo from "./Crona.mp4"
import experimentVideo from "./CronaExperiment.mp4"
import screen1 from "./CronaShots-1.jpg"
import screen2 from "./CronaShots-2.jpg"
import soundToyVideo from './crona-sound-toy.mp4'
import soundToyPoster from './crona-sound-toy-poster.jpg'

export const project: Project = {
  collection: 'archive',
  order: 105,
  link: 'personal-crona',
  legacyPaths: ['/dataviz/crona'],
  displayLabel: 'Archive',
  previewImage: cover,
  mainPic: main,
  accentColor: '#FED731',
  fontColor: '#ffffff',
  background: '#000000',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: "Crona",
      description: "An experiment with attraction, collision and motion",
      task: "Explore movement patterns in a group of connected objects.",
      overview: "Crona explores the movement patterns of connected objects under attraction forces, with collision detection. Two recordings document the experiment and its evolving configurations.",
      soundToy: 'Crona is also a digital sound toy: circles attracted by a center of gravity are moved by hands, assembling into different configurations and producing sounds when they collide. Built with Processing and a custom motion tracker.',
      soundToyCredits: 'Idea, coding and music: Nikita Rokotyan.',
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
      type: ContentType.VIDEO,
      source: experimentVideo,
    },
    {
      type: ContentType.IMAGE,
      source: screen1,
    },
    {
      type: ContentType.IMAGE,
      source: screen2,
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: 'soundToy',
    },
    {
      type: ContentType.VIDEO,
      source: soundToyVideo,
      poster: soundToyPoster,
      controls: true,
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padLeft'],
      text: 'soundToyCredits',
    },
  ],
}
