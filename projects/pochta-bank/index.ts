import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import coverImage from './cover.png'
import mapZoomedImage from './pochta-map-zoomed.png'

import fourMaps from './4-maps.png'

import coverVideo from './cover.mp4'
import growthVideo from './growth.mp4'

export const project: Project = {
  order: 8,
  hidden: true,
  link: 'pochta-bank',
  previewVid: coverVideo,
  year: 2018,
  mainPic: coverImage,
  accentColor: '#f9be2b',
  fontColor: '#444',
  background: '#fcfcfc',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: 'Pochta Bank Network',
      description: 'Spreading across the country',
      task: 'Visualize growth of the Pochta Bank network of offices',
      intro: `In 2016 <a href="https://www.pochta.ru" target="_blank">Russian Post</a> has started to provide consumer banking services under the <a href="https://www.pochtabank.ru" target="_blank">Pochta Bank</a> brand. Using the existing infrastructure of Russian Post allowed the new bank to grow quickly and extensivly by opening new branches in the existing post offices.`,
      intro2: `The network has grown to almost every city in the country and Pochta Bank wanted to have a tool that could visually display that growth and the current state of the network. The bank is using it in their presentations, analytics and reports.`,
    } satisfies ProjectEnglishStrings,
    'ru-RU': {
      title: 'Интерактивная карта сети отделений',
      description: 'Инструмент для визуализации состояния сети Почта Банка.',
      intro: `В 2016 году Почта России, крупнейший оператор российской почтовой сети, начал развиваться в банковской сфере деятельности, открыв в своих многочисленных почтовых отделениях точки продаж <a href="https://www.pochtabank.ru" target="_blank">Почта Банка</a>.`,
      intro2: `Довольно быстро сеть банка разрослась и появилась почти в каждом городе страны. Поэтому потребовался интерактивный инструмент, визуализирующий состояние сети Почта Банка, чтобы компания могла использовать обработанную им информацию в различных презентациях, аналитике и статьях.`,
      process1:
        'Количество населенных пунктов для отображения на карте составляло около 4 тысяч на момент разработки, поэтому мы решили использовать Canvas для отрисовки карты и точек. ',
    },
  }),
  content: [
    {
      type: ContentType.INFO,
      task: 'task',
      tools: 'D3, Canvas, TopoJSON, Shifty',
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: 'intro',
    },
    {
      type: ContentType.IMAGE,
      source: mapZoomedImage,
    },
    {
      type: ContentType.TEXT,
      style: ['textCallout'],
      text: 'intro2',
    },
    // {
    //   type: ContentType.TWO_COLUMNS,
    //   left: { type: ContentType.TEXT, style: 'textSmall', text: 'intro' },
    //   right: { type: ContentType.TEXT, style: 'textSmall', text: 'process1' },
    // },
    {
      type: ContentType.VIDEO,
      source: growthVideo,
    },
    {
      type: ContentType.IMAGE,
      source: fourMaps,
    },
    // {
    //   type: ContentType.VIDEO,
    //   source: mapByTypeVideo,
    // },
  ],
}
