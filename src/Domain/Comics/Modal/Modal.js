/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { GenericList } from 'Components/GenericList/GenericList'
import { H1 } from 'Components/Headings/Headings'
import { ListItemContainer, ListItemHighlight } from 'Components/ListItem/ListItemCard'
import { ListItemImage, ListItemImageContainer } from 'Components/ListItem/ListItemImage'
import { Modal } from 'Components/Modal/Modal'
import { SummaryPill } from 'Components/Pill/Pill'
import { ComicItemSummary } from '../List/ComicListItem'
import { descritiveInfo, infoContainer, comicImageContainer, comicImageAsCover, comicDescription } from './Modal.style'

const relatedGrid = css`
  display: grid;
  grid-auto-flow: row;
`

const ComicSummary = ({ summary = {} }) => {
  const { characterCount, storyCount, pageCount } = summary
  return (
    <div>
      <SummaryPill title='Characters' iconType='cool' quantity={characterCount} />
      <SummaryPill title='Stories' iconType='book' quantity={storyCount} />
      <SummaryPill title='Pages' iconType='file-text2' quantity={pageCount} />
    </div>
  )
}

export const ComicModal = ({
  isVisible = false,
  data = {},
  onModalClose,
  characters = []
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

      <div css={relatedGrid}>
        <GenericList
          title='Characters that told us the stories'
          items={characters}
        />
      </div>
    </Modal>
  )
}
