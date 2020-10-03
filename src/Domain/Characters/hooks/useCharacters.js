import { CharactersService } from 'Core/Services/Characters'
import { useEffect, useState } from 'react'

export const useCharacters = () => {
  const [characters, setCharacters] = useState([])
  const [meta, setMeta] = useState({})

  useEffect(() => {
    CharactersService.listCharacters().then(({ results = [], meta = {} }) => {
      setCharacters(results)
      setMeta(meta)
    })
  }, [])

  return {
    characters,
    meta
  }
}
