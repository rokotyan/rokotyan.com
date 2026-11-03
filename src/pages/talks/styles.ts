import { css } from '@emotion/css'
import { media, device } from 'utils/styles/media'

export const list = css`
  list-style: none;
  margin: 0 0 80px;
  padding: 0;
`

export const talk = css`
  display: grid;
  grid-template-columns: 15% 1fr;
  gap: 20px;
  padding: 40px 0;
  border-top: 1px solid #ddd;

  ${media(device.phone)} {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 30px 0;
  }
`

export const year = css`
  font-size: 20px;
  line-height: 1.5;
  color: #666;
`

export const title = css`
  margin: 0 0 14px;
  font-size: 28px;
  line-height: 1.4;
  font-weight: 400;
  max-width: 1000px;

  ${media(device.phone)} { font-size: 24px; }
`

export const venue = css`
  font-size: 20px;
  line-height: 1.5;
  color: #666;
`

export const links = css`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 28px;
  margin-top: 18px;
  font-size: 18px;
  line-height: 1.5;

  a {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 4px;
    :hover { opacity: .65; }
  }
`
