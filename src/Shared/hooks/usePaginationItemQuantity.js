import { useEffect, useState } from 'react'
import { useWindowSize } from './useWindowSize'

export const usePaginationItemQuantity = (quantities = {}) => {
  const { width } = useWindowSize()
  const [isPaginationAlreadySet, setPaginationState] = useState(false)
  const [paginationQuantity, setPaginationQuantity] = useState()

  useEffect(() => {
    if (width && !isPaginationAlreadySet) {
      const { onDesktop = 30, onTablet = 20, onPhone = 10 } = quantities
      setPaginationState(true)
      // Only running one time, to avoid any recalculations if the user only resizes its screen or rotate his cellphone
      if (width >= 1024) {
        setPaginationQuantity(onDesktop)
      } else if (width > 420) {
        setPaginationQuantity(onTablet)
      } else {
        setPaginationQuantity(onPhone)
      }
    }
  }, [width, isPaginationAlreadySet, quantities])

  return paginationQuantity
}
