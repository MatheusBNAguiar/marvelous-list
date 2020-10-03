
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { genericContainer } from './Layout.style'
import { ReactComponent as MarvelLogo } from 'Shared/svgs/marvel.svg'
import { appColors } from 'Shared/style/colors'

export const navbarContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 20px;
  background: ${appColors.primary};
  flex: 0 1 auto;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  z-index: 1;
  box-shadow: 0px -2px 6px #00000029;
  z-index: 5;
`

const headerContainer = css`
  ${genericContainer}
  align-items: center;
  place-content: center;
  width: 100%;
`

export const Header = ({ children, ...props }) => (
  <nav {...props} css={[navbarContainer]}>
    <div css={headerContainer}>
      <MarvelLogo />
    </div>
    <div css={headerContainer}>
      {children}
    </div>
  </nav>
)
