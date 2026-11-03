import { css } from '@emotion/css'

export const message = css`
  display: block;
  > {
    display: inline;
    vertical-align: middle;
  } 
`

export const mailContent = css`
  label: mail-content;
  direction: rtl;
  unicode-bidi: bidi-override;
  pointer-events: all;

  ${'' /* :before {
    direction: rtl;
    unicode-bidi: bidi-override;
    content: attr(data-site)"\0040"attr(data-user);
  } */}
`
