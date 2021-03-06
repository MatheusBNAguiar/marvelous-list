/** @jsxFrag React.Fragment */
/** @jsx jsx */
import 'reset-css'
import { Fragment } from 'react'
import { css, jsx, Global } from '@emotion/core'
import 'Shared/css/icomoon.css'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
const queryCache = new QueryCache()

global.React = { Fragment }

const bodyStyle = css`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');
  
  body {
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell",
      "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    padding: 0;
    margin: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`

export const Base = ({ children }) => (
  <ReactQueryCacheProvider queryCache={queryCache}>
    <Global styles={bodyStyle} />
    {children}
  </ReactQueryCacheProvider>
)
