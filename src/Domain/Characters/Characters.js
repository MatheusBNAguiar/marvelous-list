/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from '@emotion/core'
import { PaginationContainer } from 'Components/Pagination/PaginationContainer'
import { useCharacters } from './hooks/useCharacters'
import { useFavoriteCharacters } from './hooks/useFavoriteCharacters'
import { CharactersList } from './List/CharactersList'

export const Characters = () => {
  const { isFetching, characters, meta, page, setPage } = useCharacters()
  const { isCharacterFavorite, changeFavoriteCharacters } = useFavoriteCharacters()

  return (
    <>
      <PaginationContainer
        title='Characters'
        isFetching={isFetching}
        quantity={meta.pages}
        active={page}
        onPaginationChange={setPage}
      >
        <CharactersList
          characters={characters}
          isCharacterFavorite={isCharacterFavorite}
          changeFavoriteCharacters={changeFavoriteCharacters}
        />
      </PaginationContainer>
    </>
  )
}
