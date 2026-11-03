import { css } from '@emotion/css'
import { device as currentDevice } from 'utils/styles/media'

const device = {
  small: `@media ${currentDevice.phonePortrait}`,
  smallLandscape: `@media ${currentDevice.phoneLandscape}`,
  medium: `@media ${currentDevice.tablet}`,
  mediumLandscape: `@media ${currentDevice.tabletLandscape}`,
  normal: `@media ${currentDevice.laptop}`,
  large: `@media ${currentDevice.desktop}`,
}

export const fontXs = css`
  ${device.small} {
    font-size: 1.6vh;
  }

  ${device.smallLandscape} {
    font-size: 0.6rem;
  }

  ${device.medium} {
    font-size: 0.75rem;
  }

  ${device.mediumLandscape} {
    font-size: 0.75rem;
  }

  ${device.normal} {
    font-size: 0.8rem;
  }

  ${device.large} {
    font-size: 0.8rem;
  }
`

export const fontS = css`
  ${device.small} {
    font-size: calc(1vw + 0.5vh + 1.5vmin);
  }

  ${device.smallLandscape} {
    font-size: 0.875rem;
  }

  ${device.medium} {
    font-size: 0.875rem;
  }

  ${device.mediumLandscape} {
    font-size: 0.875rem;
  }

  ${device.normal} {
    font-size: calc(1vw * 0.5rem);
  }

  ${device.large} {
    font-size: calc(1vw * 0.5rem);
  }
`

export const fontM = css`
  ${device.small} {
    font-size: calc(1.5vw + 0.5vh + 1.5vmin);
  }

  ${device.smallLandscape} {
    font-size: 0.875rem;
  }

  ${device.medium} {
    font-size: 1rem;
  }

  ${device.mediumLandscape} {
    font-size: 1rem;
  }

  ${device.normal} {
    font-size: calc(1.25vw * 0.5rem);
  }

  ${device.large} {
    font-size: calc(1.25vw * 0.5rem);
  }
`

export const fontMl = css`
  ${device.small} {
    font-size: calc(1.5vw + 0.5vh + 1.5vmin);
  }

  ${device.smallLandscape} {
    font-size: 0.875rem;
  }

  ${device.medium} {
    font-size: 1.15rem;
  }

  ${device.mediumLandscape} {
    font-size: 1.15rem;
  }

  ${device.normal} {
    font-size: calc(1.25vw * 0.5rem);
  }

  ${device.large} {
    font-size: calc(1.25vw * 0.5rem);
  }
`

export const fontL = css`
  ${device.small} {
    font-size: calc(1.5vw + 0.5vh + 1.5vmin);
  }

  // ${device.smallLandscape} {
  //   font-size: 1.2rem;
  // }

  ${device.medium} {
    font-size: 1.5rem;
  }

  ${device.mediumLandscape} {
    font-size: 1.5rem;
  }

  ${device.normal} {
    font-size: calc(1.25vw * 0.5rem);
  }

  ${device.large} {
    font-size: calc(1.25vw * 0.5rem);
  }
`

export const fontXl = css`
  ${device.small} {
    font-size: 1.5rem;
  }

  ${device.smallLandscape} {
    font-size: 1.5rem;
  }

  ${device.medium} {
    font-size: 1.8rem;
  }

  ${device.normal} {
    font-size: 3.5vw;
  }

  ${device.large} {
    font-size: 3.5vw;
  }
`

export const fontXxl = css`
  ${device.small} {
    font-size: calc(6vh);
  }

  ${device.smallLandscape} {
    font-size: calc(0.5vw + 5vh + 1.5vmin);
  }

  ${device.medium} {
    font-size: calc(7.5vh);
  }

  ${device.mediumLandscape} {
    font-size: calc(3vw + 2.5vh + 1.5vmin);
  }

  ${device.normal} {
    font-size: 7vw;
  }

  ${device.large} {
    font-size: 7.5vw;
  }
`

export const fontQuote = css`
  ${device.small} {
    font-size: calc(1.5vw + 2vh + 1.5vmin);
  }

  ${device.smallLandscape} {
    font-size: calc(2vw + 2vh + 1.5vmin);
  }

  ${device.medium} {
    font-size: 1.5rem;
  }

  ${device.mediumLandscape} {
    font-size: 1.5rem;
  }

  ${device.normal} {
    font-size: calc(1.25vw * 0.5rem);
  }

  ${device.large} {
    font-size: calc(1.25vw * 0.5rem);
  }
`
