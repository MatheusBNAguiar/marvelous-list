/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'
import { H1, H3 } from 'Components/Headings/Headings'
import { PaginationContainer } from 'Components/Pagination/PaginationContainer'
import { CharacterNameFilter } from './Filter/NameFilter'
import { CharactersList } from './List/CharactersList'

import { useCharacters } from './hooks/useCharacters'
import { useCharacterModal } from './hooks/useCharacterModal'
import { useCharactersNameFilter } from './hooks/useCharactersNameFilter'
import { useFavoriteCharacters } from './hooks/useFavoriteCharacters'
import { CharacterModal } from './Modal/Modal'
import { appColors } from 'Shared/style/colors'

const noDataContainer = css`
  background-color: ${appColors.primary};
  padding: 30px;
  text-align: center;
  margin-top: 10px;
  border-radius: 20px;
  color: ${appColors.white};
`

export const Characters = () => {
  const { inputName, selectName, onInputChange, characterStartsWith, onSelectChange } = useCharactersNameFilter()
  const { isFetching, characters, meta, page, setPage } = useCharacters(characterStartsWith)
  const { isCharacterFavorite, changeFavoriteCharacters } = useFavoriteCharacters()
  const { ísModalVisible, data, closeModal, openModal, comics } = useCharacterModal()

  return (
    <>
      <H1>
        Characters
      </H1>
      <CharacterNameFilter
        inputName={inputName}
        selectName={selectName}
        onInputChange={onInputChange}
        onSelectChange={onSelectChange}
      />
      {
        characters.length === 0 && !isFetching && (
          <div css={noDataContainer}>
            <H3>
              There are no results for this search
            </H3>
          </div>
        )
      }
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
        comics={comics}
      />
    </>
  )
}
