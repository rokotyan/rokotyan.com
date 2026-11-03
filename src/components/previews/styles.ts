import { css } from '@emotion/css'
import * as color from 'utils/styles/colors'
import { media, device } from 'utils/styles/media'

const articleNameHeight = '40px'
export const previews = css`
  label: previews;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  justify-items: stretch;
  align-items: stretch;
  grid-template-areas:
    'p0 p0 p1'
    'p0 p0 p2'
    'p3 p4 p5';

  ${media(device.tabletLandscape)} {
    grid-column-gap: 15px;
    grid-row-gap: 5px;
  }

  ${media(device.phone, device.tabletPortrait)} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-column-gap: 10px;
    grid-row-gap: 10px;

    grid-template-areas:
      'p0' 'p1' 'p2' 'p3' 'p4' 'p5';
  }
`

export const article = (index: number) => css`
  label: article;
  grid-area: ${index < 6 ? `p${index}` : 'unset'};
  filter: contrast(1);
  transition: all 300ms;

  :hover {
    cursor: pointer;
    filter: contrast(0.9);
    transform: translateY(-2px) scale(1.01);
  }
`

export const videoContaier = css`
  width: 100%;
  height: calc(100% - ${articleNameHeight});
  padding-bottom: 62.5%;
  overflow: hidden;
  position: relative;
  display: block;
  background-size: cover;
  background-position: center center;
`

export const video = css`
  label: video;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
`

export const title = css`
  label: title;
  text-transform: capitalize;
  color: ${color.dark};
  position: relative;
  bottom: 0;
  min-height: 0;
  height: ${articleNameHeight};
  overflow: hidden;

  font-size: 14pt;
  padding-top: 10px;

  ${media(device.phone, device.tabletPortrait)} {
    padding-left: 10px;
  }


`
