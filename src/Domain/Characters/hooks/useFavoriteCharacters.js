import { useCallback, useEffect, useMemo, useState } from 'react'
import { localStorageAdapter } from 'Shared/utils/localStorage'

const localStorageKey = 'favoriteCharacters'

const buildDateString = () => (new Date()).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })

export const useFavoriteCharacters = () => {
  const [favoriteCharacters, setFavoriteCharacters] = useState(() => localStorageAdapter.get(localStorageKey) || [])

  const favoriteCharactersIds = useMemo(() => favoriteCharacters.map(({ id }) => id), [favoriteCharacters])
  const isCharacterFavorite = useCallback((id) => favoriteCharactersIds.includes(id), [favoriteCharactersIds])

  const changeFavoriteCharacters = useCallback((character) => {
    const { id } = character
    if (isCharacterFavorite(id)) {
      setFavoriteCharacters(previous => previous.filter(({ id: characterId }) => characterId !== id))
    } else {
      setFavoriteCharacters(previous => previous.concat({ ...character, date: buildDateString() }).sort((a, b) => a.name.localeCompare(b.name)))
    }
  }, [isCharacterFavorite])

  const clearFavoriteCharacters = () => setFavoriteCharacters([])

  useEffect(() => {
    localStorageAdapter.set(localStorageKey, favoriteCharacters || [])
  }, [favoriteCharacters])

  return {
    favoriteCharacters,
    isCharacterFavorite,
    clearFavoriteCharacters,
    changeFavoriteCharacters
  }
}
