import LocalizedStrings from 'react-localization'

export const content = new LocalizedStrings({
  en: {
    headline: 'Hi, I’m Nikita. I build high-performance web tools for exploring complex data through rich, interactive visuals.',
    about: 'I’m a software engineer and former physicist working across algorithms, engineering, and interface design to help people explore complex data.',
    contact: 'Get in touch ',
    viewProjects: 'View all projects',
    expertise: 'Tools & ongoing work',
  },
})

export const scopesArray = ['cosmograph', 'cosmos', 'unovis'] as const
export const scopesLinks = {
  cosmos: 'https://cosmos.gl',
  cosmograph: 'https://cosmograph.app',
  unovis: 'https://unovis.dev',
  exaforce: 'https://www.exaforce.com',
  marketmap: 'https://marketmap.one',
  interacta: 'https://interacta.io',
}
export const scopes = new LocalizedStrings({
  en: {
    cosmos: 'cosmos.gl',
    cosmosD: 'GPU-powered graph simulation and visualization engine',
    cosmograph: 'Cosmograph',
    cosmographD: 'An online tool and a library for interactive graph data analytics at large scale.',
    unovis: 'Unovis',
    unovisD: 'A modular and lightweight visualization library for building charts, maps, and network networks.',
    exaforce: 'Exaforce',
    exaforceD: 'As a founding engineer, I lead frontend architecture and UI development for AI-powered cybersecurity tools.',
    marketmap: 'Market Map',
    marketmapD: 'My experimental visualization of the US stock market. An Information is Beautiful Award winner and Webby nominee.',
    interacta: 'Interacta',
    interactaD: 'The studio I founded in 2014 to bring scientists, designers, and engineers together around tools for working with data.',
  },
})
