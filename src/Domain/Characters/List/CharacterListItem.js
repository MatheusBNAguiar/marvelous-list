/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'
import { FavoriteButton } from 'Components/Button/Favorite'
import { ListItemContainer, ListItemHighlight } from 'Components/ListItem/ListItemCard'
import { ListItemImage, ListItemImageContainer } from 'Components/ListItem/ListItemImage'
import { characterImageAsCover } from './CharactersListItem.style'

const characterFavoriteDate = css`
  margin-top: 10px;
  font-size: 12px;
  font-weight: normal;
`

export const CharacterListItem = ({
  image,
  name,
  imageIsNotAvailable = false,
  isFavorite = false,
  onFavoriteClick = x => x,
  date = '',
  children
}) => {
  return (
    <ListItemContainer>
      <FavoriteButton
        isFavorite={isFavorite}
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
      <ListItemHighlight>
        {name}
        <div css={characterFavoriteDate}>
          <i className='icon icon-star-full' />
          {date}
        </div>
      </ListItemHighlight>
      {children}
    </ListItemContainer>
  )
}
