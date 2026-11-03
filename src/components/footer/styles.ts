import { css } from '@emotion/css'
import { breakpointStyle } from 'utils/styles/misc'
import { devicesDetailed } from 'utils/styles/media'

export const footer = css`
  label: footer;
  width: 100%;
  z-index: 1;
  margin: auto;
  ${breakpointStyle(devicesDetailed, {
    padding: ['0px 25px', '0px 30px', '0px 40px', '0px 40px', '0px 40px', '0px 40px'],
    width: ['auto', 'auto', 'auto', '100%', '100%', '100%'],
  })}
`

export const content = () => css`
  color: #888;
  display: flex;
  flex-wrap: wrap;
  ${breakpointStyle(devicesDetailed, {
    padding: ['25px 0px', '25px 0px', '30px 0px', '30px 0px', '30px 0px', '30px 0px'],
    'font-size': ['17px', '17px', '18px', '18px', '20px', '20px'],
  })}
  a {
    color: #888;
  }
`

export const separator = css`
  border: 0;
  height: 0;
  max-width: 100vw;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`

export const column = css`
  label: column;
  display: flex;
  width: 50%;
  height: 100%;

  :first-child {
    justify-content: start;
  }
  :last-child {
    justify-content: flex-end;
  }

  ${devicesDetailed.small} {
    flex-direction: column;
    :first-child {
      align-items: flex-start;
    }
    :last-child {
      align-items: flex-end;
    }
  }

  ${devicesDetailed.tiny} {
    flex-direction: column;
    :first-child {
      align-items: flex-start;
    }
    :last-child {
      align-items: flex-end;
    }
  }
`

export const string = css`
  text-transform: capitaize;
  padding: 0 18px;
  :first-child {
    padding: 0 18px 0 0;
  }
  :last-child {
    padding: 0 0 0 18px;
  }
  ${devicesDetailed.small} {
    padding: 7px 0;
    :last-child {
      padding: 7px 0;
    }
    :first-child {
      padding: 7px 0;
    }
  }
  ${devicesDetailed.tiny} {
    padding: 7px 0;
    :last-child {
      padding: 7px 0;
    }
    :first-child {
      padding: 7px 0;
    }
`

export const links = css`
  label: links;
  justify-content: flex-end;
  display: flex;
`
