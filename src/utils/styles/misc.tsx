import { css } from '@emotion/css'
import React from 'react'

export const headerHeight = 60

export const breakpointStyle = (devices: Record<string, string>, object: Record<string, (string | number)[]>) => {
  let style = ''
  Object.values(devices).forEach((element, i) => {
    let part = ''
    Object.keys(object).forEach(key => {
      const value = `${key}: ${object[key][i]}`
      part = part.concat(value, ';\n')
    })
    style = style.concat(`${element} {\n${part}}`, '\n')
  })
  return style
}

export const textShadow = `text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5)`

export function RightArrow({ color }: { color: string }) {
  return (
    <span style={{ paddingLeft: '12px', display: 'inline-flex', verticalAlign: 'middle' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="100%"
        viewBox="0 0 26 13"
      >
        <path
          fill={color}
          fillRule="nonzero"
          d="M19.24 13l5.97-6.514L19.24 0l-.973.955 4.37 4.736H0v1.598h22.636l-4.37 4.735z"
        />
      </svg>
    </span>
  )
}

export const grad = css`
  background-image: linear-gradient(
    to top,
    hsla(0, 0%, 99%, 0) 0%,
    hsla(0, 0%, 99%, 0.013) 8.1%,
    hsla(0, 0%, 99%, 0.049) 15.5%,
    hsla(0, 0%, 99%, 0.104) 22.5%,
    hsla(0, 0%, 99%, 0.175) 29%,
    hsla(0, 0%, 99%, 0.259) 35.3%,
    hsla(0, 0%, 99%, 0.352) 41.2%,
    hsla(0, 0%, 99%, 0.45) 47.1%,
    hsla(0, 0%, 99%, 0.55) 52.9%,
    hsla(0, 0%, 99%, 0.648) 58.8%,
    hsla(0, 0%, 99%, 0.741) 64.7%,
    hsla(0, 0%, 99%, 0.825) 71%,
    hsla(0, 0%, 99%, 0.896) 77.5%,
    hsla(0, 0%, 100%, 0.957) 91.9%,
    hsla(0, 0%, 100%, 1) 100%
  );
`
export const hexagrad = (props: { color: string }) => css`
  background-image: linear-gradient(
    to bottom,
    ${`${props.color}`} 0%,
    ${`${props.color}fd`} 3.4%,
    ${`${props.color}f8`} 6.3%,
    ${`${props.color}ef`} 9.3%,
    ${`${props.color}e4`} 12.3%,
    ${`${props.color}d6`} 15.5%,
    ${`${props.color}c6`} 19.1%,
    ${`${props.color}b3`} 23.3%,
    ${`${props.color}9f`} 28.2%,
    ${`${props.color}8a`} 34.1%,
    ${`${props.color}74`} 41.2%,
    ${`${props.color}5d`} 49.6%,
    ${`${props.color}56`} 52.5%,
    ${`${props.color}2e`} 71%,
    ${`${props.color}17`} 84.5%,
    ${`${props.color}17`} 100%
  );
`

// to bottom,
//     ${`${props.color}`} 0%,
//     ${`${props.color}fd`} 3.4%,
//     ${`${props.color}f8`} 6.3%,
//     ${`${props.color}ef`} 9.3%,
//     ${`${props.color}e4`} 12.3%,
//     ${`${props.color}d6`} 15.5%,
//     ${`${props.color}c6`} 19.1%,
//     ${`${props.color}b3`} 23.3%,
//     ${`${props.color}9f`} 28.2%,
//     ${`${props.color}8a`} 34.1%,
//     ${`${props.color}74`} 41.2%,
//     ${`${props.color}5d`} 49.6%,
//     ${`${props.color}56`} 52.5%,
//     ${`${props.color}2e`} 71%,
//     ${`${props.color}17`} 84.5%,
//     ${`${props.color}17`} 100%
