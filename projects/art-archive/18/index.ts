import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import cover from './cover.jpg'
import main from './main.jpg'
import video from './18-trailer.mp4'
import poster from './video-poster.jpg'
import ipad from './ipad.jpg'
import moodshot from './moodshot.jpg'
import designer from './unit-designer.png'
import bomb from './bomb.gif'
import resource from './resource.gif'
import mine from './mine.gif'
import turret from './turret.gif'
import wall from './wall.gif'

export const project: Project = {
  collection: 'art',
  order: 205,
  link: 'art-18',
  legacyPaths: ['/18'],
  previewImage: cover,
  mainPic: main,
  accentColor: '#000000',
  fontColor: '#000000',
  background: '#ffffff',
  year: 2012,
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: '18',
      description: 'Music game prototype',
      task: 'Turn a tower defense game into a way to compose music',
      background: 'A tower defense music game prototype that shifts the player’s attention toward composing. Each character has a musical theme that evolves during play; selecting a character set is like choosing an ensemble of instruments. The technical challenges included animated vector graphics in OpenGL, synchronization of music and animation, and cross-platform code.',
      credits: 'Idea: Oleg Stavitsky.\nDesign: Rémi Engel.\nSound: Dima Evgrafov.\nCoding: Nikita Rokotyan.',
    } satisfies ProjectEnglishStrings,
  }),
  content: [
    { type: ContentType.INFO, task: 'task', tools: 'Cinder, OpenGL, FMOD, BASS, SVG, Adobe Creative Suite' },
    { type: ContentType.TEXT, style: ['textRegular', 'padLeft'], text: 'background' },
    { type: ContentType.VIDEO, source: video, poster, controls: true },
    { type: ContentType.IMAGE, source: ipad },
    { type: ContentType.IMAGE, source: moodshot },
    {
      type: ContentType.TWO_COLUMNS,
      left: { type: ContentType.IMAGE, source: bomb },
      right: { type: ContentType.IMAGE, source: resource },
    },
    {
      type: ContentType.TWO_COLUMNS,
      left: { type: ContentType.IMAGE, source: mine },
      right: { type: ContentType.IMAGE, source: turret },
    },
    { type: ContentType.IMAGE, source: wall, blockStyle: { maxWidth: 320, margin: '0 auto' } },
    { type: ContentType.IMAGE, source: designer },
    { type: ContentType.TEXT, style: ['textSmall', 'padLeft'], text: 'credits' },
  ],
}
