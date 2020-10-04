import { CharactersService } from 'Core/Services/Characters'
import { useEffect, useState } from 'react'
import { usePaginationItemQuantity } from 'Shared/hooks/usePaginationItemQuantity'

export const useCharacters = () => {
  const [page, setPage] = useState(1)
  const [characters, setCharacters] = useState([])
  const [meta, setMeta] = useState({})
  const paginationQuantity = usePaginationItemQuantity()

  useEffect(() => {
    if (page && paginationQuantity) {
      CharactersService.listCharacters({ page, paginationQuantity }).then(({ results = [], meta = {} }) => {
        setCharacters(results)
        setMeta(meta)
      })
    }
  }, [paginationQuantity, page])

  return {
    characters,
    page,
    setPage,
    meta
  }
}
