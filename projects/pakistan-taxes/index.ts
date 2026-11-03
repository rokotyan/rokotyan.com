// eslint-disable no-irregular-whitespace
import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import coverVideo from './cover.mp4'
import previewImage from './preview.webp'
import coverImage from './cover.png'
import clustersImage from './clusters.png'
import dataImage from './data.png'

const EXPENDITURE_VIDEO_SRC = '368601220'
const TAXES_VIDEO_SRC = '368601257'

export const project: Project = {
  order: 1,
  link: 'pakistan-taxes',
  previewVid: coverVideo,
  previewImage,
  year: 2016,
  mainPic: coverImage,
  accentColor: '#d6cfdc',
  fontColor: '#eee',
  background: '#1e1e1e',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: 'Taxes and Budget',
      description: 'Visualizing governmental taxes, buget spendings and revenues',
      task: `Visualize what amount of taxes every parliament member of Pakistan pays, budget expenditures and budget revenues in 2016-2017`,
      intro: `We've been asked to visualize the amount of taxes every parliament member of Pakistan pays to the state based on open data.
      In 2013 <a href="https://bost.ocks.org/mike/" target="_blank">Mike Bostock</a> has visualized the budget of the United States by using a Force Bubble diagram (see <a href="https://archive.nytimes.com/www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html">«Four Ways to Slice Obama’s 2013 Budget Proposal»</a>). We found that approach not only beautiful but also engaging so we've decided to use it in this project as well.`,
      intro2: `When you load the visualization at first you see different parliament members grouped and colored by their party. This view allows to quickly see what party pays the biggest amount of taxes. In two other views you can cluster the members by governmental body or city and look at the data from a slightly different angle.`,
      intro3: `Later on the project has been extended with two other data sets that have been visualized in a similar fasion: Budget Expenditures and Budget Revenues of Pakistan in 2016.`,
    } satisfies ProjectEnglishStrings,
    'ru-RU': {
    },
  }),
  content: [
    {
      type: ContentType.INFO,
      task: 'task',
      tools: 'D3, SVG, Canvas',
    },
    {
      type: ContentType.IMAGE,
      source: dataImage,
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: 'intro',
    },
    // {
    //   type: ContentType.IMAGE,
    //   source: mapZoomedImage,
    // },

    {
      type: ContentType.VIDEO,
      source: TAXES_VIDEO_SRC,
      provider: 'vimeo',
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: 'intro2',
    },
    {
      type: ContentType.IMAGE,
      source: clustersImage,
    },
    {
      type: ContentType.TEXT,
      style: 'textCallout',
      text: 'intro3',
    },
    {
      type: ContentType.VIDEO,
      source: EXPENDITURE_VIDEO_SRC,
      provider: 'vimeo',
    },
  ],
}
