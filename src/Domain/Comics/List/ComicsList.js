/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'
import { untilTabletPortrait, untilPhone, untilTabletLandscape } from 'Shared/style/mediaQueries'
import { ComicListItem } from './ComicListItem'

const comicListContainer = css`
  display: grid; 
  grid-template-columns: repeat(4, 1fr);

  ${untilTabletLandscape}{
    grid-template-columns: repeat(3, 1fr);
  }

  ${untilTabletPortrait}{
    grid-template-columns: repeat(2, 1fr);
  }

  ${untilPhone}{
    grid-template-columns: 1fr;
  }
`

export const ComicsList = ({
  comics = [],
  onItemClick
}) => {
  return (
    <div css={comicListContainer}>
      {
        comics.map((comic) => (
          <ComicListItem
            key={comic.id}
            id={comic.id}
            name={comic.name}
            imageIsNotAvailable={comic.imageIsNotAvailable}
            image={comic.image}
            summary={comic.summary}
            onItemClick={() => onItemClick(comic)}
          />
        ))
      }
    </div>
  )
}
