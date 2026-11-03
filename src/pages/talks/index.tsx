import React, { useEffect } from 'react'
import { useUIStore } from 'store/ui'
import Footer from 'components/footer'
import * as color from 'utils/styles/colors'
import * as pageStyle from 'pages/works/styles'
import * as style from './styles'
import { talks } from './content'

export default function TalksPage() {
  const { setColors } = useUIStore()
  useEffect(() => {
    setColors(color.dark, color.white)
    window.scrollTo(0, 0)
  }, [setColors])

  return (
    <div>
      <main className={pageStyle.wrapper}>
        <div className={pageStyle.content}>
          <h1 className={pageStyle.pageTitle}>Talks</h1>
          <div className={pageStyle.introduction}>
            <p>On data visualization, research tools, and creative coding.</p>
          </div>
          <ol className={style.list}>
            {talks.map(talk => (
              <li key={`${talk.year}-${talk.title}`} className={style.talk}>
                <div className={style.year}>{talk.year}</div>
                <div>
                  <h2 className={style.title}>{talk.title}</h2>
                  <p className={style.venue}>{talk.venue}</p>
                  {talk.links.length > 0 && <div className={style.links}>
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
        </div>
      </main>
      <Footer />
    </div>
  )
}
