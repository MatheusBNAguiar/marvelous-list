/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'
import { Button } from 'Components/Button/Button'
import { H1, H3 } from 'Components/Headings/Headings'
import { NavLink } from 'react-router-dom'
import { appColors } from 'Shared/style/colors'
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

const noFavoritesContainer = css`
  background-color: ${appColors.primary};
  padding: 30px;
  text-align: center;
  margin-top: 10px;
  border-radius: 20px;
  color: ${appColors.white};
`

const navigationButton = css`
  background-color: ${appColors.secondary};
  display: inline-block;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  color: ${appColors.white};
  text-decoration: none;
  font-weight: bold;
`

export const FavoriteCharacters = () => {
  const { favoriteCharacters, isCharacterFavorite, changeFavoriteCharacters, clearFavoriteCharacters } = useFavoriteCharacters()
  const { ísModalVisible, data, closeModal, openModal, comics } = useCharacterModal()

  const onRemoveClick = () => {
    const shouldRemove = window.confirm('Are you sure that you want to clean your favorites list?')
    if (shouldRemove) {
      clearFavoriteCharacters()
    }
  }

  return (
    <>
      <div css={flex}>
        <H1>
          Favorite Characters
        </H1>

        <Button css={marginLeftAuto} onClick={onRemoveClick}>
          Remove all favorite characters
        </Button>
      </div>
      <CharactersList
        characters={favoriteCharacters}
        onCharacterClick={openModal}
        isCharacterFavorite={isCharacterFavorite}
        changeFavoriteCharacters={changeFavoriteCharacters}
      />
      {
        favoriteCharacters.length === 0 && (
          <div css={noFavoritesContainer}>
            <H3>
              There are no favorites saved
            </H3>
            <NavLink to='/characters' css={navigationButton}>
              Check characters
            </NavLink>
          </div>
        )
      }
      <CharacterModal
        isVisible={ísModalVisible}
        onModalClose={closeModal}
        data={data}
        comics={comics}
      />
    </>
  )
}
