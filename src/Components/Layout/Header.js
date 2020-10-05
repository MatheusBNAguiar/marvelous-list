
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { genericContainer } from './Layout.style'
import { ReactComponent as MarvelLogo } from 'Shared/svgs/marvel.svg'
import { appColors } from 'Shared/style/colors'
import { NavLink } from 'react-router-dom'

const navbarContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  background: ${appColors.primary};
  flex: 0 1 auto;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  z-index: 1;
  box-shadow: 0px -2px 6px #00000029;
  z-index: 5;
  position: sticky;
  top: 0;
`

const logoContainer = css`
  padding: 5px;
`

const headerContainer = css`
  ${genericContainer}
  align-items: center;
  place-content: center;
  width: 100%;
`

const linkContainer = css`
  text-decoration: none;
  color: ${appColors.white};
  font-weight: bold;
  font-size: 16px;
  padding: 15px;
  margin: 0 5px;
  border-bottom: 3px solid transparent;

  &:hover, 
  &.active{
    background-color: ${appColors.secondary};
    border-bottom-color: ${appColors.white};
  }
`

export const Header = ({ ...props }) => (
  <nav {...props} css={[navbarContainer]}>
    <div css={[headerContainer, logoContainer]}>
      <NavLink to='/'>
        <MarvelLogo />
      </NavLink>
    </div>
    <div css={headerContainer}>
      <NavLink to='/characters' css={linkContainer}>
        Characters
      </NavLink>
      <NavLink to='/comics' css={linkContainer}>
        Comics
      </NavLink>
      <NavLink to='/favorites' css={linkContainer}>
        Favorites
      </NavLink>
    </div>
  </nav>
)
