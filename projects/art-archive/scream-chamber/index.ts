import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import cover from './cover.jpg'
import main from './main.jpg'
import video from './scream-chamber.mp4'
import poster from './video-poster.jpg'
import led from './led.gif'
import blowMind from './blow-mind.gif'
import pompoms from './pompoms.gif'
import pompoms2 from './pompoms-2.gif'
import paint from './paint.gif'
import detail1 from './detail-1.jpg'
import detail2 from './detail-2.jpg'
import detail3 from './detail-3.jpg'
import detail4 from './detail-4.jpg'

export const project: Project = {
  collection: 'art',
  order: 200,
  link: 'art-scream-chamber',
  legacyPaths: ['/screamchamber'],
  previewImage: cover,
  mainPic: main,
  accentColor: '#000000',
  fontColor: '#000000',
  background: '#ffffff',
  year: 2015,
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: 'Scream Chamber',
      description: 'Interactive sculpture',
      task: 'Turn screams into a physical and visual response',
      background: 'Created with 72U for 2 Bit Circus’s STEAM Carnival, Scream Chamber turns screams into bubbles, floating ribbons, flying pompoms, wind and a light show. Over a three-day weekend, 16,000 children in the Bay Area interacted with the sculpture.',
    } satisfies ProjectEnglishStrings,
  }),
  content: [
    { type: ContentType.INFO, task: 'task', tools: 'Arduino, sensors, CNC router, wood, LEDs, fans, tubes, pompoms, ribbons' },
    { type: ContentType.TEXT, style: ['textRegular', 'padLeft'], text: 'background' },
    { type: ContentType.VIDEO, source: video, poster, controls: true },
    { type: ContentType.IMAGE, source: blowMind },
    {
      type: ContentType.TWO_COLUMNS,
      left: { type: ContentType.IMAGE, source: led },
      right: { type: ContentType.IMAGE, source: pompoms },
    },
    {
      type: ContentType.TWO_COLUMNS,
      left: { type: ContentType.IMAGE, source: pompoms2 },
      right: { type: ContentType.IMAGE, source: paint },
    },
    { type: ContentType.IMAGE, source: detail1 },
    { type: ContentType.IMAGE, source: detail2 },
    { type: ContentType.IMAGE, source: detail3 },
    { type: ContentType.IMAGE, source: detail4 },
  ],
}
