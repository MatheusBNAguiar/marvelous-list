/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from '@emotion/core'
import { H1 } from 'Components/Headings/Headings'
import { useCharacters } from './hooks/useCharacters'
import { CharactersList } from './List/CharactersList'

export const Characters = () => {
  const { characters } = useCharacters()

  return (
    <>
      <H1>
        Characters
      </H1>
      <CharactersList
        characters={characters}
      />
    </>
  )
}
