import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import pic1 from './654A9364.jpg'
import interior from './654A9416.jpg'
import pic from './Pic1_2560.png'
import risky from './Pic4_2560.png'
import legend from './legend.png'
import models1 from './IMG_1413.jpg'
import models2 from './IMG_1415.jpg'
import spheres from './spheres.jpg'

import coverVideo from './cover.mp4'
import previewImage from './preview.webp'
import earlierRiskyVideo from './earlier-risky.mp4'

const VIDEO_72U_URL = 'https://projects.interacta.io/interacta-files/risk-data-visualization.mp4'
// const VIDEO_WIREFRAME_SPEHRE = 'https://projects.interacta.io/interacta-files/risky.mp4'
const VIDEO_16_WIREFRAME_SPEHRES = 'https://projects.interacta.io/interacta-files/risky16.mp4'

export const project: Project = {
  order: 3,
  link: 'how-risky',
  previewVid: coverVideo,
  previewImage,
  mainPic: pic,
  accentColor: '#eee',
  fontColor: '#000000',
  background: '#ffffff',
  year: 2016,
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: 'Visualizing Risk',
      task: 'Come up with a creative way of visualizing riskiness',
      description: 'Abstract visualization of riskiness',
      background: `Thirty eight guest speakers were asked to take a survey consisting of <b>12 questions</b> related to 3 different types of risk: <b>financial</b>, <b>social</b> and <b>physical</b>. Their answers have been analyzed and mapped onto a sphere to demonstrate how risky a person is.
      
      Built during the <a target="_blank" rel="noopener noreferrer" href="http://www.72u.org/">72U</a> creative residency program (Los Angeles, <a target="_blank" rel="noopener noreferrer" href="http://www.72andsunny.com/">72andSunny</a>).`,
      process1: `All the spheres were 3d-printed to real physical objects from shiny glazed porcelain and gifted to all of the 38 speakers at the end of the 2015.`,
      earlierRecording: 'An earlier recording shows a single wireframe sphere from the risk visualization.',
    } satisfies ProjectEnglishStrings,
    'ru-RU': {
      description: 'Abstract visualization of riskiness',
    },
  }),
  content: [
    {
      type: ContentType.INFO,
      task: 'task',
      tools: 'Cinder/C++, OpenGL, MeshLab, Shapeways',
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: 'background',
    },
    {
      type: ContentType.VIDEO,
      source: VIDEO_16_WIREFRAME_SPEHRES,
    },
    {
      type: ContentType.VIDEO,
      source: VIDEO_72U_URL,
    },
    {
      type: ContentType.TWO_COLUMNS,
      left: { type: ContentType.IMAGE, source: legend },
      right: { type: ContentType.IMAGE, source: risky },
    },
    {
      type: ContentType.IMAGE,
      source: pic1,
    },
    {
      type: ContentType.IMAGE,
      source: interior,
    },
    {
      type: ContentType.TWO_COLUMNS,
      left: { type: ContentType.TEXT, style: 'textRegular', text: '' },
      right: { type: ContentType.TEXT, style: 'textSmall', text: 'process1' },
    },
    {
      type: ContentType.TWO_COLUMNS,
      left: { type: ContentType.IMAGE, source: models1 },
      right: { type: ContentType.IMAGE, source: models2 },
    },
    {
      type: ContentType.IMAGE,
      source: spheres,
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: 'earlierRecording',
    },
    {
      type: ContentType.VIDEO,
      source: earlierRiskyVideo,
    },
  ],
}
