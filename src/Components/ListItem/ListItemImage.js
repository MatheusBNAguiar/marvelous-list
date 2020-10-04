/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const listImageContainer = css`
    height: 220px;
    width: 100%;
    overflow: hidden;
    position: relative;
`
const listImage = css`
    display: block;
    margin: 0;
    object-position: center center;
    padding: 0;
    width: 100%;
    height: 100%;
`

export const ListItemImage = (props) => (<img css={listImage} {...props} />)
export const ListItemImageContainer = (props) => <div css={listImageContainer} {...props} />
