import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import cover from './cover.jpg'
import main from './main.jpg'
import plan from './plan.svg'
import video from './kaleidoskopen20000.mp4'
import poster from './video-poster.jpg'
import detail1 from './detail-1.jpg'
import detail2 from './detail-2.jpg'
import detail3 from './detail-3.jpg'
import detail4 from './detail-4.jpg'

export const project: Project = {
  collection: 'art',
  order: 203,
  link: 'art-kaleidoskopen20000',
  legacyPaths: ['/kaleidoskopen20000'],
  previewImage: cover,
  mainPic: main,
  accentColor: '#000000',
  fontColor: '#000000',
  background: '#ffffff',
  year: 2013,
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: 'Kaleidoskopen20000',
      description: 'Interactive sound sculpture',
      task: 'Explore an interactive sound cloud through touch',
      background: 'Nine sounding cubes each play their own theme. A light cord acts as a sensor: touching it silences every cube except the nearest two, letting visitors tune into particular sounds by moving their hands along the cord.',
      credits: 'Idea: Boris Hegenbart.\nCoding: Boris Hegenbart (Max/MSP), Nikita Rokotyan (Cinder, OpenCV).\nSounds: Anastasiya Meyster, Boris Hegenbart, Dasha Kolmakova, Dima Krylov, Kirill Likhin, Mria Prosphora, Natasha Shipilova, Nikita Rokotyan, Valentina Anufrieva.\nPhoto and video: Masha Merezhnikova.',
    } satisfies ProjectEnglishStrings,
  }),
  content: [
    { type: ContentType.INFO, task: 'task', tools: 'Max/MSP, Cinder, OpenCV' },
    { type: ContentType.TEXT, style: ['textRegular', 'padLeft'], text: 'background' },
    { type: ContentType.IMAGE, source: plan },
    { type: ContentType.VIDEO, source: video, poster, controls: true },
    { type: ContentType.IMAGE, source: detail1 },
    { type: ContentType.IMAGE, source: detail2 },
    { type: ContentType.IMAGE, source: detail3 },
    { type: ContentType.IMAGE, source: detail4 },
    { type: ContentType.TEXT, style: ['textSmall', 'padLeft'], text: 'credits' },
  ],
}
