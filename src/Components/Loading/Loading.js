/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useEffect, useRef } from 'react'
import { appColors } from 'Shared/style/colors'

const loadingContainer = css`
    position: absolute;
    top: 0;
    left: 0;
    z-index:5;
    height: 100%;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 15px;
    background-color: rgba(0,0,0,0.5);
`

const loadingContent = css`
    font-size: 40px;
    color: ${appColors.white};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`

const captainAmericaShield = css`
    border: 2px solid ${appColors.primary};
    box-sizing: border-box;
    border-radius: 50%;
    margin-top: 15px;
    width: 120px;
    height: 120px;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${appColors.secondary};
    animation: rotating 1s linear infinite;

    i {
        font-size: 40px;
        color: white;
    }

    &:before,
    &:after{
        content: "";
        position: absolute;
        background-color: ${appColors.white};
        width: 100px;
        height: 100px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        border-radius: 50%;
        z-index: -1;
    }

    &:after{
        background-image: linear-gradient(#0846A8,#277AFF,#0846A8);
        width: 70px;
        height: 70px;
    }

    @keyframes rotating {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
`

export const Loading = ({
  isLoading = false,
  loadingMessage = 'Loading...'
}) => {
  const messageRef = useRef()

  useEffect(() => {
    if (isLoading) {
      messageRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }, [isLoading])

  if (isLoading) {
    return (
      <div css={loadingContainer}>
        <div css={loadingContent} ref={messageRef}>
          {loadingMessage}
          <div css={captainAmericaShield}>
            <i className='icon icon-star-full' />
          </div>
        </div>
      </div>
    )
  }
  return null
}
