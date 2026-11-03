import { css, keyframes } from '@emotion/css'
import * as color from 'utils/styles/colors'
import { media, device } from 'utils/styles/media'

export const page = css`
  label: page;
  height: auto;
  transition-delay: 1s;
  transition-property: background-color;
  overflow: overlay;
  color: ${color.dark};
`

export const colorchange = keyframes`
{
  0%   {background: #000;}
  25%  {background: #3b3e45;}
  50%  {background: #63676d;}
  75%  {background: #323542;}
  100% {background: #000;}
}
`

export const topBackground = css`
  label: topBackground;
  animation: ${colorchange} 15s linear infinite;
  min-height: 100vh;
  width: 100%;
  position: relative;
`

export const topBlock = css`
  label: topBlock;
  height: 100vh;
  display: flex;
  position: relative;
  bottom: 0;
  margin: auto;
  padding: 2.5%;

  pointer-events: none;
`

export const reelVideoContainer = css`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  video {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: contrast(0.92);

    @-moz-document url-prefix() {
      filter: unset !important;
    }
    
  }
`

export const autoplayWarning = css`
  position: absolute;
  text-align: center;
  top: 45px;
  color: white;
  font-size: 10pt;
  font-weight: 600;
  width: 100%;
  padding: 7px 20px;
  background-color: rgba(0,0,0,0.25);
  cursor: pointer;
  z-index: 999;

  :hover {
    text-decoration: underline;
  }

  ${media(device.phone, device.tablet)} {
    top: 100px;
  }
`

// https://allthingssmitty.com/2016/12/12/responsive-video-resizing/
export const headerVideo = css`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const headline = css`
  label: headline;
  margin: 0;
  font-weight: 400;
  color: ${color.white};
  align-self: center;
  text-align: left;
  width: 100%;
  line-height: 1.5em;
  font-size: 22pt;
  pointer-events: none;

  ${media(device.phone)} {
    padding-left: 0%;
    user-select: none;
  }

  ${media(device.tablet, device.tabletLandscape)} {
    padding-left: 50%;
  }

  ${media(device.laptop)} {
    padding-left: 60%;
    font-size: 24pt;
  }

  ${media(device.desktop)} {
    padding-left: 60%;
    font-size: 28pt;
  }
`

export const moreWorks = (props: { top: boolean }) => css`
  label: moreWorks;
  position: ${props.top ? 'absolute' : 'block'};
  bottom: 0;
  font-size: 22pt;
  display: inline-flex;
  color: ${props.top ? color.white : color.dark};
  padding: ${props.top ? '16px 0' : '64px 0 32px 0'};
`

export const headerContacts = css`
  position: absolute;
  bottom: 0;
  font-size: 18pt;
  display: block;
  padding: 16px 0;
  color: ${color.white};
  left: 60%;
  cursor: pointer;

  ${media(device.phone, device.tablet)} {
    left: 2.0%;
  }
`

export const content = css`
  label: content;
  margin: auto;
  flex-direction: column;
  display: flex;
  padding: 5%;

  ${media(device.phone)} { width: auto; padding: 0px 15px; }
  ${media(device.tablet)} { width: auto; padding: 0px 30px 0 40px; }
  ${media(device.tabletLandscape)} { width: auto; padding: 0px 40px 0 60px; }
  ${media(device.laptop)} { width: 100%; padding: 0px 40px 0 90px; }
  ${media(device.desktop)} { width: 100%; padding: 0px 40px 0 120px; }
  
  * {
    line-height: 1.5em;
  }
`

export const projectsContainer = css`
  label: projects;
  position: relative;
  display: block;
  height: auto;
  width: 100%;
  padding: 0 1.5%;

  ${media(device.phone)} { padding: 0; }
`

export const viewProjectsContainer = css`
  label: view-projects-container;
  position: relative;
  width: 100%;
  padding: 15px 1.5% 150px 1.5%;

  ${media(device.phone)} { padding: 0 25px 100px 25px; }
`

export const scopesBlock = css`
  label: scopesBlock;
  flex-direction: row;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`

export const scope = css`
  label: scope;
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  width: calc(100% / 3);
  min-height: 220px;
  height: auto;
  margin-bottom: 30px;

  ${media(device.phone)} { width: 100%; height: auto; margin-bottom: 30px; border-top: 3px solid black;}
  ${media(device.tablet)} { width: 50%; height: 160px; }
  ${media(device.tabletPortrait)} { width: 50%; height: 180px; }
  
`

export const scopeName = css`
  label: scopeName;
  color: inherit;
  gap: 10px;
  :hover { text-decoration: underline; }
  padding-bottom: 5px;
  display: flex;
  align-items: flex-end;
  height: auto;
  max-width: 100%;

  font-size: 18pt;

  ${media(device.tablet)} { font-size: 20pt; }
  ${media(device.laptop)} { font-size: 22pt; }
  ${media(device.laptop15)} { font-size: 24pt; }
  ${media(device.desktop)} { font-size: 26pt; }

  ${'' /* ${breakpointStyle(devices, {
    'font-size': ['19px', '21px', '24px', '27px'],
    'max-width': ['100%', '92%', '92%', '92%'],
    height: ['auto', 'auto', 'auto', 'auto'],
  })} */}
`

export const scopeDescription = css`
  label: scopeDescription;
  color: ${color.gray};
  font-size: 16pt;
  max-width: 85%;

  ${media(device.phone)} { font-size: 14pt; max-width: 100%; }
  ${media(device.tablet)} { font-size: 16pt; max-width: 90%; }
  ${media(device.tabletPortrait)} { font-size: 15pt; max-width: 90%; }
  ${media(device.laptop)} { font-size: 16pt; }
  ${media(device.laptop15)} { font-size: 18pt; }
  ${media(device.desktop)} { font-size: 20pt; }

  ${'' /* ${breakpointStyle(devices, {
    'font-size': ['17px', '17px', '19px', '22px', '25px', '28px'],
    'max-width': ['100%', '90%', '80%', '80%', '80%', '80%'],
  })} */}
`

export const textCont = css`
  label: textCont;
  display: flex;
  align-items: center;
  font-size: 18pt;
  max-width: 80%;
  margin-left: 40%;
  width: 60%;
  padding: 16% 5% 12% 5%;
  font-weight: 400;

  ${media(device.phone)} {
    width: 100%;
    box-sizing: content-box;
    font-size: 18pt;
    max-width: unset;
    margin-right: 0%;
    margin-left: 0%;
    padding-right: 0;
    padding-left: 0;
    margin-top: 20%;
    margin-bottom: 20%;
  }

  ${media(device.tablet)} {
    width: 60%;
    margin-left: 35%;
  }

  ${media(device.laptop)} { font-size: 22pt; }
  ${media(device.laptop15)} { font-size: 24pt; }
  ${media(device.desktop)} { font-size: 26pt; }
`

export const block = css`
  label: block;
  display: flex;
  justify-content: flex-end;
`

export const blockTitle = css`
  label: blockTitle;
  font-weight: 400;
  margin: 0;
  font-size: 35px;
  padding: 80px 0 30px 0;
  
  ${media(device.laptop)} { font-size: 40px; padding: 120px 0 40px 0; }
  ${media(device.laptop15)} { font-size: 45px; padding: 160px 0 40px 0; }
  ${media(device.desktop)} { font-size: 55px; padding: 180px 0 40px 0; }
`

export const text = css`
  label: text;
`

export const contactUs = css`
  cursor: pointer;
  padding-bottom: 80px;
`

export const cryptedmail = css`
  :after {
    content: attr(data-name) "@" attr(data-domain) "." attr(data-tld); 
  }
`

export const sectionIntro = css`
  font-size: 16pt;
  color: ${color.gray};
  max-width: 800px;
  padding-bottom: 50px;
`

export const textLink = css`
  color: ${color.dark};
  display: inline-flex;
  margin-top: 25px;
  font-size: 16pt;
  :hover { text-decoration: underline; }
`
