import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import cover from './cover.jpg'
import main from './main.jpg'
import valley from './titanium-valley.jpg'
import woodenTree from './wooden-tree.jpg'
import minecraft from './minecraft.jpg'
import pressConference from './press-conference.jpg'
import city from './city.jpg'
import camping from './camping.jpg'
import innoprom from './innoprom.jpg'
import crew from './crew.jpg'

export const project: Project = {
  collection: 'art',
  order: 206,
  link: 'art-v2v',
  legacyPaths: ['/v2v'],
  previewImage: cover,
  mainPic: main,
  accentColor: '#000000',
  fontColor: '#000000',
  background: '#ffffff',
  year: '2011–2012',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: 'V2V: Valley to Valley',
      description: 'Research-based art in a virtual environment',
      background: 'V2V explores similarities and differences between Silicon Valley and the prospective Titanium Valley. Artists, sociologists, historians and science students used Minecraft as a shared space to build a city and community, then translated objects from that virtual environment into physical forms.',
      exhibitions: 'The project was shown at Innoprom 2012, the Zero1 Biennial in San Jose, California, and the 2nd Ural Industrial Biennial of Contemporary Art in Yekaterinburg, Russia.',
    } satisfies ProjectEnglishStrings,
  }),
  content: [
    { type: ContentType.TEXT, style: ['textRegular', 'padLeft'], text: 'background' },
    { type: ContentType.IMAGE, source: valley },
    { type: ContentType.IMAGE, source: woodenTree },
    { type: ContentType.TEXT, style: ['textRegular', 'padLeft'], text: 'exhibitions' },
    { type: ContentType.IMAGE, source: minecraft },
    { type: ContentType.IMAGE, source: pressConference },
    { type: ContentType.IMAGE, source: city },
    { type: ContentType.IMAGE, source: camping },
    { type: ContentType.IMAGE, source: innoprom },
    { type: ContentType.IMAGE, source: crew },
  ],
}
