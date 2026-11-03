import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import cover from "./cover.gif"
import main from "./scr1-c.jpg"
import screen2 from "./scr2-c.jpg"
import screen3 from "./scr3-c.jpg"
import demoVideo from "./BudgetRussia-demo.mp4"

export const project: Project = {
  collection: 'archive',
  order: 101,
  link: 'personal-budgetrussia',
  legacyPaths: ['/dataviz/budgetrussia'],
  displayLabel: 'Archive',
  previewImage: cover,
  mainPic: main,
  accentColor: '#FED731',
  fontColor: '#191919',
  background: '#ffffff',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: "Budget of Russia",
      description: "Exploring public spending through interactive data visualization",
      task: "Make several years of Russian Federation budget spending explorable.",
      overview: "This visualization explores actual budget spending of the Russian Federation over several years.",
      credits: "The project was inspired by <a href=\"https://bost.ocks.org/mike/\" target=\"_blank\" rel=\"noopener noreferrer\">Mike Bostock</a> and his “Four Ways to Slice Obama’s 2013 Budget Proposal” for The New York Times. Data source: <a href=\"http://budget.gov.ru\" target=\"_blank\" rel=\"noopener noreferrer\">budget.gov.ru</a>.",
    } satisfies ProjectEnglishStrings,
    'ru-RU': {},
  }),
  content: [
    {
      type: ContentType.INFO,
      task: 'task',
      tools: "D3.js, Node.js, lodash",
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: "overview",
    },
    {
      type: ContentType.VIDEO,
      source: demoVideo,
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: "credits",
    },
    {
      type: ContentType.IMAGE,
      source: screen2,
    },
    {
      type: ContentType.IMAGE,
      source: screen3,
    },
  ],
}
