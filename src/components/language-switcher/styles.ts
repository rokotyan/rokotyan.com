import { css } from '@emotion/css'
import { devicesDetailed } from 'utils/styles/media'
import { breakpointStyle } from 'utils/styles/misc'

export const langswitcher = () => css`
  label: langswitcher;
  width: auto;
  display: block;
  cursor: pointer;
  color: inherit;
  margin-left: auto;
  text-transform: capitalize;
  height: 100%
  align-items: center;
  // transition: opacity 0.3s, color 0.3s;
  opacity: 0.8;
  ${breakpointStyle(devicesDetailed, {
    'font-size': ['19px', '19px', '20px', '20px', '22px', '22px'],
  })}
  :hover {
    opacity: 1;
  }

`
