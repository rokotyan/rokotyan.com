export interface Talk {
  year: number
  title: string
  venue: string
  links: { label: string; url: string }[]
}

// Talks, newest first.
export const talks: Talk[] = [
  {
    year: 2026,
    title: 'Better graph visualizations with cosmos.gl',
    venue: 'Open Visualization Summit, Zurich',
    links: [{ label: 'Slides', url: 'https://rokotyan.com/talks/2026-open-vis-zurich/#1' }],
  },
  {
    year: 2026,
    title: 'Seeing the Shape of Knowledge: Network Graphs, Text Embeddings, and Cosmograph',
    venue: 'Stanford University',
    links: [{ label: 'Event', url: 'https://cesta.stanford.edu/news/seeing-shape-knowledge-network-graphs-text-embeddings-and-cosmograph' }],
  },
  {
    year: 2025,
    title: 'Cosmograph: visualizing large graphs and AI embeddings',
    venue: 'The New York Times Graphics Team, New York City',
    links: [],
  },
  {
    year: 2025,
    title: 'Visualizing large graphs and AI embeddings with ease',
    venue: 'PyBay 2025, San Francisco',
    links: [{ label: 'Watch recording', url: 'https://www.youtube.com/watch?v=DZkXk2TgYkI&list=PL85KuAjbN_gseSuHZTUCgNAHLeKuMDBxI&index=5' }],
  },
  {
    year: 2025,
    title: 'cosmos.gl: A new library for visualizing massive network graphs',
    venue: 'Open Visualization Summit, Seattle',
    links: [
      { label: 'Watch recording', url: 'https://www.youtube.com/watch?v=4IzklLo5Hj8' },
      { label: 'Library', url: 'http://cosmos.gl' },
    ],
  },
  {
    year: 2025,
    title: 'AI x Data Visualization: The Future of Human-Data Interaction',
    venue: 'Visual Communication Symposium, Rice University, Houston',
    links: [],
  },
  {
    year: 2024,
    title: 'Visualizing Text in the Age of LLMs and AI',
    venue: 'Outlier, Chicago',
    links: [
      { label: 'Watch recording', url: 'https://www.youtube.com/watch?v=lj2kPWvQ7h0' },
      { label: 'Conference', url: 'https://www.outlierconf.com' },
    ],
  },
  {
    year: 2024,
    title: 'Visualizing Data',
    venue: 'MEA Forensic, Vancouver',
    links: [],
  },
  {
    year: 2023,
    title: 'Every Market Needs a Map',
    venue: 'Information is Beautiful Awards: Day of Inspiration, Baltimore',
    links: [{ label: 'Watch recording', url: 'https://www.youtube.com/watch?v=WKQMK_8nA6g' }],
  },
  {
    year: 2023,
    title: 'Designing an Alternative Data-Driven World Map',
    venue: 'XVI. Macroscopes for Harnessing the Power of Data, CWS, 24-hour web event',
    links: [],
  },
  {
    year: 2020,
    title: 'Innovation in visualizing data for future decision-making',
    venue: 'UAE Innovation Month, Dubai',
    links: [],
  },
  {
    year: 2017,
    title: 'Data Visualization in Design, Science, Education, Journalism and other fields',
    venue: 'Boris Yeltsin Presidential Center, Ekaterinburg',
    links: [{ label: 'Event', url: 'https://yeltsin.ru/affair/nikita-rokotyan-vizualizaciya-dannyh/' }],
  },
  {
    year: 2015,
    title: 'Coding in Creative Industry',
    venue: 'DUMP 2015 Programming Conference, Ekaterinburg',
    links: [
      { label: 'Watch recording', url: 'https://www.youtube.com/watch?v=3xaIkbvmfDs' },
      { label: 'Conference', url: 'https://dump-ekb.ru' },
    ],
  },
  {
    year: 2014,
    title: 'Coding and Design',
    venue: 'Behance Portfolio Review #6, Ekaterinburg',
    links: [
      { label: 'Event', url: 'https://vk.com/behanceekb2014?w=wall-75568461_9' },
      { label: 'Discussion', url: 'https://www.facebook.com/events/1545392319017930/?active_tab=discussion' },
      { label: 'Community', url: 'https://vk.com/behanceekb2014' },
    ],
  },
  {
    year: 2013,
    title: 'Creative coding: programming new aesthetics',
    venue: 'National Center of Contemporary Art, Ekaterinburg',
    links: [
      { label: 'Event', url: 'http://art-urgi.urfu.ru/index.php/iskusstvo.-nauka.-tehnologii/programmiruya-novuyu-estetiku.html' },
      { label: 'Announcement', url: 'https://urfu.ru/ru/news/2473/' },
    ],
  },
  {
    year: 2012,
    title: 'New tools in digital art',
    venue: 'Art. Science.Technology program, Ural Federal University, Ekaterinburg',
    links: [{ label: 'Event', url: 'https://theoryandpractice.ru/seminars/29727-novye-instrumenty-vtsifrovom-iskusstve' }],
  },
  {
    year: 2011,
    title: 'History of generative art: from Demoscene to Processing',
    venue: '2nd Theories and practices of media art conference, Ekaterinburg',
    links: [{ label: 'Event', url: 'http://www.ncca.ru/events.text?filial=5&id=960' }],
  },
]
