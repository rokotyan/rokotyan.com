import Footer from 'components/footer'
import Previews from 'components/previews'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as color from 'utils/styles/colors'
import { withUIStore, type WithUIStoreProps } from 'store/ui'
import type { ProjectCollection } from 'utils/types'
import * as style from './styles'

const music = [
  { title: 'Perceptions', year: '2009', playlist: '62854257' },
  { title: 'Springdelics', year: '2008', playlist: '62856274' },
  { title: 'Unreleased', year: '2007–2009', playlist: '65426299' },
]

const collections = [
  { key: 'interacta', title: 'Selected Projects', description: 'Research tools, data visualizations, and interactive experiments.' },
  { key: 'archive', title: 'Earlier explorations', description: 'Personal projects in data visualization, creative coding, and interface design.' },
  { key: 'art', title: 'Installations & art', description: 'Interactive sculptures, sound, and generative experiments.' },
]

interface WorksPageProps extends WithUIStoreProps {
  collection?: ProjectCollection
  notFound?: boolean
}

class WorksPage extends Component<WorksPageProps> {
  componentDidMount() {
    this.props.uiStore.setColors(color.dark, color.white)
    window.scrollTo(0, 0)
  }

  componentDidUpdate(previous: WorksPageProps) {
    if (previous.collection !== this.props.collection) window.scrollTo(0, 0)
  }

  render() {
    const { uiStore, collection, notFound } = this.props
    const shownCollections = collection ? collections.filter(item => item.key === collection) : collections
    const artShared = ['how-risky', 'co2-viz', 'personal-crona']
    const excludedExplorations = ['personal-euclid', 'personal-weather', 'personal-tiddlywiki']
    return (
      <div>
        <div className={style.wrapper}>
          <div className={style.content}>
            {notFound && <div className={style.introduction}><h1>Page not found</h1><p>Explore the portfolio below or <Link to="/">return home</Link>.</p></div>}
            {!notFound && <h1 className={style.pageTitle}>{collection === 'art' ? 'Installations & art' : 'Selected projects'}</h1>}
            {shownCollections.map(item => {
              const data = uiStore.projects
                .filter(project => (project.collection || 'interacta') === item.key || (collection === 'art' && artShared.includes(project.link)))
                .filter(project => item.key !== 'archive' || !excludedExplorations.includes(project.link))
              if (collection === 'art') data.sort((a, b) => Number(b.collection === 'art') - Number(a.collection === 'art'))
              return <section key={item.key} className={style.section}>
                <div className={style.introduction}>
                  {!collection && <h2>{item.title}</h2>}
                  <p>{item.description}</p>
                </div>
                <Previews data={data} />
              </section>
            })}
            {collection === 'art' && <section id="music" className={style.section}>
              <div className={style.introduction}><h2>Music</h2><p>Earlier recordings as Ernaem.</p></div>
              <div className={style.musicGrid}>
                {music.map(album => <div key={album.playlist}>
                  <h3 className={style.albumTitle}>{album.title} · {album.year}</h3>
                  <iframe title={`${album.title} by Ernaem`} width="100%" height="300" loading="lazy" allow="autoplay" style={{ border: 0 }} src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${album.playlist}&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=true`} />
                </div>)}
              </div>
            </section>}
            {collection && <Link to="/projects/" className={style.backLink}>View all projects →</Link>}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withUIStore(WorksPage)
