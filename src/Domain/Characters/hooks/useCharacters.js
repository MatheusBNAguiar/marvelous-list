import { CharactersService } from 'Core/Services/Characters'
import { useCallback, useEffect, useState } from 'react'
import { usePaginationItemQuantity } from 'Shared/hooks/usePaginationItemQuantity'
import { usePaginatedQuery } from 'react-query'

export const useCharacters = (characterStartsWith = '') => {
  const [page, setPage] = useState(1)
  const paginationQuantity = usePaginationItemQuantity()

  useEffect(() => {
    if (characterStartsWith) {
      setPage(1)
    }
  }, [characterStartsWith])

  const getCharacters = useCallback(() => paginationQuantity && CharactersService.listCharacters({ page, paginationQuantity, characterStartsWith }), [page, paginationQuantity, characterStartsWith])
  const { isFetching, error, resolvedData: { results: characters = [], meta = {} } = {} } = usePaginatedQuery(['characters', { page, paginationQuantity, characterStartsWith }], getCharacters)

  return {
    isFetching,
    error,
    characters,
    page,
    setPage,
    meta
  }
}
