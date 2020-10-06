/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { H3 } from 'Components/Headings/Headings'
import { ListItemContainer, ListItemHighlight } from 'Components/ListItem/ListItemCard'
import { ListItemImage, ListItemImageContainer } from 'Components/ListItem/ListItemImage'
import { untilPhone, untilTabletLandscape } from 'Shared/style/mediaQueries'

const genericListContainer = css`
  margin: 15px 0;
`

const genericListItemContainer = css`
    margin-bottom:15px;
    display: grid; 
    grid-template-columns: repeat(6, 1fr);

    ${untilTabletLandscape}{
        grid-template-columns: repeat(3, 1fr);
    }

    ${untilPhone}{
        grid-template-columns: repeat(2, 1fr);
    }
`

export const GenericList = ({
  title = '',
  items = []
}) => {
  if (!items.length) {
    return null
  }
  return (
    <div css={genericListContainer}>
      <H3>
        {title}
      </H3>

      <div css={genericListItemContainer}>
        {
          items.map(item => (
            <ListItemContainer key={item.id}>
              <ListItemImageContainer>
                <ListItemImage
                  src={item.image}
                  alt={item.imageIsNotAvailable ? 'Image was not found' : item.name}
                />
              </ListItemImageContainer>
              <ListItemHighlight>
                {item.name}
              </ListItemHighlight>
            </ListItemContainer>
          ))
        }
      </div>
    </div>
  )
}
