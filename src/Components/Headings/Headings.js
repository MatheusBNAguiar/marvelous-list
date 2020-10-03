/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const headingFont = css`
    font-family: 'Roboto Condensed';
    font-weight: 700;
`

const h1Style = css`
    font-size: 32px;
`
const h2Style = css`
    font-size: 28px;
`
const h3Style = css`
    font-size: 26px;
`
const h4Style = css`
    font-size: 22px;
`
const h5Style = css`
    font-size: 20px;
`

export const H1 = (props) => <h1 css={[headingFont, h1Style]} {...props} />
export const H2 = (props) => <h2 css={[headingFont, h2Style]} {...props} />
export const H3 = (props) => <h3 css={[headingFont, h3Style]} {...props} />
export const H4 = (props) => <h4 css={[headingFont, h4Style]} {...props} />
export const H5 = (props) => <h5 css={[headingFont, h5Style]} {...props} />
