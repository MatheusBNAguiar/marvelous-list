/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'
import { characterImageContainer, characterName, characterImage, characterCard, characterImageAsCover } from './CharactersListItem.style'
import { untilTabletLandscape, untilTabletPortrait, untilPhone } from 'Shared/style/mediaQueries'

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

const CharacterListItem = ({
  image,
  name,
  imageIsNotAvailable = false
}) => {
  return (
    <div css={characterCard}>
      <div css={characterImageContainer}>
        <img
          css={[characterImage, !imageIsNotAvailable && characterImageAsCover]}
          src={image}
          alt={imageIsNotAvailable ? 'Image was not found to this character' : name}
        />
      </div>
      <div css={characterName} data-comp='lname'>
        {name}
      </div>
    </div>
  )
}

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
