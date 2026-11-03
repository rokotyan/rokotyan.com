import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import coverImage from './cover.png'
import coverVideo from './cover.mp4'
import previewImage from './preview.webp'
import bubblesImage from './bubbles.png'
// import timelineVideo from './timeline.mp4'

const TIMELINE_VIDEO_SRC = '357145511'

export const project: Project = {
  order: 9,
  link: 'econsight',
  previewVid: coverVideo,
  previewImage,
  mainPic: coverImage,
  accentColor: '#fdc739',
  fontColor: '#fff',
  background: '#353b48',
  year: 2018,
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: 'Patents in AI',
      description: 'Evolution of patents since 1969',
      task: `Illustrate how the number of patents in Artificial Intelligence and Machine Learning has changed worldwide`,
      intro:
        `The Swiss company <b>EconSight</b> conducts economic researches. It also keeps track of <b>Artificial Intelligence</b> patents registered by companies around the world. The data has been collected since 1969, and this joint project means to show how the number of patent applications changed year by year and how continents seized leadership from each other.`,
      data:
        `Initial data included the names of companies, their location and the distribution of their patents by year. The visual image had to combine the dynamics over the years with geographical diversity, as well as to reveal the largest patent holders among companies and continents.`,
      solution:
        `The solution employed animated timeline, which allows to observe changes year after year. Each bubble represents a patent author (most often these are IT companies). The color indicates a company’s location, and the size increases with the number of patents. Thus, we visually grouped companies by geography. By color a viewer can follow in dynamics the growth or decline of activity on each continent and also monitor the influence of individual companies.
        `,
      medium: '👉 <a href="https://medium.com/interacta" target="_blank"><span>Read more on Medium</span><a/>',
    } satisfies ProjectEnglishStrings,
    'ru-RU': {
    },
  }),
  content: [
    {
      type: ContentType.INFO,
      task: 'task',
      tools: 'D3, Canvas, TopoJSON, Shifty, Awesomplete',
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padRight'],
      text: 'intro',
      // blockStyle: { paddingRight: '0%' },
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padLeft'],
      text: 'data',
      blockStyle: { paddingTop: '2%' },
    },
    // {
    //   type: ContentType.TWO_COLUMNS,
    //   left: { type: ContentType.TEXT, style: 'textSmall', text: 'intro' },
    //   right: { type: ContentType.TEXT, style: ['textSmall'], text: 'data' },
    // },
    {
      type: ContentType.VIDEO,
      source: TIMELINE_VIDEO_SRC, // timelineVideo
      provider: 'vimeo',
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular'],
      text: 'solution',
    },
    {
      type: ContentType.IMAGE,
      source: bubblesImage,
    },
  ],
}
