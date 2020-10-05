import { css } from '@emotion/core'
import { untilTabletLandscape, untilTabletPortrait } from 'Shared/style/mediaQueries'

export const characterImageAsCover = css`
    object-fit: cover;
`

export const characterImageContainer = css`
    height: 300px;

    ${untilTabletPortrait}{
        height: 200px;
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

export const characterDescription = css`
    font-size: 16px;
    margin-bottom: 15px;
`
