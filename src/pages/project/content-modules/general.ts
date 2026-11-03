import LocalizedStrings from 'react-localization'

const general = new LocalizedStrings({
  en: {
    task: 'task',
    background: 'background',
    concept: 'concept',
    solution: 'solution',
    process: 'process',
    results: 'results',
    team: 'team',
    tools: 'tools',
    next: 'next project >',
    previous: '< previous project',
  },
  'ru-RU': {
    task: 'задача',
    background: 'предыстория',
    concept: 'идея',
    solution: 'решение',
    process: 'процесс',
    results: 'результат',
    team: 'команда',
    tools: 'инструменты',
    next: 'следующий проект >',
    previous: '< предыдущий проект',
  },
})

export default general
