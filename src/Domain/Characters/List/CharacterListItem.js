/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from '@emotion/core'
import { characterImageContainer, characterName, characterImage, characterCard, characterImageAsCover, favoriteButton, favoriteSelectedButton } from './CharactersListItem.style'

export const CharacterListItem = ({
  image,
  name,
  imageIsNotAvailable = false,
  isFavorite = false,
  onFavoriteClick = x => x,
  children
}) => {
  return (
    <div css={characterCard}>
      <span
        css={[favoriteButton, isFavorite && favoriteSelectedButton]}
        role='button'
        onClick={onFavoriteClick}
        title={`${isFavorite ? 'Unmark' : 'Mark'} ${name} as your favorite character`}
      >
        <i className={`icon ${isFavorite ? 'icon-star-full' : 'icon-star-empty'}`} />
      </span>
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
