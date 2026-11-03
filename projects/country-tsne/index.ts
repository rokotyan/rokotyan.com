import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import tsneControls from './tsne-controls.png'
import overviewImage from './overview.png'
import wdvpCeremonyImage from './wdvp-ceremony.jpg'

import vis from './vis.jpg'
import coverVideo from './cover.mp4'
import previewImage from './preview.webp'

const INTRO_VIDEO_SRC = '360509110'
const TSNE_VIDEO_SRC = '360509391'

const BULLETS_TEXT_BLOCK_STYLE = { paddingTop: 0, paddingBottom: 20 }
export const project: Project = {
  order: 0,
  link: 'country-tsne',
  previewVid: coverVideo,
  previewImage,
  mainPic: vis,
  accentColor: '#F6B78C',
  fontColor: '#f2f2f2',
  background: '#393D46',
  year: 2019,
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: 'Data-Driven Country Map',
      description: 'Visualizing country data using t-SNE',
      task: `Build an interactive country data exploration tool powered by machine learning`,
      wdvp:
        `In February of 2019 in Dubai, we <a href="https://www.youtube.com/watch?v=wZ67rzrOpu0" target="_blank">received</a> the main prize in the <b>World Data Visualization</b> competition. The <b>crowned prince of the United Arab Emirates</b> personally awarded the Prize, and the contest itself was held in partnership with the World Government Summit.
        
        <b>The Summit</b> chose dataviz for one of its special awards. We think it highlights the relevance of this area and raises its status. Government summit that usually deals with the most important global issues has driven attention to how to get the most out of working with data. The organizers invited <b>David McCandless</b>, a well-known data journalist and one of the best experts on data visualization, to curate the entire project from collecting applications to appointing the jury. It was a great honor for us that it is under his leadership the jury rewarded our project.`,
      intro:
        '<b>The question</b> came along with a small dataset, which described each country with 32 measurable parameters ranging from population, size, happiness index, GDP, level of corruption and number of women in government. Despite that the organizers called to think about the measures for success of various governments or look for patterns in figures, only economists or politicians can treat such data professionally. Although we can help them with it.',
      summary:
        '<b>We have created</b> an alternative world map and reflected what will happen to the situation in the country if certain parameters change. Since we are experts in data visualization, and not geopolitics, we refrained from evaluating this data in any way. We employed a machine learning algorithm to process data, and you are left to play with the unemployment rate, health care costs and other characteristics.',
      howToRead:
        `Each point on the <b>map</b> stands for a <b>country</b>, points are grouped not according to geographic proximity, as on a regular map, but by a number of characteristics.

        The map is powered by the <a href="https://lvdmaaten.github.io/tsne/" target="_blank">t-SNE</a> algorithm. Its main goal is to analyze hundreds of characteristics and identify local and global similarities. It is important to understand that t-SNE treats data utterly objectively: it does not care what it is about.`,
      ending:
        `We believe that one of the <b>data visualization</b> missions is to tell a long and complex story concisely and clearly. Although data objectivity is one of the biggest modern myths, still due to visualization one can observe trends and patterns that are completely invisible in the tables.

        
        👉 <a href="https://projects.interacta.io/country-tsne/" target="_blank"><span>Run the visualization</span></a>`,
      tool:
        `The map turned out to be <i>magical</i>:`,
      bullet1:
      `• It merged an <b>analytical algorithm and visualization</b>. The project’s UI allows to control the algorithm in real time.`,
      bullet2:
      `• It is fully <b>interactive</b>. In the list you can choose what will the color or size of points indicate in order to explore the map effectively.`,
      bullet3:
      `• The tool allows to <b>experiment quickly</b>. Just try to improve life in a separate country by raising the level of health care and GDP, and see how its position on the map changes.`,
      tool2:
        `• It is fully interactive. In the list you can choose what will the color or size of points indicate in order to explore the map effectively. On the separate panel on the right you can experiment, turning on and off different properties or vary their values, and that will affect the outcome.
        • Our tool allows to experiment very quickly. Just try to improve life in a separate country by raising the level of health care and GDP, and see how its position on the map changes.`,
    } satisfies ProjectEnglishStrings,
    'ru-RU': {
    },
  }),
  content: [
    {
      type: ContentType.INFO,
      task: 'task',
      tools: 't-SNE, D3',
    },
    {
      type: ContentType.IMAGE,
      source: wdvpCeremonyImage,
    },
    {
      type: ContentType.TEXT,
      text: 'wdvp',
    },
    {
      type: ContentType.VIDEO,
      source: TSNE_VIDEO_SRC,
      provider: 'vimeo',
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padRight'],
      text: 'intro',
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padLeft'],
      text: 'summary',
      blockStyle: { paddingTop: '5%' },
    },
    // {
    //   type: ContentType.TWO_COLUMNS,
    //   left: { type: ContentType.TEXT, style: 'textSmall', text: 'intro' },
    //   right: { type: ContentType.TEXT, style: 'textSmall', text: 'summary' },
    // },
    {
      type: ContentType.VIDEO,
      source: INTRO_VIDEO_SRC,
      provider: 'vimeo',
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padLeft'],
      text: 'howToRead',
    },
    // {
    //   type: ContentType.TWO_COLUMNS,
    //   left: { type: ContentType.TEXT, style: 'textSmall', text: 'howItWorks' },
    //   right: { type: ContentType.TEXT, style: 'textSmall', text: 'howToRead' },
    // },
    {
      type: ContentType.IMAGE,
      source: tsneControls,
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padLeft'],
      text: 'tool',
      blockStyle: { paddingBottom: '4%' },
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padLeft'],
      text: 'bullet1',
      blockStyle: BULLETS_TEXT_BLOCK_STYLE,
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padLeft'],
      text: 'bullet2',
      blockStyle: BULLETS_TEXT_BLOCK_STYLE,
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padLeft'],
      text: 'bullet3',
      blockStyle: BULLETS_TEXT_BLOCK_STYLE,
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padRight'],
      text: 'ending',
      blockStyle: { paddingRight: '0%' },
    },
    // {
    //   type: ContentType.TWO_COLUMNS,
    //   left: { type: ContentType.TEXT, style: 'textSmall', text: 'tool' },
    //   right: { type: ContentType.TEXT, style: 'textSmall', text: 'ending' },
    // },
    // {
    //   type: ContentType.TWO_COLUMNS,
    //   left: { type: ContentType.TEXT, style: 'textSmall', text: 'ending' },
    //   right: { type: ContentType.TEXT, style: 'textSmall', text: '' },
    // },
    {
      type: ContentType.IMAGE,
      source: overviewImage,
    },
  ],
}
