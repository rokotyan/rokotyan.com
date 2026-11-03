import { css } from '@emotion/css'
import { devices } from 'utils/styles/media'

export const container = css`
  position: relative;
  height: 100%;
  display: block;

  .plyr {
    display: block;
  }

  .plyr__video-embed {
    height: 0;
    width: auto;
    margin: 0;
    padding-bottom: 56.25%;
    position: relative;
  }

  video {
    -webkit-background-size:cover !important; 
   -moz-background-size:cover !important; 
   -o-background-size:cover !important; 
   background-size:cover !important; 
  }
`

export const autoplayWarning = css`
  position: absolute;
  text-align: center;
  top: 10px;
  right: 10px;
  color: white;
  font-size: 12pt;
  font-weight: 600;
  width: 350px;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: rgba(0,0,0,0.7);
  cursor: pointer;
  z-index: 999;

  :hover {
    text-decoration: underline;
  }

  ${devices.small} {
    width: 98%;
    right: 1%;
    font-size: 13pt;
  }
`
