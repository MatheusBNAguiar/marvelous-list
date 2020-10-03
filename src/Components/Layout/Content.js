/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { genericContainer } from './Layout.style'

const maxWidthContainer = css`
  ${genericContainer}
  flex-direction: column;
  align-self: center;
  width: 100%;
  padding: 20px;
  padding-bottom: 15px;
  box-sizing: border-box;
`

export const Content = (props) => <div css={maxWidthContainer} {...props} />
