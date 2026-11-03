import { css } from '@emotion/css'
import type { Project } from 'utils/types'

export const page = (props: Pick<Project, 'fontColor'>) => css`
  label: page;
  min-height: 100vh;
  color: ${props.fontColor};
`

export const content = (props: Pick<Project, 'fontColor'>) => css`
  label: content;
  white-space: pre-line;
  span {
    display: inline-block;
    color: inherit;
    text-decoration: none;
  }

  a {
    color: ${props.fontColor};
    text-decoration: underline;
  }
`
