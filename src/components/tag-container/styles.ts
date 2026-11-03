import { css } from '@emotion/css'
import * as color from 'utils/styles/colors'
// import * as fonts from 'utils/styles/font-sizes'
import * as paddings from 'utils/styles/margins-paddings'

export const tagsContainer = css`
  label: tagsContainer;
  display: inline-block;
  font-size: 0;
`

interface TagStyleProps {
  color?: string
  statement?: boolean
  style?: string
}

export const tag = (props: TagStyleProps) => css`
  label: tag;
  text-decoration: none;
  background-color: ${props.color};
  border-radius: 99vh;
  display: inline-block;
  ${(['right', 'bottom'] as const).map(side => paddings.generatePaddingString(paddings.s, side, 'rem')).join('')};
`

export const background = (props: TagStyleProps) => css`
  vertical-align: top;
  display: block;
  border-radius: 99vh;
  pointer-events: all;
  background-color: ${props.statement
    ? props.color
      ? color.white
      : color.gray
    : props.style && props.color
      ? props.style === 'dark'
        ? 'transparent'
        : color.white
      : 'transparent'};
  ${(['right', 'left'] as const).map(side => paddings.generatePaddingString(paddings.s, side, 'rem')).join('')};
  transition: background-color 0.15s;
  ${!props.color && `color: ${color.gray}; border: 1px solid;`};
`

export const text = (props: TagStyleProps) => css`
  font-size: 0.75em;
  line-height: 1.5;
  vertical-align: middle;
  text-transform: lowercase;
  color: ${props.statement ? props.color || color.white : props.color || color.gray};
  transition: color 0.15s;
`
