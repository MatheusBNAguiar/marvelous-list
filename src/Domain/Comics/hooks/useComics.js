import { useCallback, useState } from 'react'
import { usePaginatedQuery } from 'react-query'
import { ComicsService } from 'Core/Services/Comics'
import { usePaginationItemQuantity } from 'Shared/hooks/usePaginationItemQuantity'

const quantities = { onDesktop: 16, onTablet: 12, onPhone: 8 }

export const useComics = () => {
  const [page, setPage] = useState(1)
  const paginationQuantity = usePaginationItemQuantity(quantities)

  const getComics = useCallback(() => paginationQuantity && ComicsService.listComics({ page, paginationQuantity }), [page, paginationQuantity])
  const { isFetching, error, resolvedData: { results: comics = [], meta = {} } = {} } = usePaginatedQuery(['comics', { page, paginationQuantity }], getComics, { refetchOnWindowFocus: false })

  return {
    isFetching,
    error,
    comics,
    page,
    setPage,
    meta
  }
}
