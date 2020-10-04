/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const paginationContainer = css`
    display: flex;
    margin: 10px 0;
    align-self: center;
`

export const PaginationContainer = (props) => <div css={paginationContainer} {...props} />
