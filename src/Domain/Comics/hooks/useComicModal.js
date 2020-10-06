import { ComicsService } from 'Core/Services/Comics'
import { useCallback, useMemo, useState } from 'react'
import { usePaginatedQuery } from 'react-query'
import { usePaginationItemQuantity } from 'Shared/hooks/usePaginationItemQuantity'

const quantities = { onDesktop: 6, onTablet: 6, onPhone: 4 }

export const useComicModal = () => {
  const [ísModalVisible, setModalVisibility] = useState(false)
  const [data, setModalData] = useState({})
  const paginationQuantity = usePaginationItemQuantity(quantities)

  const closeModal = () => setModalVisibility(false)
  const openModal = (data) => {
    setModalData(data)
    setModalVisibility(true)
  }

  const comicId = useMemo(() => data && data.id, [data])

  const getCharacters = useCallback(() => comicId && paginationQuantity && ComicsService.listComicCharacters(comicId, { paginationQuantity }), [comicId, paginationQuantity])
  const { resolvedData: { results: characters = [] } = {} } = usePaginatedQuery(['comic-characters', { comicId, paginationQuantity }], getCharacters, { refetchOnWindowFocus: false })

  return {
    ísModalVisible,
    characters,
    data,
    closeModal,
    openModal
  }
}
