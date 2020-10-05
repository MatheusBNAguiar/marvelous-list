import { useState } from 'react'

export const useCharacterModal = () => {
  const [ísModalVisible, setModalVisibility] = useState(false)
  const [data, setModalData] = useState({})

  const closeModal = () => setModalVisibility(false)
  const openModal = (data) => {
    setModalData(data)
    setModalVisibility(true)
  }

  return {
    ísModalVisible,
    data,
    closeModal,
    openModal
  }
}
