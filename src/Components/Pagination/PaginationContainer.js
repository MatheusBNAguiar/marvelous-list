/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { H1 } from 'Components/Headings/Headings'
import { Loading } from 'Components/Loading/Loading'
import { useEffect, useRef } from 'react'
import { Pagination } from './Pagination'

const childrenContainer = css`
  position: relative;
  min-height: 200px;
`

const paginationContainer = css`
    display: flex;
    margin: 10px 0;
    justify-content: center;
`

export const PaginationContainer = ({
  title = '',
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
      <H1>
        {title}
      </H1>
      <div css={childrenContainer}>
        <Loading isLoading={isFetching} />
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
