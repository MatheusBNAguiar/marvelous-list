/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from '@emotion/core'
import { H1 } from 'Components/Headings/Headings'
import { PaginationContainer } from 'Components/Pagination/PaginationContainer'
import { useComics } from './hooks/useComics'
import { ComicsList } from './List/ComicsList'

export const Comics = () => {
  const { isFetching, comics, meta, page, setPage } = useComics()

  return (
    <>
      <H1>
        Comics
      </H1>
      <PaginationContainer
        isFetching={isFetching}
        quantity={meta.pages}
        active={page}
        onPaginationChange={setPage}
      >
        <ComicsList comics={comics} />
      </PaginationContainer>
    </>
  )
}
