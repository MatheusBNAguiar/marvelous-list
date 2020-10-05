/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState, useEffect } from 'react'

const hideImage = css`
  visibility: hidden !important; 
`

export const Image = ({ src, alt, ...props }) => {
  const [imageSrc, setImageSrc] = useState('')
  const [isImageLoaded, setImageLoadState] = useState(false)
  const [imageRef, setImageRef] = useState()

  const onLoad = () => {
    setImageLoadState(true)
  }

  useEffect(() => {
    let observer
    let didCancel = false

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src)
                observer.unobserve(imageRef)
              }
            })
          },
          {
            threshold: 0.01,
            rootMargin: '75%'
          }
        )
        observer.observe(imageRef)
      } else {
        setImageSrc(src)
      }
    }
    return () => {
      didCancel = true
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef)
      }
    }
  }, [src, imageSrc, imageRef])

  return (
    <img
      css={!isImageLoaded && hideImage}
      loading='lazy'
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      onLoad={onLoad}
      {...props}

    //   onLoad={onLoad}
    //   onError={onError}
    />
  )
}
