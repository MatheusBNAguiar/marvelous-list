import { useState, useEffect } from 'react'

/**
 * Delay the return of a certain value after the last interaction with this value
 * @param { T } value The value that will be delayed to be shown
 * @param { Number } delay The time that will last to return the value
 * @return { T }
 * @template T
 */
export function useDebounce (value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
      return () => {
        clearTimeout(handler)
      }
    },
    [value, delay]
  )

  return debouncedValue
}
