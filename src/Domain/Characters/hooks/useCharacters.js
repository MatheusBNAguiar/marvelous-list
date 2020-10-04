import { CharactersService } from 'Core/Services/Characters'
import { useCallback, useState } from 'react'
import { usePaginationItemQuantity } from 'Shared/hooks/usePaginationItemQuantity'
import { usePaginatedQuery } from 'react-query'

export const useCharacters = () => {
  const [page, setPage] = useState(1)
  const paginationQuantity = usePaginationItemQuantity()

  const getCharacters = useCallback(() => paginationQuantity && CharactersService.listCharacters({ page, paginationQuantity }), [page, paginationQuantity])
  const { isFetching, error, data: { results: characters = [], meta = {} } = {} } = usePaginatedQuery(['characters', { page, paginationQuantity }], getCharacters)

  return {
    isFetching,
    error,
    characters,
    page,
    setPage,
    meta
  }
}
