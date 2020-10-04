/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from '@emotion/core'
import { H1 } from 'Components/Headings/Headings'
import { useCharacters } from './hooks/useCharacters'
import { useFavoriteCharacters } from './hooks/useFavoriteCharacters'
import { CharactersList } from './List/CharactersList'

export const Characters = () => {
  const { characters } = useCharacters()
  const { isCharacterFavorite, changeFavoriteCharacters } = useFavoriteCharacters()
  return (
    <>
      <H1>
        Characters
      </H1>
      <CharactersList
        characters={characters}
        isCharacterFavorite={isCharacterFavorite}
        changeFavoriteCharacters={changeFavoriteCharacters}
      />
    </>
  )
}
