import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import type { ComponentType, Dispatch, ReactNode, SetStateAction } from 'react'
import type { Project } from 'utils/types'
import * as color from 'utils/styles/colors'
import canAutoplay from 'can-autoplay'

export interface UIStore {
  language: string
  fontColor: string
  background: string
  headerColor: string
  canAutoplay: boolean
  projects: Project[]
  setLanguage: Dispatch<SetStateAction<string>>
  setCanAutoplay: (value: boolean) => void
  setColors: (fontColor: string, background: string, headerColor?: string) => void
}

export interface WithUIStoreProps {
  uiStore: UIStore
}

const UIContext = createContext<UIStore | null>(null)

export function UIProvider({ children, projects }: { children: ReactNode; projects: Project[] }) {
  const [language, setLanguage] = useState('en')
  const [colors, setColorState] = useState({
    fontColor: color.black,
    background: color.white,
    headerColor: color.white,
  })
  const [canAutoplayVideo, setCanAutoplayVideo] = useState(true)
  const intervalId = useRef<ReturnType<typeof setInterval> | null>(null)
  const autoplayCheckStopped = useRef(false)

  const setCanAutoplay = useCallback((value: boolean) => {
    autoplayCheckStopped.current = true
    setCanAutoplayVideo(value)
    if (intervalId.current !== null) clearInterval(intervalId.current)
  }, [])

  const setColors = useCallback((fontColor: string, background: string, headerColor?: string) => {
    setColorState({ fontColor, background, headerColor: headerColor || fontColor })
  }, [])

  useEffect(() => {
    let mounted = true
    autoplayCheckStopped.current = false
    intervalId.current = setInterval(() => {
      canAutoplay.video({ muted: true, inline: true }).then(({ result }) => {
        if (mounted && !autoplayCheckStopped.current) setCanAutoplay(result)
      })
    }, 2000)
    return () => {
      mounted = false
      autoplayCheckStopped.current = true
      if (intervalId.current !== null) clearInterval(intervalId.current)
    }
  }, [setCanAutoplay])

  const uiStore = {
    language,
    ...colors,
    canAutoplay: canAutoplayVideo,
    projects,
    setLanguage,
    setCanAutoplay,
    setColors,
  }

  return <UIContext.Provider value={uiStore}>{children}</UIContext.Provider>
}

export function useUIStore() {
  const uiStore = useContext(UIContext)
  if (!uiStore) throw new Error('UI components must be rendered inside UIProvider')
  return uiStore
}

// Existing class components can consume the same context without changing their local state.
export function withUIStore<Props extends WithUIStoreProps>(Component: ComponentType<Props>) {
  return function WithUIStore(props: Omit<Props, 'uiStore'>) {
    const uiStore = useUIStore()
    // Restore the injected prop after removing it from the public component API.
    const injectedProps = { ...props, uiStore } as Props
    return <Component {...injectedProps} />
  }
}
