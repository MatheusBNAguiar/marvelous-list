/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'
import { ListItemContainer, ListItemHighlight } from 'Components/ListItem/ListItemCard'
import { ListItemImage, ListItemImageContainer } from 'Components/ListItem/ListItemImage'
import { NavLink } from 'react-router-dom'
import { untilTabletPortrait, untilTabletLandscape } from 'Shared/style/mediaQueries'

const homeCard = css`
    ${untilTabletPortrait}{
        max-width: 350px;
        margin-left: auto;
        margin-right: auto;
    }
`

const imageContainer = css`
    height: 600px;

    ${untilTabletLandscape}{
        height: 400px;
    }
`

const homeCardTitle = css`
    font-size: 28px;
    text-align: center;
    font-family: 'Roboto Condensed';
    margin-bottom: 10px;
`

const homeCardText = css`
    font-size: 14px;
    text-align: center;
    font-weight: normal;
`

export const HomeCard = ({
  title,
  text,
  to = '',
  image
}) => (
  <NavLink to={to}>
    <ListItemContainer css={homeCard}>
      <ListItemImageContainer css={imageContainer}>
        <ListItemImage src={image} />
        <ListItemHighlight>
          <div css={homeCardTitle}>
            {title}
          </div>
          <div css={homeCardText}>
            {text}
          </div>
        </ListItemHighlight>
      </ListItemImageContainer>
    </ListItemContainer>
  </NavLink>
)
