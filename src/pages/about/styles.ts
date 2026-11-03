import { css } from '@emotion/css'
import * as color from 'utils/styles/colors'
import { media, device } from 'utils/styles/media'

export const about = css`
  label: about;
  position: relative;
  padding: 160px 2.0% 80px 2.0%;
  color: ${color.light};

  a {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 0.15em;
  }

  ${media(device.phone, device.tablet)} {
    padding-top: 150px;
  }
`

export const introduction = css`
  width: 80%;
  margin-bottom: 80px;

  h1 {
    margin: 0 0 35px;
    color: ${color.white};
    font-size: 30pt;
    font-weight: 400;
    line-height: 1.5em;
  }

  p {
    max-width: 80%;
    font-size: 18pt;
    line-height: 1.5em;
  }

  ${media(device.phone, device.tablet)} {
    width: 100%;
    margin-bottom: 40px;

    p { max-width: 100%; }
  }

  ${media(device.phone)} {
    h1 { font-size: 26pt; }
    p { font-size: 16pt; }
  }

  ${media(device.laptop15)} {
    margin-bottom: 100px;
    h1 { font-size: 34pt; }
    p { font-size: 20pt; }
  }

  ${media(device.desktop)} {
    margin-bottom: 120px;
    h1 { font-size: 48pt; }
    p { font-size: 22pt; }
  }
`

export const content = css`
  position: relative;
`

export const contentColumn = css`
  display: inline-block;
  vertical-align: top;
  width: 33%;
  padding: 20px 40px 20px 0px;
  line-height: 1.5em;
  font-size: 16pt;

  h2 {
    margin: 15px 0 25px;
    color: ${color.white};
    font-size: 30pt;
    font-weight: normal;
    line-height: 1.25em;
  }

  p {
    margin: 0 0 1.25em;
  }

  p + h2 {
    margin-top: 60px;
  }

  &.wide {
    width: 66%;
    padding-right: 10%;
  }

  ${media(device.phone, device.tablet)} {
    width: 100%;
    padding: 20px 0px;

    &.wide {
      width: 100%;
      padding-right: 0;
    }
  }

  ${media(device.laptop15)} {
    font-size: 20pt;

    h2 { font-size: 34pt; }
    &.wide { padding-right: 16%; }
  }

  ${media(device.desktop)} {
    font-size: 22pt;

    h2 { font-size: 38pt; }
    &.wide { padding-right: 16%; }
  }
`
