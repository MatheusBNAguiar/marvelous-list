import { css } from '@emotion/core'
import { appColors } from 'Shared/style/colors'

export const comicImageAsCover = css`
    object-fit: cover;
`

export const comicImageContainer = css`
    height: 400px;
`

export const comicName = css`
    background-color: ${appColors.primary};
    height: 70px;
    font-weight: bold;
    color: ${appColors.white};
    box-sizing: border-box;
    padding: 15px;
    text-align: center;
    overflow: hidden;
`
