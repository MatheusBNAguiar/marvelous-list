/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Image } from 'Components/Image/Image'
import { appColors } from 'Shared/style/colors'

const listImageContainer = css`
    height: 220px;
    width: 100%;
    overflow: hidden;
    position: relative;
    background-color: ${appColors.primary};

    &::after {
      display: block;
      content: '';
      top: 0;
      z-index: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);
      animation: loading 1s linear infinite;
    }


    @keyframes loading {
        0% {
            transform: translateX(-100%);
        }
        25% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(100%);
        }
        75% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    } 
`
const listImage = css`
    display: block;
    margin: 0;
    object-position: center center;
    padding: 0;
    width: 100%;
    top: 0;
    height: 100%;
    position: relative;
    z-index: 1;
`

export const ListItemImage = (props) => (<Image css={listImage} {...props} />)
export const ListItemImageContainer = (props) => <div css={listImageContainer} {...props} />
