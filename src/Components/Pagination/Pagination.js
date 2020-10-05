/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useMemo } from 'react'
import { appColors } from 'Shared/style/colors'

const identity = x => x

export const container = css`
  align-items: center;
  display: flex;
`

export const indexesContainer = css`
    border: 1px solid ${appColors.primary};
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
    color: ${appColors.white};
    width: 32px;
    align-items: center;
    display: flex;
    justify-content: center;
    height: 32px;
    margin: 0;
    font-weight: bold;
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

const generateLowerBound = (position = 1, range = 1) => {
  const maxRange = position - range
  const lowerBound = []
  if (maxRange >= 1) {
    lowerBound.push(1)
  }
  for (let index = range - 1; index > 0; index -= 1) {
    if (position - index > 0) {
      lowerBound.push(position - index)
    }
  }
  return lowerBound
}

const generateUpperBound = (position = 1, range = 1, max = 1) => {
  const maxRange = position + range
  const upperBound = []
  for (let index = 1; index < range; index += 1) {
    if (position + index < max) {
      upperBound.push(position + index)
    }
  }
  if (maxRange <= max) {
    upperBound.push(max)
  }
  return upperBound
}

const buildPages = (position, range, max) => generateLowerBound(position, range).concat(position).concat(generateUpperBound(position, range, max))

export const Pagination = ({
  quantity = 1,
  active = 1,
  itemRange = 3,
  onChange: emitChangeEvent = identity,
  ...props
}) => {
  const availablePages = useMemo(() => buildPages(active, itemRange, quantity), [active, itemRange, quantity])
  const onClick = index => () => emitChangeEvent(index)

  if (!quantity) {
    return null
  }

  return (
    <div css={container} {...props}>
      <div css={indexesContainer}>

        {
          availablePages.map(page => (
            <PaginationItem
              key={page}
              children
              isActive={page === active}
              onClick={onClick(page)}
            >
              {page}
            </PaginationItem>
          ))
        }
      </div>
    </div>
  )
}
