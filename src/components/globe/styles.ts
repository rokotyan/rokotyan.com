import { css } from '@emotion/css'
import { devicesDetailed } from 'utils/styles/media'
import { breakpointStyle } from 'utils/styles/misc'

export const globe = css`
  label: globe;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  ${breakpointStyle(devicesDetailed, {
    'align-items': ['baseline', 'baseline', 'center', 'center', 'center', 'center'],
  })}
`
