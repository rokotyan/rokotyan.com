// export const device = {
//   small: '@media (max-width: 767px) and (orientation: portrait)',
//   smallLandscape: '@media (max-width: 768px) and (orientation: landscape)',
//   medium: '@media (min-width: 768px)',
//   mediumLandscape: '@media (min-width: 768px) and (orientation: landscape)',
//   normal: '@media (min-width: 1024px)',
//   large: '@media (min-width: 1920px)',
// }

export const devicesDetailed = {
  tiny: '@media screen and (max-width: 600px)',
  small: '@media screen and (max-width: 800px) and (min-width: 600px)',
  medium: '@media screen and (max-width: 1040px) and (min-width: 800px)',
  big: '@media screen and (max-width: 1280px) and (min-width: 1040px)',
  bigger: '@media screen and (max-width: 1680px) and (min-width: 1280px)',
  large: '@media screen and (min-width: 1680px)',
}

export const devices = {
  small: '@media screen and (max-width: 600px)',
  medium: '@media screen and (max-width: 1280px) and (min-width: 600px)',
  big: '@media screen and (max-width: 1600px) and (min-width: 1280px)',
  large: '@media screen and (min-width: 1600px)',
}

export const device = {
  phone: '(max-width: 767px)',
  phonePortrait: '(max-width: 767px) and (orientation: portrait)',
  phoneLandscape: '(max-width: 768px) and (orientation: landscape)',
  tablet: '(min-width: 768px) and (max-width: 1279px)',
  tabletPortrait: '(min-width: 768px) and (max-width: 1279px) and (orientation: portrait)',
  tabletLandscape: '(min-width: 768px) and (max-width: 1279px) and (orientation: landscape)',
  laptop: '(min-width: 1280px)',
  laptop15: '(min-width: 1680px)',
  desktop: '(min-width: 1920px)',
}

export const media = (...query: string[]) => `@media ${query.join(',')}`
