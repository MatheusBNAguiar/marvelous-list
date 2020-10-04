/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { appColors } from 'Shared/style/colors'

export const button = css`
    border: 0;
    background-color: ${appColors.secondary};
    color: ${appColors.white};
    border-radius: 15px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    outline: none;

    &:hover{
        transform: scale(1.02);
    }
`

export const Button = (props) => <button css={button} {...props} />
