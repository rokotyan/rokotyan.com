import LocalizedStrings from 'react-localization'
import type { Project, ProjectEnglishStrings, ProjectStrings } from 'utils/types'
import ContentType from 'utils/enums/contentTypes'

import coverImage from './cover.png'
import search from './image_preview.gif'
import coverVideo from './cover.mp4'
import previewImage from './preview.webp'
import networksVideo from './seamlessweb-networks.mp4'
import overviewImage from './overview.png'
import timelineImage from './timeline.png'

// const NETWORKS_VIDEO_SRC = '368604499'

export const project: Project = {
  order: 2,
  year: 2017,
  link: 'the-seamless-web',
  mainPic: coverImage,
  previewVid: coverVideo,
  previewImage,
  accentColor: '#f9be2b',
  fontColor: '#ffffff',
  background: '#1B191B',
  strings: new LocalizedStrings<ProjectStrings>({
    en: {
      title: 'The Seamless Web',
      description: 'A visual case law explorer for the US legal system',
      task: 'Visualize a corpus of 4 million legal precedents and make American judicial system look clear',
      about:
        `The <b>American system of law</b> is based on precedents. It means that during trials the court relies on previous decisions in similar cases.

        Over three centuries, more than <b>6 million cases</b> came to court and they are all interconnected. Researchers of the American judicial system describe it as a &quot;seamless web&quot;, it gave the name to the project.

        Certainly, there were numerous attempts to apply <b>digital tools</b> to this database. However, they have mainly engaged linear textual search.`,
      solutionLeft:
        `We set out to visualize the system of <b>American precedents</b> and make it interactive. The source base was borrowed from the <a href="https://free.law/" target="_blank">Free Law Project library</a> that consists of texts. So, the key tool for delving in it was text search.`,
      solutionRight:
        `Almost 4 million cases constitute the project. Artificial Intelligence performs the search, and its result one can see on the right in the Case Insights and Network Insights information blocks.`,
      aiText:
        'Natural language processing underlies this project, it is a form of AI that engages both linguistics and statistics. In order to rate cases and single out terms, we trained the system to estimate the importance of the paragraphs, quotes or separate phrases. The importance of the whole case is determined by the number of links to it: the more other cases refer to it — the more important it is.',
      findingsLeft:
       `Visualization with its inherent abilities can make non-obvious phenomena obvious:`,
      bullets:
        `• reveal importance of this or that case;
        • tell a story with a timeline;
        • trace the evolution of court sentences for a particular topic.`,
      findingsRight:
        `For us, this most vividly illustrates the main purpose of data visualization: by means of design and algorithms create tools for work and decision-making.
        
        👉 <a href="https://theseamlessweb.com/" target="_blank"><span>Run project</span></a>`,
      medium: '👉 <a href="https://medium.com/interacta" target="_blank"><span>Read more on Medium</span><a/>',
    } satisfies ProjectEnglishStrings,
    'ru-RU': {
      description: 'Визуальный поисковик прецедентов правовой системы США',
      intro:
        'Судебное право в США является прецедентным. Это значит, что в тексте одного дела, часто встречаются ссылки на другие дела и цитаты из них. Количество ссылок на громкие кейсы может превышать несколько тысяч. Эти взаимосвязи часто остаются скрыты, поскольку имеющиеся инструменты поиска представляют результаты в виде обычного списка.',
      solutionLeft:
        'Мы взяли данные из <a href="https://free.law">Free Law Project</a> и поместили их в базу ElasticSearch — около 4 миллионов дел и сопроводительных документов. Большая часть из них уже содержат оцифрованный текст и список ссылок на другие дела. Дальше мы написали API, который позволяет производить поиск документов по наличию или отсутствию в них определенных фраз (на основе синтаксиса DSL), а также изолированно искать документы связанные с конкретным делом. Помимо стандартного перечня найденных документов, API отправляет список существующих связей, по которым мы представляем результаты поиска в виде интерактивной сети.',
      solution1:
        'Используя алгоритмы теории графов, визуализация на лету рассчитывает «вес» того или иного дела, что визуально определяет размер соответствующей точки на экране. Различные группы дел раскрашиваются в разный цвет. Клик по шарику на экране выделяет кейс и изолирует дела, связанные с ним.',
      solutionRight:
        'Панель справа выводит информацию о сети в целом или по каждому выделенному кейсу отдельно. Наш модуль искусственного интеллекта определяет наиболее цитируемые участки текста, ключевые слова и параграфы, а также выводит список связанных дел. А еще, кликнув по дважды по делу можно загрузить его полный текст.',
      solution3:
        'Timeline Mode распределяет кейсы в хронологическом порядке, так что можно проанализировать временной тренд по интересующей вас ключевому запросу.',
      label:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  }),
  content: [
    {
      type: ContentType.INFO,
      task: 'task',
      tools: 'D3, Canvas, TopoJSON, Shifty, Awesomplete',
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: 'about',
    },
    {
      type: ContentType.IMAGE,
      source: search,
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padRight'],
      text: 'solutionLeft',
    },
    {
      type: ContentType.TEXT,
      style: ['textRegular', 'padLeft'],
      text: 'solutionRight',
      blockStyle: { paddingTop: '2%' },
    },
    {
      type: ContentType.IMAGE,
      source: overviewImage,
    },
    {
      type: ContentType.TEXT,
      style: 'textCallout',
      text: 'aiText',
    },
    {
      type: ContentType.VIDEO,
      source: networksVideo,
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padLeft'],
      text: 'findingsLeft',
      blockStyle: { paddingBottom: '1%' },
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padLeft'],
      text: 'bullets',
      blockStyle: { paddingTop: 0, paddingBottom: 0, marginLeft: 0 },
    },
    {
      type: ContentType.TEXT,
      style: ['textSmall', 'padLeft'],
      text: 'findingsRight',
      blockStyle: { paddingTop: '2%' },
    },
    // {
    //   type: ContentType.TWO_COLUMNS,
    //   left: { type: ContentType.TEXT, style: 'textSmall', text: 'findingsLeft' },
    //   right: { type: ContentType.TEXT, style: 'textSmall', text: 'findingsRight' },
    // },
    {
      type: ContentType.IMAGE,
      source: timelineImage,
    },
    {
      type: ContentType.VIDEO,
      source: coverVideo,
    },
  ],
}
