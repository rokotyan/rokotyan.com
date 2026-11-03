import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import cover from './cover.jpg'
import main from './main.jpg'
import detail from './detail.jpg'
import drawing1 from './drawing-1.jpg'
import drawing2 from './drawing-2.jpg'
import videoNew from './sandpoints-new.mp4'
import videoOriginal from './sand-points.mp4'
import posterNew from './new-video-poster.jpg'
import posterOriginal from './video-poster.jpg'

export const project: Project = {
  collection: 'art',
  order: 204,
  link: 'art-sandpoints',
  legacyPaths: ['/sandpoints'],
  previewImage: cover,
  mainPic: main,
  accentColor: '#000000',
  fontColor: '#000000',
  background: '#ffffff',
  year: 2011,
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: 'SandPoints',
      description: 'Interactive visual installation',
      task: 'Draw generative patterns with hand movements',
      background: 'SandPoints is a generative drawing installation controlled by hands. Small particles remain in constant motion, representing a simple life form. Attracted by hand movements, they form meditative triangular patterns.',
      credits: 'Idea and coding: Nikita Rokotyan.',
    } satisfies ProjectEnglishStrings,
  }),
  content: [
    { type: ContentType.INFO, task: 'task', tools: 'Processing, Cinder, OpenCV' },
    { type: ContentType.TEXT, style: ['textRegular', 'padLeft'], text: 'background' },
    { type: ContentType.IMAGE, source: detail },
    {
      type: ContentType.TWO_COLUMNS,
      left: { type: ContentType.IMAGE, source: drawing1 },
      right: { type: ContentType.IMAGE, source: drawing2 },
    },
    { type: ContentType.VIDEO, source: videoNew, poster: posterNew, controls: true },
    { type: ContentType.VIDEO, source: videoOriginal, poster: posterOriginal, controls: true },
    { type: ContentType.TEXT, style: ['textSmall', 'padLeft'], text: 'credits' },
  ],
}
