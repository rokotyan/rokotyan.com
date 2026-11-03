import { css } from '@emotion/css'
import { devices, devicesDetailed, media, device } from 'utils/styles/media'
import { breakpointStyle, headerHeight } from 'utils/styles/misc'

interface HeaderStyleProps {
  color: string
  main: boolean
}

export const header = (props: HeaderStyleProps) => css`
  label: header;
  width: 100%;
  z-index: 1;
  position: absolute;
  font-weight: 400;
  white-space: nowrap;
  user-select: none;
  height: ${headerHeight}px;
  padding: 16px 0;

  ${media(device.phone, device.tablet)} {
    height: ${headerHeight + 50}px;
    padding: 10px 0;
  }

  ${links({ main: props.main, color: props.color })}
`

export const headerSticky = (props: HeaderStyleProps & { background: string }) => css`
  label: stickyHeader;
  width: 100vw;
  z-index: 1;
  position: fixed;
  font-weight: 400;
  visibility: hidden;
  user-select: none;
  height: ${headerHeight}px;
  padding: 16px 0;
  opacity: 0.9;
  background: ${props.background};
  transition: transform 0.3s ease, visibility 0s 0.3s linear;
  transform: translate3d(0, -100%, 0);

  ${devicesDetailed.tiny} {
    height: ${headerHeight + 50}px;
    padding: 10px 0;
  }

  ${devicesDetailed.small} {
    height: ${headerHeight + 50}px;
    padding: 10px 0;
  }

  ${media(device.phone, device.tablet)} {
    height: ${headerHeight + 50}px;
    padding: 10px 0;
  }

  &.active {
    transform: translate3d(0, 0, 0);
    transition: transform 0.3s ease;
    visibility: visible;
  }

  &.top {
    position: absolute;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
    transition-property: none;
    transition-duration: 0s;
    z-index: 0;
  }

  ${links({ main: props.main, color: props.color })}
`

export const links = (props: HeaderStyleProps) => css`
  a,
  span {
    color: ${props.color};
    :not(#title) {
      opacity: ${props.main ? 1 : '0.5'};
      &.active { opacity: 1; }
      :hover:not(.active) { opacity: ${props.main ? 1 : '0.8'}; }
    }
  }
`

export const content = css`
  label: content;
  display: flex;
  position: relative;
  margin: 0 auto;
  height: 100%;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 2.0%;
`

export const title = css`
  label: title;
  display: flex;
  white-space: nowrap;
  font-weight: 400;
  letter-spacing: -0.6px;
  width: 60%;
  font-size: 20pt;

  ${media(device.phone, device.tablet)} {
    width: 100%;
  }

  ${media(device.tabletLandscape)} {
  }

  ${media(device.laptop)} {
  }

  ${media(device.desktop)} {
  }
`

export const tabs = css`
  label: tabs;
  display: flex;
  text-transform: capitalize;
  margin: 0 10px;
  justify-content: start;
  font-size: 20pt;

  ${media(device.phone, device.tablet)} {
    margin: 10px 0 0;
    font-size: 16pt;
  }

  ${devicesDetailed.tiny} {
    justify-content: end;
    margin: 0;
  }
  ${devicesDetailed.small} {
    justify-content: end;
    margin: 0;
  }
  ${'' /* ${breakpointStyle(devicesDetailed, {
    'font-size': ['19px', '19px', '20px', '20px', '22px', '22px'],
  })} */}


  ${'' /* ${media(device.phone, device.tablet)} {
    padding-left: 0%;
    font-size: 22pt;
  }

  ${media(device.tabletLandscape)} {
    padding-left: 50%;
    font-size: 22pt;
  }

  ${media(device.laptop)} {
    padding-left: 66%;
    font-size: 20pt;
  }

  ${media(device.desktop)} {
    padding-left: 66%;
    font-size: 24pt;
  } */}
`

export const tab = css`
  display: inline-block;
  :not(:last-child) {
    ${breakpointStyle(devices, {
    'padding-right': ['12px', '18px', '18px', '18px'],
  })}
  }
  :not(:first-child) {
    ${breakpointStyle(devices, {
    'padding-left': ['12px', '18px', '18px', '18px'],
  })}
  }
`

export const disabled = css`
  pointer-events: none;
  cursor: default;
  opacity: 0.5 !important;
`
