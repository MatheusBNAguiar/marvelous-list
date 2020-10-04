/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { appColors } from 'Shared/style/colors'

const identity = x => x

export const container = css`
  align-items: center;
  display: flex;
`

export const indexesContainer = css`
    align-items: center;
    display: flex;
    min-height: 40px;
    padding: 0px 10px;
    margin-left: 10px;
    border-radius: 20px;

    span {    
      margin: 0 8px;
      cursor: pointer;
      user-select: none;
    }
`

const indexActive = css`
    background-color: ${appColors.secondary};
    width: 32px;
    height: 32px;
    margin: 0;
    border-radius: 100%;
    box-shadow: 0px 0px 4px #00000014;
`

const defaultCursor = css`
    cursor: default;
`

const PaginationItem = ({ children, isActive = false, isClickable = true, ...other }) => {
  return (
    <span css={[isActive && indexActive, isClickable || defaultCursor]} {...other}>
      {children}
    </span>
  )
}

export const Pagination = ({ quantity = 1, active = 1, onChange: emitChangeEvent = identity, ...other }) => {
  const onClick = index => () => emitChangeEvent(index)

  const generateItem = (index, active, clickCallback = identity, ellipses = false) => (
    <PaginationItem key={index} isActive={active} onClick={clickCallback} isClickable={!ellipses}>
      {ellipses ? '...' : index}
    </PaginationItem>
  )

  const generateClickableItem = (index, active) => generateItem(index, active === index, onClick(index))

  const generateEllipsis = index => generateItem(index, false, identity, true)

  const whichItemGenerate = (index, active) =>
    shouldRender(index, active, 2) ? generateClickableItem(index, active) : generateEllipsis(index)

  const shouldRender = (index, active, range) => index === 1 || Math.abs(index - active) < range

  const createPagination = (active, last, index = 1, items = []) => {
    if (index === last) {
      return items.concat(generateClickableItem(index, active))
    }
    return createPagination(
      active,
      last,
      index + 1,
      shouldRender(index, active, 3) ? items.concat(whichItemGenerate(index, active)) : items
    )
  }

  return (
    <div css={container} {...other}>
      <span>Página</span>
      <div css={indexesContainer}>{createPagination(active, quantity)}</div>
    </div>
  )
}
