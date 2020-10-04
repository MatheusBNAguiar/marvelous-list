/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useEffect, useRef } from 'react'
import { Pagination } from './Pagination'

const paginationContainer = css`
    display: flex;
    margin: 10px 0;
    justify-content: center;
`

export const PaginationContainer = ({
  isFetching = false,
  quantity,
  active,
  onPaginationChange,
  children
}) => {
  const containerRef = useRef()

  useEffect(() => {
    if (!isFetching) {
      containerRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }, [isFetching])

  return (
    <div ref={containerRef}>
      <div>
        {children}
      </div>
      <div css={paginationContainer}>
        <Pagination
          quantity={quantity}
          active={active}
          onChange={onPaginationChange}
        />
      </div>
    </div>
  )
}
