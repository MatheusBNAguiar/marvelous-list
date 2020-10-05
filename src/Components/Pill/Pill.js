/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { appColors } from 'Shared/style/colors'

export const pill = css`
    background-color: ${appColors.secondary};
    padding: 5px;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    display: inline-block;

    i{
        margin-right: 5px;
    }
`

export const Pill = (props) => <span css={pill} {...props} />

export const SummaryPill = ({ iconType = '', quantity = 0, title = '' }) => quantity ? (
  <Pill title={title}>
    <i className={`icon icon-${iconType}`} />
    {title} {quantity}
  </Pill>
) : null
