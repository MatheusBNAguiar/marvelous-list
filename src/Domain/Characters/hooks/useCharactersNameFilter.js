import { useEffect, useState } from 'react'
import { useDebounce } from 'Shared/hooks/useDebounce'

const onChangeSet = (stateSetter) => (event) => stateSetter(event.target.value)

export const useCharactersNameFilter = () => {
  const [inputName, setInputName] = useState('')
  const [selectName, setSelectName] = useState('')

  const onInputChange = onChangeSet(setInputName)
  const onSelectChange = onChangeSet(setSelectName)

  useEffect(() => {
    if (inputName) {
      setSelectName('')
    }
  }, [inputName])

  useEffect(() => {
    if (selectName) {
      setInputName('')
    }
  }, [selectName])

  const characterStartsWith = useDebounce(inputName || selectName, 500)

  return {
    inputName,
    selectName,
    onInputChange,
    characterStartsWith,
    onSelectChange
  }
}
