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

export const CharactersList = ({ characters = [] }) => {
  return (
    <div css={characterListContainer}>
      {
        characters.map((character) => (
          <CharacterListItem
            key={character.id}
            id={character.id}
            name={character.name}
            imageIsNotAvailable={character.imageIsNotAvailable}
            image={character.image}
          />
        ))
      }
    </div>
  )
}