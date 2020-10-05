import { css } from '@emotion/core'
import { appColors } from 'Shared/style/colors'
import { untilTabletLandscape, untilTabletPortrait } from 'Shared/style/mediaQueries'

export const comicImageAsCover = css`
    object-fit: cover;
`

export const comicImageContainer = css`
    height: 600px;

    ${untilTabletPortrait}{
        height: 400px;
    }
`

export const infoContainer = css`
    display: grid;
    grid-template-columns: 1fr 2fr;

    ${untilTabletLandscape}{
        grid-template-columns: 1fr 1fr;
    }

    ${untilTabletPortrait}{
        grid-template-columns: 1fr;
    }
`

export const descritiveInfo = css`
    padding: 10px;
`

export const summaryItemLabel = css`
    background-color: ${appColors.secondary};
    padding: 5px;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    display: inline-block;

    i{
        margin-right: 5px;
    }
`

export const comicDescription = css`
    font-size: 16px;
    margin-bottom: 15px;
`