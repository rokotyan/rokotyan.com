import { css } from '@emotion/css'
import { media, device } from 'utils/styles/media'

export const header = css`
  label: project-header;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  margin: auto;
  line-height: 150%;
  padding: 0 40px;
  width: 100%;
  
  ${media(device.phone)} {
    padding: 0;
    width: auto;
  }
`

export const chapter = css`
  label: chapter;
  display: flex;
  padding: 10px 0;
  width: 100%;
  line-height: 150%;
  flex-wrap: wrap;
  font-size: 16pt;

  ${'' /* ${media(device.phone)} { font-size: 24pt; }
  ${media(device.tablet)} { font-size: 24pt; } */}
  ${media(device.laptop)} { font-size: 16pt; }
  ${media(device.laptop15)} { font-size: 18pt; }
  ${media(device.desktop)} { font-size: 22pt; }
`

export const chapterName = css`
  label: chapterName;
  opacity: 0.5;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  text-transform: capitalize;


  ${media(device.phone)} {
    justify-content: start;
    padding-bottom: 10px;
    padding-right: 0;
    width: 100%;
  }
`

export const chapterText = css`
  label: chapterText;
  width: 50%;
  ${media(device.phone)} {
    width: 100%;
    padding-left: 0px;
  }
`

export const contentContainer = css`
  label: content-container;
  position: relative;
`

export const iframeContainer = css`
  position: relative;
`

export const iframeOverlay = css`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 24px;
  background: rgba(96, 96, 96, 0.35);
  color: #fff;
  font: inherit;
  font-size: 24px;
  text-shadow: 0 1px 4px #000;
  cursor: pointer;
  opacity: 0;
  transition: opacity 150ms;

  :hover, :focus-visible {
    opacity: 1;
  }

  :focus-visible {
    outline: 2px solid #fff;
    outline-offset: -4px;
  }

  @media (hover: none) {
    opacity: 1;
  }
`

export const iframe = css`
  display: block;
  width: 100%;
  height: 85vh;
  min-height: 600px;
  max-height: 900px;
  border: 0;
  background: #000;
`

export const pad = css`
  margin: 6% 3%;
`
export const smallMarginTop = css`
  margin-top: 2%;
`

export const smallMarginBottom = css`
  margin-bottom: 2%;
`

export const padHorizontal = css`
  padding-left: 2.0%;
  padding-right: 2.0%;
`
export const padVertical = css`
  padding-top: 3%;
  padding-bottom: 3%;
`

export const caption = css`
  font-size: 18pt;
  ${media(device.laptop)} { font-size: 20pt; }
  ${media(device.laptop15)} { font-size: 22pt; }
  ${media(device.desktop)} { font-size: 24pt; }
`

export const block = css`
  label: block;
  width: 100%;
  display: block;
  line-height: 150%;
  ${'' /* margin: 80px auto;
  padding: 0 2.0% 0px 6%;
  ${media(device.phone)} { padding: 0 25px; }
  ${media(device.tablet)} { padding: 0 25px; } */}

`

export const blockColumn = css`
  label: block-column;
  display: inline-block;
  vertical-align: top;
  width: 50%;
  margin-left: auto;

  ${media(device.phone)} {
    width: 100%;
    margin-left: 0;
  }

  &.left {
    padding: 0 40px 0 0;
    ${media(device.phone)} { padding: 10px 0; }
  }

  &.right {
    padding: 0 0 0 40px;
    ${media(device.phone)} { padding: 10px 0; }
  }
`

export const textBasis = css`
  label: text-basis;
  line-height: 1.5em;
  width: 100%;

  ${media(device.phone, device.tablet)} { padding-right: 0%; padding-left: 0%; }
  ${media(device.desktop)} { width: 50%; }
`
export const textSmall = css`
  label: text-small;
  font-size: 14pt;
  ${media(device.laptop)} { font-size: 16pt; }
  ${media(device.laptop15)} { font-size: 18pt; }
  ${media(device.desktop)} { font-size: 20pt; }
`

export const textRegular = css`
  label: text-regular;
  font-size: 16pt;
  ${media(device.laptop)} { font-size: 18pt; }
  ${media(device.laptop15)} { font-size: 20pt; }
  ${media(device.desktop)} { font-size: 22pt; }
`

export const alignBottom = css`
  label: align-bottom;
  vertical-align: bottom;
`

export const padRight = css`
  label: pad-right;
  padding-right: 40%;
  width: 100% !important;
  ${media(device.phone, device.tabletPortrait)} { padding-right: 0%; }
  ${media(device.desktop)} { padding-right: 50%; }
`

export const padLeft = css`
  label: pad-right;
  padding-left: calc(50% - 100px);
  width: 100% !important;
  ${media(device.phone, device.tabletPortrait)} { padding-left: 0%; }
  ${media(device.desktop)} { padding-left: 50%; }
`

export const textCallout = css`
  label: text-callout;
  font-size: 18pt;
  padding: 0% 10%;

  ${media(device.laptop)} { font-size: 18pt; }
  ${media(device.laptop15)} { font-size: 20pt; }
  ${media(device.desktop)} { font-size: 22pt; }
`
