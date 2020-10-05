/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from '@emotion/core'
import { H1 } from 'Components/Headings/Headings'
import { PaginationContainer } from 'Components/Pagination/PaginationContainer'
import { CharacterNameFilter } from './Filter/NameFilter'
import { CharactersList } from './List/CharactersList'

import { useCharacters } from './hooks/useCharacters'
import { useCharacterModal } from './hooks/useCharacterModal'
import { useCharactersNameFilter } from './hooks/useCharactersNameFilter'
import { useFavoriteCharacters } from './hooks/useFavoriteCharacters'
import { CharacterModal } from './Modal/Modal'

export const Characters = () => {
  const { inputName, onInputChange, characterStartsWith, onSelectChange } = useCharactersNameFilter()
  const { isFetching, characters, meta, page, setPage } = useCharacters(characterStartsWith)
  const { isCharacterFavorite, changeFavoriteCharacters } = useFavoriteCharacters()
  const { ísModalVisible, data, closeModal, openModal } = useCharacterModal()

  return (
    <>
      <H1>
        Characters
      </H1>
      <CharacterNameFilter
        inputName={inputName}
        onInputChange={onInputChange}
        onSelectChange={onSelectChange}
      />
      <PaginationContainer
        isFetching={isFetching}
        quantity={meta.pages}
        active={page}
        onPaginationChange={setPage}
      >
        <CharactersList
          characters={characters}
          onCharacterClick={openModal}
          isCharacterFavorite={isCharacterFavorite}
          changeFavoriteCharacters={changeFavoriteCharacters}
        />
      </PaginationContainer>
      <CharacterModal
        isVisible={ísModalVisible}
        onModalClose={closeModal}
        data={data}
      />
    </>
  )
}
