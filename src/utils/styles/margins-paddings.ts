export const xs = 0.25
export const s = 0.5
export const m = 1
export const l = 1.5
export const xl = 2
export const xxl = 3.5

export const vw = 1.5

export const generateMarginString = (value: number, side: 'top' | 'right' | 'bottom' | 'left', unit: string) => `margin-${side}: ${value}${unit};\n`

export const generatePaddingString = (value: number, side: 'top' | 'right' | 'bottom' | 'left', unit: string) => `padding-${side}: ${value}${unit};\n`
