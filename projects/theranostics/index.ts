import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import networkOverviewImage from "./network-overview.jpg"
import networkZoomImage from "./network-zoom.jpg"
import tsneLinksImage from "./tsne-links.jpg"
import tsneSymbolImage from "./tsne-symbol.png"

import coverVideo from "./cover.mp4"
import previewImage from './preview.webp'
import earlierTsneVideo from './earlier-tsne-demo.mp4'
import earlierNetworkVideo from './earlier-network-demo.mp4'
import earlierNetworkOverview from './earlier-network-overview.jpg'
import earlierNetworkLayout from './earlier-network-layout.jpg'
import earlierDataExplorer from './earlier-data-explorer.jpg'

const DEMO_VIDEO = 'https://projects.interacta.io/interacta-files/theranostics-demo.mp4'
const PCA_TSNE_UMAP_VIDEO = 'https://projects.interacta.io/interacta-files/pca-tsne-umap-web.mp4'

export const project: Project = {
  order: 6,
  year: 2017,
  link: 'theranostics',
  previewVid: coverVideo,
  previewImage,
  mainPic: tsneSymbolImage,
  accentColor: '#e7853e',
  fontColor: '#ffffff',
  background: '#2d2d2d',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: 'ECG Correlation Network',
      description: 'Data Visualization tool for a DNA testing laboraotry',
      task: 'Create a visual tool allowing to explore connections between various ECG and Echocardiography properties ',
      process0: `The visualization shows the correlation-based network and dimensionality reduction map of various advanced ECG and Echocardiography properties allowing to visually see and explore data patterns attributed to patients with arrhythmia and without it.`,
      process1: `«It's aimed to help clinicians to “connect the dots” across patients and their data to discover previously unknown indicators of health risks. Furthermore, it can be difficult to explain bulk data to patients, most of whom have no medical background. If we had tools to visualize the health data that we could present to them in an easy-to-read fashion, patients would understand their goals and would respond better to suggestions»`,
      earlierExplorer: 'An earlier version was a medical data exploration tool for Theranostics Lab, a clinical research company in New Zealand. Its Network, t-SNE and PCA modes allowed researchers to explore connections between medical tests or patients. The recordings and images below document that earlier explorer, built with D3.js, t-SNE, numeric.js and lodash.',
    } satisfies ProjectEnglishStrings,
    'ru-RU': {
    },
  }),
  content: [
    {
      type: ContentType.INFO,
      task: 'task',
      tools: 't-SNE, UMAP, PCA, D3, Node, Python',
    },
    {
      type: ContentType.IMAGE,
      source: networkOverviewImage,
    },
    // {
    //   type: ContentType.TWO_COLUMNS,
    //   left: { type: ContentType.TEXT, style: 'textRegular', text: 'process0' },
    //   right: { type: ContentType.TEXT, style: 'textSmall', text: 'process1' },
    // },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padRight'],
      text: 'process0',
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: 'process1',
      blockStyle: { paddingTop: '2%' },
    },
    {
      type: ContentType.VIDEO,
      source: PCA_TSNE_UMAP_VIDEO,
    },
    {
      type: ContentType.IMAGE,
      source: networkZoomImage,
    },
    {
      type: ContentType.IMAGE,
      source: tsneLinksImage,
    },
    {
      type: ContentType.VIDEO,
      source: DEMO_VIDEO,
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: 'earlierExplorer',
    },
    {
      type: ContentType.VIDEO,
      source: earlierTsneVideo,
    },
    {
      type: ContentType.IMAGE,
      source: earlierNetworkOverview,
    },
    {
      type: ContentType.IMAGE,
      source: earlierNetworkLayout,
    },
    {
      type: ContentType.IMAGE,
      source: earlierDataExplorer,
    },
    {
      type: ContentType.VIDEO,
      source: earlierNetworkVideo,
    },
  ],
}
