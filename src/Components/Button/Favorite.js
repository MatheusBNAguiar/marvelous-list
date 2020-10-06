/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { appColors } from 'Shared/style/colors'

const favoriteButton = css`
    border: 2px solid ${appColors.primary};
    box-sizing: border-box;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.3);

    i {
        font-size: 18px;
        color: white;
    }

    &:hover{
        background-color: ${appColors.secondary};
    }
`

const favoriteSelectedButton = css`
    background-color: ${appColors.secondary};

    &:before,
    &:after{
        content: "";
        position: absolute;
        background-color: ${appColors.white};
        width: 30px;
        height: 30px;
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
        width: 23px;
        height: 23px;
    }
`

export const FavoriteButton = ({
  isFavorite = false,
  ...props
}) => (
  <span
    css={[favoriteButton, isFavorite && favoriteSelectedButton]}
    role='button'
    {...props}
  >
    <i className={`icon ${isFavorite ? 'icon-star-full' : 'icon-star-empty'}`} />
  </span>
)
