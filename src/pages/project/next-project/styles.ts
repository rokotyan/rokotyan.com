import { css } from '@emotion/css'
import { hexagrad } from 'utils/styles/misc'
import { media, device } from 'utils/styles/media'

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

export const nextProject = css`
  label: nextproject;
  position: relative;
  max-height: 50vh;
  overflow: hidden;

  ${media(device.phonePortrait, device.tabletPortrait)} { font-size: 25px; }
`

export const nextProjectContent = (props: { color: string }) => css`
  label: nextprojectContent;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  margin: auto;
  height: 50vh;
  padding: 45px 40px;
  color: ${props.color};
  z-index: 2;

  ${media(device.phone, device.tablet)} { padding: 45px 30px; }
`

export const grad = (props: { background: string }) => css`
  ${hexagrad({ color: props.background })}
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
`

export const next = (props: { accent: string }) => css`
  position: absolute;
  color: ${props.accent};
  opacity: 0.7;
  display: inline-flex;
  font-size: 28px;
  top: 90px;

  ${media(device.phone)} {
    top: 45px;
    font-size: 24px;
  }

  ${media(device.desktop)} { font-size: 40px; }
`
