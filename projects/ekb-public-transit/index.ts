import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import processing from './before-after.jpg'
import quarters from './quarters.jpg'
// import densityLayer from './density.png'
import densityLayer from './density-overview.png'
import densityCloseup1 from './density-city.png'
import densityCloseup2 from './density-closeup1.png'

import isochrone from './isochrone.png'
import isochrones4 from './four-isochrones.png'
import network from './network.jpg'
import tool from './tool.png'
// import traffic from './traffic.jpg'
import coverImage from './cover.png'
import coverVideo from './cover.mp4'
import previewImage from './preview.webp'

// const DENSITY_VIDEO_SRC = '378604584'
const TRACES_VIDEO_SRC = '387121331' // '378603203'
// const ISOCHRONE_VIDEO_SRC = '378600194'

export const project: Project = {
  order: 7,
  link: 'ekb-public-transit',
  year: 2018,
  previewVid: coverVideo,
  previewImage,
  mainPic: coverImage,
  accentColor: '#c0515a',
  fontColor: '#fcfcfc',
  background: '#1c2538',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: 'Public Transit',
      description: 'A web application for visualizing public transit data in Ekaterinburg',
      task: `Create a tool that helps transit specialists to make public transportation networks more efficient`,
      intro1: `In 2017 the authorities of Ekaterinburg have announced that they were going to perform a public transit reform. It was supposed to make transit routes more efficient. Ekaterinburg has a decent transportation network that includes a subway line, more than 80 bus routes that are often overlapping in different segments, 30 tram and 19 trolleybus routes that have not been significantly changed for more than 30 years.`,
      challenge: `Inconvenient routes, outdated vehicle fleet and mediocre performance of ground-based public transport forces people to buy cars, leading to strong traffic jams at rush hours every morning and evening. That's an indicator of why the city's transit system needs to change. But the scheduled reform has not been supported by the citizens and was suspended.
      
      Can data visualization help to analyze the efficiency of the current transit system and potentially show the benefits of the proposed reform? We've decided to take up that challenge and create a tool for visualizing the public transit data that we've been gathering for more than a year using open data sources.`,
      captionOne: 'Data clean up',
      firstStage: `The collected public transportation GPS data has variable time intervals of 5-15 seconds, which results in numerous artifacts when mapped. Interpolating points to a finer grid along the routes produces much cleaner trajectories of the vehicles. On the designed map, each type of transport has its own color leaving semi-transparent trails looped in a fast timelapse. Acting as a heatmap, it shows city areas that are over and under-served by public transport.`,
      captionTwo: 'Transport Availability',
      timelapseImportance: `It is also possible to explore which kinds of transport serve different city districts. It is good to have two or more kinds of public transportation in a district in case of unforeseen situations with one of the transportation lines. For example, if there's a sudden power outage and the only type of available transport is tram or trolleybus, people migh be having troubles with leaving that area.`,
      captionThree: 'Demand and Population Density',
      density1: `We wanted to match the collected trips data with a possible demand of the citizens for public transportation by mapping the population density of the city areas along with the heatmap of transit routes. With the help of the OpenStreetMap Overpass API, we have extracted city's road network and processed it in order to get the shapes of the city's districts.
      
      Using official information about Ekaterinburg population and public data about residential buildings, we have calculated an approximate population density of each district. Visualizing that information can help with detecting areas where people might need shorter intervals for public transportation, and vice versa.`,
      density2: ``,
      captionFour: 'Efficiency and Isochrones',
      isochrones1: `Another important metric of public transportation efficiency is the average travel time from one point to another. Instead of extracting that information from the collected trips data, we've used the Google Directions API. Based on the actual public transport GPS data it can provide approximate travel times between two points in the city including the waiting time. By batching API requests and combining the results we were able to build isochrone maps displaying areas of equal travel time from a chosen point by using public transport.
      
      Isochrone maps are presented in a form of hexagonal grid. The color of each cell represents an approximate travel time from the central hexagon to that cell — the longer it takes to get there the more red the color will be. The Google Transit API can calculate travel time not only for public transit, but also for walking or riding by car. We've added them as a selectable option giving you an opportunity to compare different ways of traveling.`,
      isochrones2: ``,
      ending: `That's how we made an interesting tool that can help to analyze public traffic in the city. We believe that this experience can be useful for transit analytics and can be applied for any city in the world that has open public transportation data.`,
    } satisfies ProjectEnglishStrings,
    'ru-RU': {
    },
  }),
  content: [
    {
      type: ContentType.INFO,
      task: 'task',
      tools: 'React, Mapbox, OpenStreetMap Overpass API, QGIS, deck.gl, Google Directions API',
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padLeft'],
      text: 'intro1',
    },
    {
      type: ContentType.IMAGE,
      source: network,
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padLeft'],
      text: 'challenge',
    },
    {
      type: ContentType.IMAGE,
      source: tool,
    },
    // {
    //   type: ContentType.IMAGE,
    //   source: traffic,
    // },
    {
      type: ContentType.TEXT,
      style: ['caption', 'padLeft'],
      containerStyle: ['smallMarginBottom'],
      text: 'captionOne',
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padLeft'],
      containerStyle: ['smallMarginTop'],
      text: 'firstStage',
    },
    {
      type: ContentType.IMAGE,
      source: processing,
    },
    {
      type: ContentType.TEXT,
      style: ['caption', 'padLeft'],
      containerStyle: ['smallMarginBottom'],
      text: 'captionTwo',
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padLeft'],
      containerStyle: ['smallMarginTop'],
      text: 'timelapseImportance',
    },
    {
      type: ContentType.VIDEO,
      source: TRACES_VIDEO_SRC,
      provider: 'vimeo',
    },
    {
      type: ContentType.TEXT,
      style: ['caption', 'padLeft'],
      containerStyle: ['smallMarginBottom'],
      text: 'captionThree',
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padLeft'],
      containerStyle: ['smallMarginTop'],
      text: 'density1',
    },
    {
      type: ContentType.IMAGE,
      source: quarters,
    },
    // {
    //   type: ContentType.TEXT,
    //   style: ['textSmall', 'padLeft'],
    //   text: 'density2',
    // },
    {
      type: ContentType.IMAGE,
      source: densityLayer,
    },
    {
      type: ContentType.TWO_COLUMNS,
      left: { type: ContentType.IMAGE, source: densityCloseup1 },
      right: { type: ContentType.IMAGE, source: densityCloseup2 },
    },
    // {
    //   type: ContentType.VIDEO,
    // source: DENSITY_VIDEO_SRC,
    //   provider: 'vimeo',
    // },
    {
      type: ContentType.TEXT,
      style: ['caption', 'padLeft'],
      containerStyle: ['smallMarginBottom'],
      text: 'captionFour',
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padLeft'],
      containerStyle: ['smallMarginTop'],
      text: 'isochrones1',
    },
    // {
    //   type: ContentType.TEXT,
    //   style: ['textSmall', 'padRight'],
    //   text: 'isochrones2',
    // },
    // {
    //   type: ContentType.VIDEO,
    //   source: ISOCHRONE_VIDEO_SRC,
    //   provider: 'vimeo',
    // },
    {
      type: ContentType.IMAGE,
      source: isochrone,
    },
    {
      type: ContentType.IMAGE,
      source: isochrones4,
    },
    // {
    //   type: ContentType.TEXT,
    //   style: ['textSmall', 'padLeft'],
    //   text: 'ending',
    // },
  ],
}
