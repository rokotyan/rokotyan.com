import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import cover from './cover.jpg'
import main from './main.jpg'
import video from './polyhedra.mp4'
import poster from './video-poster.jpg'
import detail1 from './detail-1.jpg'
import detail2 from './detail-2.jpg'

export const project: Project = {
  collection: 'art',
  order: 202,
  link: 'art-polyhedra',
  legacyPaths: ['/polyhedra'],
  previewImage: cover,
  mainPic: main,
  accentColor: '#000000',
  fontColor: '#000000',
  background: '#ffffff',
  year: 2014,
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: 'Polyhedra',
      description: 'Interactive sound sculpture',
      task: 'Explore the perception of form and sound',
      background: 'Seven polyhedra and five strings hanging from the ceiling form an interactive sound sculpture. Each polyhedron produces a particular sound when hung. By changing the shapes and their positions, visitors create a personal sculpture with a unique sound.',
      credits: 'Idea and production: Nikita Rokotyan, Irina Kotyurgina.\nCoding: Nikita Rokotyan.\nSound: Dmitriy Evgrafov.\nPhoto and video: Masha Merezhnikova.',
    } satisfies ProjectEnglishStrings,
  }),
  content: [
    { type: ContentType.INFO, task: 'task', tools: 'Cinder/C++, Arduino, cardboard' },
    { type: ContentType.TEXT, style: ['textRegular', 'padLeft'], text: 'background' },
    { type: ContentType.VIDEO, source: video, poster, controls: true },
    { type: ContentType.IMAGE, source: detail1 },
    { type: ContentType.IMAGE, source: detail2 },
    { type: ContentType.TEXT, style: ['textSmall', 'padLeft'], text: 'credits' },
  ],
}
