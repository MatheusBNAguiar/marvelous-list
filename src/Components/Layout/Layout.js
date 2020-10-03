/** @jsxFrag React.Fragment */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Content } from './Content'
import { Header } from './Header'

export const Layout = (props) => {
  return (
    <>
      <Header />
      <Content {...props} />
    </>
  )
}
