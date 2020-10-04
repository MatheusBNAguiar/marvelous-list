import { css } from '@emotion/core'
import { appColors } from 'Shared/style/colors'

export const characterCard = css`
    position: relative;
    margin: 10px 15px;
    cursor: pointer;

    &:hover{
        [data-comp='lname']{
            &::before{
                transform: translate3d(-100%,0,0);
            }
        }
    }
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
    overflow: hidden;

    &:before{
        background: ${appColors.secondary};
        right: 0;
        content: "";
        height: 100%;
        left: 100%;
        position: absolute;
        transition-timing-function: cubic-bezier(1,0,.125,1);
        bottom: 0;
        transition: transform 4s,-webkit-transform .3s;
        width: 100%;
        z-index: -1;
    }
`

export const characterImageAsCover = css`
    object-fit: cover;
`

export const favoriteButton = css`
    border: 2px solid white;
    box-sizing: border-box;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
        font-size: 18px;
        color: white;
    }

    &:hover{
        background-color: ${appColors.secondary};
    }
`

export const favoriteSelectedButton = css`
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