/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'
import { useEffect, useRef } from 'react'
import { appColors } from 'Shared/style/colors'
import { untilPhone } from 'Shared/style/mediaQueries'

const modal = css`
    padding: 50px 25px 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 1268px;
    z-index: 10;
    width: 100%;
    background-color: ${appColors.primary};
    margin: auto;
    color: ${appColors.white};
    box-sizing: border-box;
`

const closeIcon = css`
    position: absolute;
    border-radius: 50%;
    top: 20px;
    right: 20px;
    font-size: 24px;
    color: ${appColors.white};
    cursor: pointer;
`

const modalContent = css`
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    overflow: auto;
    max-height: 75vh;

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: #BABABA;
      border-radius: 5px;
    }

    ${untilPhone}{
        max-height: 85vh;
    }

`

export const Modal = ({
  isVisible = true,
  onModalClose = x => x,
  children,
  ...props
}) => {
  const reference = useRef()

  useEffect(() => {
    const handleClickOutside = e => {
      if (reference.current.contains(e.target)) {
        return
      }
      onModalClose()
    }
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    // eslint-disable-next-line
  }, [isVisible, reference])

  if (!isVisible) {
    return null
  }

  return (
    <div css={modal} ref={reference} {...props}>
      <span onClick={onModalClose} className='icon icon-cross' css={closeIcon} role='button' />
      <div css={modalContent}>
        {children}
      </div>
    </div>
  )
}
