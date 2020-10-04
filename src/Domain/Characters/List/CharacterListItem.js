/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from '@emotion/core'
import { characterImageContainer, characterName, characterImage, characterCard, characterImageAsCover } from './CharactersListItem.style'

export const CharacterListItem = ({
  image,
  name,
  imageIsNotAvailable = false,
  children
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
      {children}
    </div>
  )
}
