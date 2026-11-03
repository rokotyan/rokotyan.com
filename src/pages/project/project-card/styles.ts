import { css } from '@emotion/css'
import { media, device } from 'utils/styles/media'

export const projectCard = css`
  label: projectCard;
  position: relative;
  max-height: 100vh;
  overflow: hidden;
`

export const projectContent = css`
  label: projectContent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  margin: auto;
  height: 100vh;
  padding-left: 2.0%;
`

export const projectImg = css`
  label: projectImg;
  object-fit: cover;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100vh;

  ${'' /* ${media(device.phonePortrait)} {
    filter: contrast(0.3) brightness(1.5);
  } */}

`

export const projectTitle = css`
  line-height: 1;
  font-weight: 400;
  padding-bottom: 4px;
  font-size: 40px;

  ${media(device.phone)} { font-size: 24pt; }
  ${media(device.tablet)} { font-size: 24pt; }
  ${media(device.laptop)} { font-size: 32pt; }
  ${media(device.laptop15)} { font-size: 36pt; }
  ${media(device.desktop)} { font-size: 48pt; }
`

export const projectDescription = css`
  line-height: 150%;
  opacity: 0.5;

  ${media(device.phone)} { font-size: 12pt; }
  ${media(device.tablet)} { font-size: 12pt; }
  ${media(device.laptop)} { font-size: 14pt; }
  ${media(device.laptop15)} { font-size: 14pt; }
  ${media(device.desktop)} { font-size: 18pt; }
`
