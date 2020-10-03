import { css } from '@emotion/core'

export const characterCard = css`
    position: relative;
    margin: 10px 15px;
    cursor: pointer;
`

export const characterImageContainer = css`
    height: 220px;
    width: 100%;
    overflow: hidden;
    position: relative;
`

export const characterImage = css`
    display: block;
    margin: 0;
    object-position: center center;
    padding: 0;
    width: 100%;
    height: 100%;
`

export const characterName = css`
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    font-weight: bold;
    color: white;
    z-index: 1;
    font-size: 18px;
    background-color: rgba(0,0,0, 0.5);
`

export const characterImageAsCover = css`
    object-fit: cover;
`
