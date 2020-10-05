/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'

const listItemSummaryContainer = css`
    display: grid;
    grid-auto-flow: column;
`

const listItemSummaryItem = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    i {
        margin-bottom: 5px;
    }
`

export const ListItemSummaryContainer = (props) => (<div css={listItemSummaryContainer} {...props} />)

export const ListItemSummaryItem = ({ iconType = '', quantity = 0 }) => quantity ? (
  <div css={listItemSummaryItem}>
    <i className={`icon icon-${iconType}`} />
    <span>{quantity}</span>
  </div>
) : null
