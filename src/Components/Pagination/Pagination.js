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
    pointer-events: none;
`

const PaginationItem = ({ children, isActive = false, isClickable = true, ...other }) => {
  return (
    <span
      {...other}
      aria-current={isActive}
      css={[isActive && indexActive, !isClickable && defaultCursor]}
    >
      {children}
    </span>
  )
}

const generateLowerBound = (position = 1, range = 1) => {
  const maxRange = position - range
  const lowerBound = []
  if (position !== 1) {
    lowerBound.push(1)
  }
  if (maxRange > 1) {
    lowerBound.push('...')
  }
  for (let index = range; index > 0; index -= 1) {
    const newPosition = position - index
    if (newPosition > 1) {
      lowerBound.push(newPosition)
    }
  }
  return lowerBound
}

const generateUpperBound = (position = 1, range = 1, max = 1) => {
  const maxRange = position + range
  const upperBound = []
  for (let index = 1; index <= range; index += 1) {
    const newPosition = position + index
    if (newPosition < max) {
      upperBound.push(newPosition)
    }
  }
  if (maxRange < max) {
    upperBound.push('...')
  }
  if (position !== max) {
    upperBound.push(max)
  }
  return upperBound
}

const buildPages = (position, range, max) => generateLowerBound(position, range).concat(position).concat(generateUpperBound(position, range, max))

export const Pagination = ({
  quantity = 1,
  active = 1,
  itemRange = 2,
  onChange: emitChangeEvent = identity,
  ...props
}) => {
  const availablePages = useMemo(() => buildPages(active, itemRange, quantity), [active, itemRange, quantity])
  const onClick = index => () => emitChangeEvent(index)

  if (!quantity) {
    return null
  }

  return (
    <nav role='navigation' aria-label='Pagination Navigation' css={container} {...props}>
      <div css={indexesContainer}>
        {
          availablePages.map((page, index) => {
            const isClickable = page !== '...'
            return (
              <PaginationItem
                key={isClickable ? page : `ellipsis-on-${index}`}
                children
                isActive={page === active}
                aria-label={isClickable ? `Go to page ${page}` : 'Interval between pages'}
                onClick={isClickable ? onClick(page) : () => {}}
                isClickable={isClickable}
              >
                {page}
              </PaginationItem>
            )
          })
        }
      </div>
    </nav>
  )
}
