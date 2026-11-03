import React from 'react'
import type { Project } from 'utils/types'
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom'

// Pages
import MainPage from 'pages/main'
import WorksPage from 'pages/works'
import AboutPage from 'pages/about'
import TalksPage from 'pages/talks'
import ProjectPage from 'pages/project'

// Components
import Header from 'components/header'

// Store
import { UIProvider, useUIStore } from 'store/ui'

// Styles
import * as style from './styles'

// Projects
const projects = Object.values(import.meta.glob<Project>('../projects/**/*.{js,jsx,ts,tsx}', { eager: true, import: 'project' }))
  .sort((a, b) => a.order - b.order)
  .filter(d => !d.hidden)

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

function AppContent() {
  const uiStore = useUIStore()
  const location = useLocation()
  const siteOrigin = import.meta.env.VITE_SITE_ORIGIN || 'https://rokotyan.com'
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  const project = projects.find(item => location.pathname.replace(/\/$/, '') === `/projects/${item.link}`)
  const pageNames: Record<string, string> = { '/about/': 'About', '/talks/': 'Talks', '/projects/': 'Projects', '/art/': 'Installations & art' }
  const pageName = project?.strings.title || pageNames[`${location.pathname.replace(/\/$/, '')}/`]

  return (
    <div className={style.rootStyle({ background: uiStore.background })}>
      <title>{pageName ? `${pageName} — Nikita Rokotyan` : 'Nikita Rokotyan — Research Tools & Visualization'}</title>
      <link rel="canonical" href={`${siteOrigin}${basePath}${location.pathname}`} />
      <Header location={location} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/" element={<WorksPage />} />
        <Route path="/about/" element={<AboutPage />} />
        <Route path="/talks/" element={<TalksPage />} />
        <Route path="/art/" element={<WorksPage collection="art" />} />
        <Route path="/dataviz/" element={<Navigate to="/projects/" replace />} />
        <Route path="/dataviz/theranosticslab" element={<Navigate to="/projects/theranostics" replace />} />
        <Route path="/dataviz/co2" element={<Navigate to="/projects/co2-viz" replace />} />
        <Route path="/CO2" element={<Navigate to="/projects/co2-viz" replace />} />
        <Route path="/dataviz/risky" element={<Navigate to="/projects/how-risky" replace />} />
        <Route path="/visualizingrisk" element={<Navigate to="/projects/how-risky" replace />} />
        <Route path="/crona" element={<Navigate to="/projects/personal-crona" replace />} />
        {projects.flatMap(project => (project.legacyPaths || []).map(path => (
          <Route key={path} path={path} element={<Navigate to={`/projects/${project.link}`} replace />} />
        )))}
        {projects.map(project => (
          <Route
            key={project.link}
            path={`/projects/${project.link}`}
            element={<ProjectPage project={project} />}
          />
        ))}
        <Route path="*" element={<WorksPage notFound />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <UIProvider projects={projects}>
        <AppContent />
      </UIProvider>
    </Router>
  )
}
