import { useEffect, useState } from 'react'
import { useWindowSize } from './useWindowSize'

export const usePaginationItemQuantity = () => {
  const { width } = useWindowSize()
  const [isPaginationAlreadySet, setPaginationState] = useState(false)
  const [paginationQuantity, setPaginationQuantity] = useState()

  useEffect(() => {
    if (width && !isPaginationAlreadySet) {
      setPaginationState(true)
      // Only running one time, to avoid any recalculations if the user only resizes its screen or rotate his cellphone
      if (width >= 1024) {
        setPaginationQuantity(30)
      } else if (width > 420) {
        setPaginationQuantity(20)
      } else {
        setPaginationQuantity(10)
      }
    }
  }, [width, isPaginationAlreadySet])

  return paginationQuantity
}
