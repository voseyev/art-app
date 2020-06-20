import React from 'react'
import { Navigation } from '../Navigation/Navigation'
import { Logo } from './Logo'
import { Footer } from './Footer'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components/macro'

export const Layout = (props) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' })
  return (
    <PageLayout small={isSmallScreen}>
      <Navigation />
      <Logo />
      <Content>{props.children}</Content>
      <Footer smallScreen={isSmallScreen} />
    </PageLayout>
  )
}

const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 3fr 1fr;
  grid-template-rows: 200px auto 100px;
  grid-template-areas:
    ' Logo Logo ${({ small }) => (small ? 'Logo' : 'NavBar')} ${({ small }) =>
  small ? 'Logo' : 'NavBar'}'
    ' Content Content Content Content '
    ' Footer Footer Footer Footer ';
    height: 100%;
    width: 100%;
`

const Content = styled.div`
  grid-area: Content;
`
