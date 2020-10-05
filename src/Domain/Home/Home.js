/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'
import { H1, H4 } from 'Components/Headings/Headings'
import { afterTabletLandscape, untilTabletPortrait } from 'Shared/style/mediaQueries'

import civilWar from 'Shared/imgs/civil-war.jpeg'
import newAvengers from 'Shared/imgs/new-avengers.jpeg'
import spiderman from 'Shared/imgs/spiderman.jpeg'
import { HomeCard } from './HomeCard'

const heading = css`
    text-align: center;

    ${afterTabletLandscape}{
        font-size: 40px;
    }
`

const subHheading = css`
    text-align: center;

    ${afterTabletLandscape}{
        font-size: 28px;
    }
`

const cardsContainer = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    ${untilTabletPortrait}{
        grid-template-columns: 1fr;
    }
`

export const Home = () => {
  return (
    <>
      <H1 css={heading}>
        The House of Ideas
      </H1>
      <H4 css={subHheading}>
        All of our best stories presented to you
      </H4>
      <H4 css={subHheading}>
        Welcome back home!
      </H4>
      <div css={cardsContainer}>
        <HomeCard
          title='Your Heroes'
          text='The heroes that you live up to love'
          image={spiderman}
          to='/characters'
        />
        <HomeCard
          title='Your Comics'
          text='The stories that you live up to remember'
          image={civilWar}
          to='/comics'
        />
        <HomeCard
          title='Your Favorites'
          text='The heroes that you live up to be'
          image={newAvengers}
          to='/favorites'
        />
      </div>
    </>
  )
}
