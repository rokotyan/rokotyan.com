import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import coverVideo from './cover.mp4'
import previewImage from './preview.webp'
import coverImage from './cover.png'
// import roriPubMedImage from './rori-pubmed-all.png'
import roriDetailsImage from './rori-2014-2018-all.png'
import roriDescriptionImage from './rori-description.png'

const COLORS_VIDEO_SRC = '368155056'
const DETAILS_VIDEO_SRC = '368155020'

export const project: Project = {
  order: 4,
  link: 'rori',
  previewVid: coverVideo,
  previewImage,
  year: 2019,
  mainPic: coverImage,
  accentColor: '#f6b920',
  fontColor: '#444',
  background: '#fcfcfc',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: 'Research Funding Landscape',
      description: '2500+ research fields across all sciences',
      task: `Visualize the funding landscape of thousands of scientific field`,
      intro: `Researchers from the <a href="https://www.cwts.nl" target="_blank">Centre for Science and Technology Studies</b> of <a href="https://www.universiteitleiden.nl" target="_blank">Leiden University</a> approached to us with a request to build an interactive web-based visualization of how different research fields are being funded. They already have a <a href="https://www.vosviewer.com" target="_blank">Java tool</a> for visualizing bibliometric networks and they wanted to bring that experience online.`,
      explanation: `«This funding landscape shows 2890 research fields across all sciences. By changing the size and color coding, the contribution of a specific research funder to the different fields can be made visible.»
      
      👉 <a href="https://www.cwts.nl/rori/fundinglandscape/?map=global" target="_blank"><span>Explore the project</span><a/>`,
    } satisfies ProjectEnglishStrings,
    'ru-RU': {
    },
  }),
  content: [
    {
      type: ContentType.INFO,
      task: 'task',
      tools: 'D3, Canvas, VOSviewer',
    },
    {
      type: ContentType.IMAGE,
      source: roriDetailsImage,
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: 'intro',
    },
    // {
    //   type: ContentType.IMAGE,
    //   source: mapZoomedImage,
    // },

    {
      type: ContentType.VIDEO,
      source: DETAILS_VIDEO_SRC,
      provider: 'vimeo',
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: 'explanation',
    },
    {
      type: ContentType.IMAGE,
      source: roriDescriptionImage,
    },
    {
      type: ContentType.VIDEO,
      source: COLORS_VIDEO_SRC,
      provider: 'vimeo',
    },
  ],
}
