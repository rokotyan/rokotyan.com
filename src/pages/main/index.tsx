import React, { Component } from 'react'
import { withUIStore, type WithUIStoreProps } from 'store/ui'
import { Link } from 'react-router-dom'
import { RightArrow } from 'utils/styles/misc'
import Previews from 'components/previews'
import Footer from 'components/footer'
import Video from 'components/video'
import StudioEmail from 'components/email'
import * as color from 'utils/styles/colors'
import { talks } from 'pages/talks/content'
import * as talkStyle from 'pages/talks/styles'
import * as s from './styles'
import { content, scopes, scopesArray, scopesLinks } from './content'

const REEL_VIDEO_URL = 'https://projects.interacta.io/interacta-files/interacta-reel-web.mp4'
const REEL_POSTER_IMAGE_URL = 'https://projects.interacta.io/interacta-files/interacta-reel-web.jpg'
const SHOW_INTERACTA_YEARS = false

class MainPage extends Component<WithUIStoreProps> {
  componentDidMount() {
    this.props.uiStore.setColors(color.gray, color.white, color.white)
    window.scrollTo(0, 0)
  }

  render() {
    const { uiStore } = this.props
    content.setLanguage(uiStore.language)
    scopes.setLanguage(uiStore.language)
    const studioProjects = uiStore.projects.filter(project => !project.collection)

    return (
      <div className={s.page}>
        <div className={s.topBackground}>
          <div className={s.reelVideoContainer}>
            <Video source={REEL_VIDEO_URL} poster={REEL_POSTER_IMAGE_URL} warningStyle={{ top: 120 }} />
          </div>
          <div className={s.topBlock}>
            <h1 className={s.headline}>{content.headline}</h1>
            <div className={s.headerContacts}><StudioEmail /></div>
          </div>
        </div>
        <div className={s.content}>
          <div className={s.textCont}>
            <div className={s.text}>
              <p>{content.about}</p>
              <Link to="/about/" className={s.textLink}>More about me <RightArrow color="#222" /></Link>
            </div>
          </div>
          <h2 className={s.blockTitle}>{content.expertise}</h2>
          <div className={s.scopesBlock}>
            {scopesArray.map(scope => (
              <div key={scope} className={s.scope}>
                <a href={scopesLinks[scope]} className={s.scopeName} target="_blank" rel="noopener noreferrer">
                  {scopes[scope]} <span aria-hidden="true">↗</span>
                </a>
                <div className={s.scopeDescription}>{scopes[`${scope}D`]}</div>
              </div>
            ))}
          </div>
          <h2 className={s.blockTitle}>Selected Projects</h2>
          <p className={s.sectionIntro}>Research tools, data visualizations, and interactive experiments.</p>
        </div>
        <div className={s.projectsContainer}>
          <Previews data={studioProjects.slice(0, 6)} />
        </div>
        <div className={s.viewProjectsContainer}>
          <Link to="/projects/" className={s.moreWorks({ top: false })}>
            {content.viewProjects} <RightArrow color="#222" />
          </Link>
        </div>
        {SHOW_INTERACTA_YEARS && <>
          <div className={s.content}>
            <h2 className={s.blockTitle}>The Interacta years</h2>
            <p className={s.sectionIntro}>A look at the people and process behind the projects.</p>
          </div>
          <Video provider="vimeo" source="302763861" warningStyle={{ top: 10, width: '100%' }} />
        </>}
        <div className={s.content}>
          <h2 className={s.blockTitle}>Talks</h2>
          <p className={s.sectionIntro}>On data visualization, research tools, and creative coding.</p>
          <ol className={talkStyle.list} style={{ marginBottom: 0 }}>
            {talks.slice(0, 3).map(talk => (
              <li key={`${talk.year}-${talk.title}`} className={talkStyle.talk}>
                <div className={talkStyle.year}>{talk.year}</div>
                <div>
                  <h3 className={talkStyle.title}>{talk.title}</h3>
                  <p className={talkStyle.venue}>{talk.venue}</p>
                  {talk.links.length > 0 && <div className={talkStyle.links}>
                    {talk.links.map(link => (
                      <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>}
                </div>
              </li>
            ))}
          </ol>
          <Link to="/talks/" className={s.moreWorks({ top: false })}>View talks <RightArrow color="#222" /></Link>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withUIStore(MainPage)
