import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import cover from "./cover.gif"
import main from "./CreativeViz.jpg"
import demoVideo from "./SoundCloud Rocketgraph.mp4"

export const project: Project = {
  collection: 'archive',
  order: 100,
  link: 'personal-soundcloud',
  legacyPaths: ['/dataviz/soundcloud'],
  displayLabel: 'Archive',
  previewImage: cover,
  mainPic: main,
  accentColor: '#FED731',
  fontColor: '#ffffff',
  background: '#000000',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: "SoundCloud Activity",
      description: "An interactive portrait of a SoundCloud profile",
      task: "Turn SoundCloud listening activity and track statistics into an interactive visual report.",
      overview: "The SoundCloud Profile Visualizer presents tracks as colorful planets alongside a report of profile activity. It combines music, artwork and statistics in a playful interface.",
      details: "The report includes total plays for top tracks, a color palette drawn from track artwork, a chart of track popularity, and comparisons of tracks, comments, likes, followers and follows. It also identifies the most active followers.",
    } satisfies ProjectEnglishStrings,
    'ru-RU': {},
  }),
  content: [
    {
      type: ContentType.INFO,
      task: 'task',
      tools: "Three.js, D3.js, Underscore.js, Node.js, WebAudio",
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
      text: "details",
    },
  ],
}
