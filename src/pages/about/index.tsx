import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withUIStore, type WithUIStoreProps } from 'store/ui'
import { cx } from '@emotion/css'

import * as color from 'utils/styles/colors'
import Footer from 'components/footer'

import * as style from './styles'

class AboutPage extends Component<WithUIStoreProps> {
  componentDidMount() {
    const { uiStore } = this.props
    uiStore.setColors(color.white, color.black)
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <main className={style.about}>
          <div className={style.introduction}>
            <h1>
              I’m Nikita, a software engineer building intuitive, visually engaging tools for exploring data.
            </h1>
            <p>I build products end to end, combining algorithms, full-stack engineering, and interface design to create clear, interactive ways to work with data.</p>
          </div>

          <div className={style.content}>
            <section className={cx(style.contentColumn, 'wide')}>
              <h2>Current work</h2>
              <p>
                <a href="https://cosmograph.app" target="_blank" rel="noopener noreferrer">Cosmograph</a>,
                a collaborative platform for exploring large graphs and manifolds. I lead its engineering
                and work across the product, from visualization and UX to data processing and backend systems.
              </p>
              <p>
                <a href="https://cosmos.gl" target="_blank" rel="noopener noreferrer">cosmos.gl</a>,
                a GPU-powered graph simulation and visualization engine. I designed and built its original
                simulation and rendering algorithms, enabling interactive exploration of graphs with up to a million nodes.
              </p>
              <p>
                <a href="https://unovis.dev" target="_blank" rel="noopener noreferrer">Unovis</a> –
                handcrafted, agentic-ready, themeable, modular, lightweight charts. It gives developers
                composable building blocks for custom charts, maps, and network graphs.
              </p>
              <p>
                As a founding engineer at{' '}
                <a href="https://www.exaforce.com" target="_blank" rel="noopener noreferrer">Exaforce</a>,
                I'm building data-heavy visual interfaces for AI-powered cybersecurity analytics.
              </p>
            </section>

            <section className={style.contentColumn}>
              <h2>Background</h2>
              <p>
                I started using code as a creative medium in 2010. My background spans physics research, new media art, and software engineering, with a PhD in physics and
                more than a decade spent building tools for working with data.
              </p>
              <p>
                Previously, I led frontend engineering and data visualization at Volterra, which was acquired by{' '}
                <a href="https://www.f5.com" target="_blank" rel="noopener noreferrer">F5</a>.
              </p>
              <p>
                In 2014, I founded{' '}
                <a href="https://interacta.io" target="_blank" rel="noopener noreferrer">Interacta</a>,
                a studio bringing together scientists, designers, and engineers to build research and data exploration
                tools. Explore our work in <Link to="/projects/">selected projects</Link>.
              </p>

              <h2>Experiments &amp; awards</h2>
              <p>
                <a href="https://marketmap.one" target="_blank" rel="noopener noreferrer">Market Map</a>,
                my exploration of the US stock market, won an{' '}
                <a href="https://www.informationisbeautifulawards.com/" target="_blank" rel="noopener noreferrer">Information is Beautiful Award</a>, received a{' '}
                <a href="https://www.webbyawards.com" target="_blank" rel="noopener noreferrer">Webby nomination</a>, and earned an{' '}
                <a href="https://www.awwwards.com/sites/market-map" target="_blank" rel="noopener noreferrer">Honorable Mention from Awwwards</a>.
              </p>
              <p>
                One of my data visualizations was engraved on a{' '}
                <a href="https://www.planet.com/company/art/art-in-space/" target="_blank" rel="noopener noreferrer">Planet</a>{' '}
                satellite and launched into orbit in 2022.
              </p>
              <p>
                Interacta’s <Link to="/projects/country-tsne">Data-Driven Country Map</Link> received the
                World Data Visualization Prize Grand Prize in 2019.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default withUIStore(AboutPage)
