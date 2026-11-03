import { css } from '@emotion/css'
import { breakpointStyle } from 'utils/styles/misc'
import { devicesDetailed } from 'utils/styles/media'

export const tagsContainer = css`
  label: tagsContainer;
  display: inline-block;
`

export const works = css`
  label: works;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const wrapper = css`
  label: wrapper;
  flex: 1 1 auto;
  padding-top: 100px;
  ${breakpointStyle(devicesDetailed, {
    'padding-top': ['120px', '120px', '100px', '100px', '100px', '100px'],
    'padding-bottom': ['30px', '30px', '40px', '40px', '45px', '45px'],
  })}
`

export const content = css`
  label: content;
  margin: auto;
  padding: 0 2.0%;
  width: 100%;
`

export const pageTitle = css`
  font-size: clamp(32px, 5vw, 72px);
  font-weight: 400;
  margin: 40px 0 70px;
`

export const introduction = css`
  margin: 0 0 40px;
  max-width: 850px;
  h2 { font-size: 28px; font-weight: 400; margin: 0 0 20px; }
  p { font-size: 20px; line-height: 1.5; color: #666; }
  a { color: inherit; text-decoration: underline; }
`

export const section = css`
  margin-bottom: 100px;
`

export const backLink = css`
  color: #222;
  font-size: 24px;
`

export const musicGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: 25px;
`

export const albumTitle = css`
  font-size: 20px;
  font-weight: 400;
  margin: 0 0 20px;
`
