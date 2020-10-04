const { useState, useEffect } = require('react')

/**
 * Function used to get window size, it was obtained on https://usehooks.com/useWindowSize/ as a way to make easier the development of this project
 */
export function useWindowSize () {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    function handleResize () {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
