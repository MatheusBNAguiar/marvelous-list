/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'
import { untilTabletLandscape, untilTabletPortrait, untilPhone } from 'Shared/style/mediaQueries'
import { CharacterListItem } from './CharacterListItem'

const characterListContainer = css`
  display: grid; 
  grid-template-columns: repeat(5, 1fr);

  ${untilTabletLandscape}{
    grid-template-columns: repeat(4, 1fr);
  }

  ${untilTabletPortrait}{
    grid-template-columns: repeat(2, 1fr);
  }

  ${untilPhone}{
    grid-template-columns: 1fr;
  }
`

export const CharactersList = ({
  characters = [],
  onCharacterClick = x => x,
  isCharacterFavorite = x => x,
  changeFavoriteCharacters = x => x
}) => {
  const onFavoriteClick = (character) => event => {
    event.preventDefault()
    event.stopPropagation()
    changeFavoriteCharacters(character)
  }

  return (
    <div css={characterListContainer}>
      {
        characters.map((character) => (
          <CharacterListItem
            key={character.id}
            id={character.id}
            name={character.name}
            date={character.date}
            imageIsNotAvailable={character.imageIsNotAvailable}
            image={character.image}
            isFavorite={isCharacterFavorite(character.id)}
            onCharacterClick={() => onCharacterClick(character)}
            onFavoriteClick={onFavoriteClick(character)}
          />
        ))
      }
    </div>
  )
}
