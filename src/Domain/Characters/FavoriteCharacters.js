/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'
import { Button } from 'Components/Button/Button'
import { H1 } from 'Components/Headings/Headings'
import { untilTabletPortrait } from 'Shared/style/mediaQueries'
import { useCharacterModal } from './hooks/useCharacterModal'
import { useFavoriteCharacters } from './hooks/useFavoriteCharacters'
import { CharactersList } from './List/CharactersList'
import { CharacterModal } from './Modal/Modal'

const flex = css`
  display: flex;

  ${untilTabletPortrait}{
    flex-direction: column;
  }
`
const marginLeftAuto = css`
  margin-left: auto;
  ${untilTabletPortrait}{
    margin: 5px 0;
    font-size: 14px;
  }
`

export const FavoriteCharacters = () => {
  const { favoriteCharacters, isCharacterFavorite, changeFavoriteCharacters, clearFavoriteCharacters } = useFavoriteCharacters()
  const { ísModalVisible, data, closeModal, openModal } = useCharacterModal()

  return (
    <>
      <div css={flex}>
        <H1>
          Favorite Characters
        </H1>

        <Button css={marginLeftAuto} onClick={clearFavoriteCharacters}>
          Remove all favorite characters
        </Button>
      </div>
      <CharactersList
        characters={favoriteCharacters}
        onCharacterClick={openModal}
        isCharacterFavorite={isCharacterFavorite}
        changeFavoriteCharacters={changeFavoriteCharacters}
      />
      <CharacterModal
        isVisible={ísModalVisible}
        onModalClose={closeModal}
        data={data}
      />
    </>
  )
}
