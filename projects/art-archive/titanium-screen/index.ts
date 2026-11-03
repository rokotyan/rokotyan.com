import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import cover from './cover.jpg'
import main from './main.jpg'
import video from './titanium-screen.mp4'
import poster from './video-poster.jpg'
import detail1 from './detail-1.jpg'
import detail2 from './detail-2.jpg'
import detail3 from './detail-3.jpg'
import detail4 from './detail-4.jpg'

export const project: Project = {
  collection: 'art',
  order: 201,
  link: 'art-titanium-screen',
  legacyPaths: ['/titaniumscreen'],
  previewImage: cover,
  mainPic: main,
  accentColor: '#000000',
  fontColor: '#000000',
  background: '#ffffff',
  year: 2015,
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: 'Titanium Screen',
      description: 'Kinetic installation',
      task: 'Explore how knowledge gives access to information',
      background: 'A titanium screen made of 256 motor-driven pixels displays symbols generated from a library of visual data. Ars Virtua developed the installation through residencies in Minecraft, Silicon Valley and the Ural factories in 2014–2015, exploring the possibility of a visual language that needs no code to be understood.',
      credits: 'Ars Virtua: Nikita Rokotyan, Irina Kotyurgina, Rigina Muftakhova, Sergey Naimushin and Zhenya Chaika, with James Morgan, Olga Stukova and Timophey Stekoltchuk.\nOriginal project text: Zhenya Chaika.\nNo life apart the screen. Ekaterinburg, San Jose, 2014–2015.',
    } satisfies ProjectEnglishStrings,
  }),
  content: [
    { type: ContentType.INFO, task: 'task', tools: 'Titanium, steel, Arduino, motors, computers, programming, video' },
    { type: ContentType.TEXT, style: ['textRegular', 'padLeft'], text: 'background' },
    { type: ContentType.IMAGE, source: detail1 },
    { type: ContentType.VIDEO, source: video, poster, controls: true },
    { type: ContentType.IMAGE, source: detail2 },
    { type: ContentType.IMAGE, source: detail3 },
    { type: ContentType.IMAGE, source: detail4 },
    { type: ContentType.TEXT, style: ['textSmall', 'padLeft'], text: 'credits' },
  ],
}
