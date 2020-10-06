/** @jsx jsx */
import { jsx } from '@emotion/core'
import { H1 } from 'Components/Headings/Headings'
import { ListItemContainer } from 'Components/ListItem/ListItemCard'
import { ListItemImage, ListItemImageContainer } from 'Components/ListItem/ListItemImage'
import { Modal } from 'Components/Modal/Modal'
import { SummaryPill } from 'Components/Pill/Pill'
import { descritiveInfo, infoContainer, characterImageContainer, characterImageAsCover, characterDescription } from './Modal.style'

const CharacterSummary = ({ summary = {} }) => {
  const { comicsCount, seriesCount, storiesCount, eventsCount } = summary
  return (
    <div>
      <SummaryPill title='Comics' iconType='cool' quantity={comicsCount} />
      <SummaryPill title='Stories' iconType='book' quantity={storiesCount} />
      <SummaryPill title='Series' iconType='file-text2' quantity={seriesCount} />
      <SummaryPill title='Events' iconType='clock' quantity={eventsCount} />
    </div>
  )
}

export const CharacterModal = ({
  isVisible = false,
  data = {},
  onModalClose
}) => {
  const { name, summary, image, imageIsNotAvailable, description } = data
  return (
    <Modal isVisible={isVisible} onModalClose={onModalClose}>
      <div css={infoContainer}>
        <ListItemContainer>
          <ListItemImageContainer css={characterImageContainer}>
            <ListItemImage
              css={[!imageIsNotAvailable && characterImageAsCover]}
              src={image}
              alt={imageIsNotAvailable ? 'Image was not found to this character' : name}
            />
          </ListItemImageContainer>
        </ListItemContainer>
        <div css={descritiveInfo}>
          <H1>{name}</H1>

          <div css={characterDescription}>
            {description || 'No description for this character'}
          </div>
          <CharacterSummary summary={summary} />
        </div>
      </div>
    </Modal>
  )
}
