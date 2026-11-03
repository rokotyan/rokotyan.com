import { css } from '@emotion/css'

export const rootStyle = (props: { background: string }) => css`
  label: root;
  transition: background-color 1s;
  background-color: ${props.background};
  width: 100%;
  position: absolute;
  left: 0;

  ::selection {
    background: rgba(204, 204, 204, 0.5);
  }
`
