import { useCallback, useMemo, useState } from 'react'

export const useFavoriteCharacters = () => {
  const [favoriteCharacters, setFavoriteCharacters] = useState([])

  const favoriteCharactersIds = useMemo(() => favoriteCharacters.map(({ id }) => id), [favoriteCharacters])
  const isCharacterFavorite = useCallback((id) => favoriteCharactersIds.includes(id), [favoriteCharactersIds])

  const changeFavoriteCharacters = useCallback((character) => {
    const { id } = character
    if (isCharacterFavorite(id)) {
      setFavoriteCharacters(previous => previous.filter(({ id: characterId }) => characterId !== id))
    } else {
      setFavoriteCharacters(previous => previous.concat(character))
    }
  }, [isCharacterFavorite])

  return {
    favoriteCharactersIds,
    isCharacterFavorite,
    changeFavoriteCharacters
  }
}
