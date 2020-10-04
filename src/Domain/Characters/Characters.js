/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from '@emotion/core'
import { H1 } from 'Components/Headings/Headings'
import { Pagination } from 'Components/Pagination/Pagination'
import { PaginationContainer } from 'Components/Pagination/PaginationContainer'
import { useCharacters } from './hooks/useCharacters'
import { useFavoriteCharacters } from './hooks/useFavoriteCharacters'
import { CharactersList } from './List/CharactersList'

export const Characters = () => {
  const { characters, meta, page, setPage } = useCharacters()
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
      <PaginationContainer>
        <Pagination
          quantity={meta.pages}
          active={page}
          onChange={setPage}
        />
      </PaginationContainer>
    </>
  )
}
