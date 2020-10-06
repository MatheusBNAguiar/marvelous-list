/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from '@emotion/core'
import { H1 } from 'Components/Headings/Headings'
import { PaginationContainer } from 'Components/Pagination/PaginationContainer'
import { useComicModal } from './hooks/useComicModal'
import { useComics } from './hooks/useComics'
import { ComicsList } from './List/ComicsList'
import { ComicModal } from './Modal/Modal'

export const Comics = () => {
  const { isFetching, comics, meta, page, setPage } = useComics()
  const { ísModalVisible, data, closeModal, openModal, characters } = useComicModal()

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
        <ComicsList comics={comics} onItemClick={openModal} />
      </PaginationContainer>
      <ComicModal
        isVisible={ísModalVisible}
        onModalClose={closeModal}
        data={data}
        characters={characters}
      />
    </>
  )
}
