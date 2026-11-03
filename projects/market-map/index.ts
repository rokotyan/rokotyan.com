import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import mainPic from './main.webp'
import previewImage from './preview.webp'
import coverVideo from './cover.mp4'
import dimensionsVideo from './map-dimensions.mp4'
import dimensionsPoster from './map-dimensions-poster.webp'
import detailsVideo from './company-details.mp4'
import detailsPoster from './company-details-poster.webp'
import embeddingVideo from './process-embedding.mp4'
import embeddingPoster from './process-embedding-poster.webp'
import timeVideo from './process-time.mp4'
import timePoster from './process-time-poster.webp'
import trajectoriesImage from './process-trajectories.webp'
import interfaceImage from './process-interface.webp'

export const project: Project = {
  hidden: true,
  order: -1,
  year: 2023,
  link: 'market-map',
  previewVid: coverVideo,
  previewImage,
  mainPic,
  heroStyle: { background: 'linear-gradient(90deg, rgba(0,0,0,.75), rgba(0,0,0,.55))' },
  heroDescriptionStyle: { opacity: 1 },
  accentColor: '#f2f2f2',
  fontColor: '#f2f2f2',
  headerColor: '#f2f2f2',
  background: '#1a2022',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: 'Market Map',
      description: 'An alternative view of the U.S. stock market',
      task: 'Make the relationships between publicly traded companies visible and explorable',
      intro: `Market Map is my experimental visualization of the U.S. stock market. It brings financial metrics into a spatial view of how publicly traded companies relate to each other.

      <a href="https://marketmap.one/" target="_blank" rel="noopener noreferrer">Explore Market Map ↗</a> · <a href="https://marketmap.one/welcome/1" target="_blank" rel="noopener noreferrer">Take a tour ↗</a>`,
      recognitionTitle: 'Recognition',
      recognition: `<a href="https://www.informationisbeautifulawards.com/showcase/6628-market-map" target="_blank" rel="noopener noreferrer">Information is Beautiful Awards — Silver, Business Analytics, 2023 ↗</a>

      <a href="https://winners.webbyawards.com/2024/websites-and-mobile-sites/features-design/best-data-visualization/284298/market-map" target="_blank" rel="noopener noreferrer">The Webby Awards — Nominee, Best Data Visualization, 2024 ↗</a>

      <a href="https://www.awwwards.com/sites/market-map" target="_blank" rel="noopener noreferrer">Awwwards — Honorable Mention, 2025 ↗</a>`,
      map: `Each point represents a company traded on the NYSE or NASDAQ. UMAP arranges companies using financial metrics such as market capitalization, P/E and EBITDA, placing companies with similar characteristics near each other.

      The map moves between 2D and 3D views. Point size and color let you explore market capitalization, share-price changes, sectors and other measures without losing the surrounding landscape.`,
      details: `Search for a company, inspect its financial details, or focus on an index or sector. The overview and company views connect market-wide patterns with the businesses behind them.`,
      credits: `Created with Olya Stukova and Sergey Ryadovoy.
      <a href="https://marketmap.one/about" target="_blank" rel="noopener noreferrer">About the project and team ↗</a>`,
      processTitle: 'Process',
      processIntro: `The project grew through a series of layout and interaction experiments. These early studies explore how financial metrics could become a navigable space, and how that space changes over time.`,
      processEmbedding: 'An early rotating embedding, recorded in 2021, explores the structure of the company data in three dimensions.',
      processTime: 'A second study follows changing layouts across successive quarters, with UMAP parameters displayed alongside the visualization.',
      processTrajectories: 'Company trajectories through the UMAP layout, with quarter as the time axis.',
      processInterface: 'An early interface pairs the map with distributions of financial metrics, bringing the spatial view and the underlying numbers together.',
    } satisfies ProjectEnglishStrings,
  }),
  content: [
    { type: ContentType.INFO, task: 'task', tools: 'UMAP, 2D/3D visualization' },
    { type: ContentType.TEXT, style: ['textRegular', 'padLeft'], text: 'intro' },
    { type: ContentType.TEXT, style: ['caption', 'padLeft'], containerStyle: ['smallMarginBottom'], text: 'recognitionTitle' },
    { type: ContentType.TEXT, style: ['textSmall', 'padLeft'], containerStyle: ['smallMarginTop'], text: 'recognition' },
    { type: ContentType.VIDEO, source: dimensionsVideo, poster: dimensionsPoster, controls: true },
    { type: ContentType.TEXT, style: ['textRegular', 'padLeft'], text: 'map' },
    { type: ContentType.VIDEO, source: detailsVideo, poster: detailsPoster, controls: true },
    { type: ContentType.TEXT, style: ['textRegular', 'padLeft'], text: 'details' },
    { type: ContentType.TEXT, style: ['textSmall', 'padLeft'], text: 'credits' },
    { type: ContentType.TEXT, style: ['caption', 'padLeft'], containerStyle: ['smallMarginBottom'], text: 'processTitle' },
    { type: ContentType.TEXT, style: ['textRegular', 'padLeft'], containerStyle: ['smallMarginTop'], text: 'processIntro' },
    { type: ContentType.TEXT, style: ['textSmall', 'padLeft'], containerStyle: ['smallMarginBottom'], text: 'processEmbedding' },
    { type: ContentType.VIDEO, source: embeddingVideo, poster: embeddingPoster, controls: true },
    { type: ContentType.TEXT, style: ['textSmall', 'padLeft'], text: 'processTime' },
    { type: ContentType.VIDEO, source: timeVideo, poster: timePoster, controls: true },
    { type: ContentType.TEXT, style: ['textSmall', 'padLeft'], text: 'processTrajectories' },
    { type: ContentType.IMAGE, source: trajectoriesImage },
    { type: ContentType.TEXT, style: ['textSmall', 'padLeft'], text: 'processInterface' },
    { type: ContentType.IMAGE, source: interfaceImage },
  ],
}
