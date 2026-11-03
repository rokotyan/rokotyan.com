import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import co21 from './co21.jpg'
import main from './CO22.jpg'
import videoMain from './CO2 2015 1x.mp4'
import video2 from './CO2 2015 Inside 1x.mp4'
import coverVideo from './cover.mp4'
import previewImage from './preview.webp'

export const project: Project = {
  order: -2,
  year: '2012, 2026',
  link: 'co2-viz',
  previewVid: coverVideo,
  previewImage,
  mainPic: main,
  accentColor: '#FED731',
  fontColor: '#ffffff',
  background: '#000000',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: 'Climate Globe',
      description: 'An interactive globe of Earth’s changing atmosphere',
      task: 'Explore seasonal patterns and long-term changes in Earth’s atmosphere',
      background: `I rebuilt this experiment for the web as Climate Globe. It now brings together CO₂, methane, carbon monoxide and near-surface temperature, using 280 months of NASA AIRS satellite data from September 2002 to February 2026. The globe’s shape and color reveal seasonal patterns and long-term change.`,
      explore: `Choose a layer below, scrub the timeline to explore the record, and click the globe to pause. On touch screens, drag to rotate and pinch to zoom.

      <a target="_blank" rel="noopener noreferrer" href="https://rokotyan.github.io/climate-globe/">Open Climate Globe ↗</a> · <a target="_blank" rel="noopener noreferrer" href="https://github.com/rokotyan/climate-globe">Source code ↗</a>`,
      archiveTitle: 'The original experiment',
      process1: `The original version used Cinder and OpenGL to visualize CO₂. These images and recordings document that earlier experiment.`,
    } satisfies ProjectEnglishStrings,
    'ru-RU': {
    },
  }),
  content: [
    {
      type: ContentType.INFO,
      task: 'task',
      tools: 'TypeScript, WebGL2, luma.gl, Python',
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: 'background',
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: 'explore',
    },
    {
      type: ContentType.IFRAME,
      source: 'https://rokotyan.github.io/climate-globe/',
      title: 'Climate Globe — interactive atmospheric data visualization',
    },
    {
      type: ContentType.TEXT,
      style: ['caption', 'padLeft'],
      containerStyle: ['smallMarginBottom'],
      text: 'archiveTitle',
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: 'process1',
      containerStyle: ['smallMarginTop'],
    },
    {
      type: ContentType.IMAGE,
      source: co21,
    },
    {
      type: ContentType.VIDEO,
      source: videoMain,
    },
    {
      type: ContentType.VIDEO,
      source: video2,
    },
  ],
}
