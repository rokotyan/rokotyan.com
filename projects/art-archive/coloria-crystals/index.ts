import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import cover from './cover.jpg'
import main from './main.jpg'
import video from './coloria-crystals.mp4'
import poster from './video-poster.jpg'
import heart from './heart.jpg'
import bottle from './bottle.jpg'

export const project: Project = {
  collection: 'art',
  order: 207,
  link: 'art-coloria-crystals',
  legacyPaths: ['/coloria_crystals'],
  previewImage: cover,
  mainPic: main,
  accentColor: '#000000',
  fontColor: '#000000',
  background: '#ffffff',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: 'Coloria Crystals',
      description: 'Creative code',
      task: 'Creative code experiment',
    } satisfies ProjectEnglishStrings,
  }),
  content: [
    { type: ContentType.INFO, task: 'task', tools: 'Processing, OpenGL, Box2D' },
    { type: ContentType.VIDEO, source: video, poster, controls: true },
    {
      type: ContentType.TWO_COLUMNS,
      left: { type: ContentType.IMAGE, source: heart },
      right: { type: ContentType.IMAGE, source: bottle },
    },
    { type: ContentType.IMAGE, source: cover },
  ],
}
