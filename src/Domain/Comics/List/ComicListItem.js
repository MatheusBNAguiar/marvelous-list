/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from '@emotion/core'
import { ListItemContainer, ListItemHighlight } from 'Components/ListItem/ListItemCard'
import { ListItemImage, ListItemImageContainer } from 'Components/ListItem/ListItemImage'
import { ListItemSummaryContainer, ListItemSummaryItem } from 'Components/ListItem/ListItemSummary'
import { comicImageAsCover, comicImageContainer, comicName } from './ComicListItem.style'

const ComicItemSummary = ({ summary = {} }) => {
  const { characterCount, storyCount, pageCount } = summary
  return (
    <ListItemSummaryContainer>
      <ListItemSummaryItem title='Characters' iconType='cool' quantity={characterCount} />
      <ListItemSummaryItem title='Stories' iconType='book' quantity={storyCount} />
      <ListItemSummaryItem title='Pages' iconType='clock' quantity={pageCount} />
    </ListItemSummaryContainer>
  )
}

export const ComicListItem = ({
  image,
  name,
  imageIsNotAvailable = false,
  summary = {},
  children
}) => {
  return (
    <ListItemContainer>
      <ListItemImageContainer css={comicImageContainer}>
        <ListItemImage
          css={[!imageIsNotAvailable && comicImageAsCover]}
          src={image}
          alt={imageIsNotAvailable ? 'Image was not found to this comic' : name}
        />
        <ListItemHighlight>
          <ComicItemSummary summary={summary} />
        </ListItemHighlight>
      </ListItemImageContainer>
      <div css={comicName}>
        {name}
      </div>
      {children}
    </ListItemContainer>
  )
}
