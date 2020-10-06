import { CharactersService } from 'Core/Services/Characters'
import { useCallback, useMemo, useState } from 'react'
import { usePaginatedQuery } from 'react-query'
import { usePaginationItemQuantity } from 'Shared/hooks/usePaginationItemQuantity'

const quantities = { onDesktop: 6, onTablet: 6, onPhone: 4 }

export const useCharacterModal = () => {
  const [ísModalVisible, setModalVisibility] = useState(false)
  const [data, setModalData] = useState({})
  const paginationQuantity = usePaginationItemQuantity(quantities)

  const closeModal = () => setModalVisibility(false)
  const openModal = (data) => {
    setModalData(data)
    setModalVisibility(true)
  }

  const characterId = useMemo(() => data && data.id, [data])

  const getComics = useCallback(() => characterId && paginationQuantity && CharactersService.listCharacterComics(characterId, { paginationQuantity }), [characterId, paginationQuantity])
  const { isFetching: isFetchingComics, resolvedData: { results: comics = [] } = {} } = usePaginatedQuery(['character-comics', { characterId, paginationQuantity }], getComics, { refetchOnWindowFocus: false })

  return {
    ísModalVisible,
    data,
    comics,
    isFetchingComics,
    closeModal,
    openModal
  }
}
