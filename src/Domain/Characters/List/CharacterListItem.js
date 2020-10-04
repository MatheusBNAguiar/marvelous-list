/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from '@emotion/core'
import { FavoriteButton } from 'Components/Button/Favorite'
import { ListItemImage, ListItemImageContainer } from 'Components/ListItem/ListItemImage'
import { characterName, characterCard, characterImageAsCover } from './CharactersListItem.style'

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
      <FavoriteButton
        onClick={onFavoriteClick}
        title={`${isFavorite ? 'Unmark' : 'Mark'} ${name} as your favorite character`}
      />
      <ListItemImageContainer>
        <ListItemImage
          css={!imageIsNotAvailable && characterImageAsCover}
          src={image}
          alt={imageIsNotAvailable ? 'Image was not found to this character' : name}
        />
      </ListItemImageContainer>
      <div css={characterName} data-comp='lname'>
        {name}
      </div>
      {children}
    </div>
  )
}
