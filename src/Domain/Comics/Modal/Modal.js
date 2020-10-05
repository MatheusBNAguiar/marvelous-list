/** @jsx jsx */
import { jsx } from '@emotion/core'
import { H1 } from 'Components/Headings/Headings'
import { ListItemContainer, ListItemHighlight } from 'Components/ListItem/ListItemCard'
import { ListItemImage, ListItemImageContainer } from 'Components/ListItem/ListItemImage'
import { Modal } from 'Components/Modal/Modal'
import { ComicItemSummary } from '../List/ComicListItem'
import { descritiveInfo, infoContainer, summaryItemLabel, comicImageContainer, comicImageAsCover, comicDescription } from './Modal.style'

export const ComicSummaryItem = ({ iconType = '', quantity = 0, title = '' }) => quantity ? (
  <span css={summaryItemLabel} title={title}>
    <i className={`icon icon-${iconType}`} />
    {title} {quantity}
  </span>
) : null

const ComicSummary = ({ summary = {} }) => {
  const { characterCount, storyCount, pageCount } = summary
  return (
    <div>
      <ComicSummaryItem title='Characters' iconType='cool' quantity={characterCount} />
      <ComicSummaryItem title='Stories' iconType='book' quantity={storyCount} />
      <ComicSummaryItem title='Pages' iconType='file-text2' quantity={pageCount} />
    </div>
  )
}

export const ComicModal = ({
  isVisible = false,
  data = {},
  onModalClose
}) => {
  const { name, summary, image, imageIsNotAvailable, description } = data
  return (
    <Modal isVisible={isVisible} onModalClose={onModalClose}>
      <div css={infoContainer}>
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
        </ListItemContainer>
        <div css={descritiveInfo}>
          <H1>{name}</H1>
          <div css={comicDescription}>
            {description || 'No description for this comic'}
          </div>
          <ComicSummary summary={summary} />
        </div>
      </div>
    </Modal>
  )
}
