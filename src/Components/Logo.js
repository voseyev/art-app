import React from 'react'
import styled from 'styled-components/macro'

export const Logo = () => (
  <>
    <LogoName>
      <Text main>ANYA CHEKHOVSKIY</Text>
      <Text>ARTIST</Text>
    </LogoName>
  </>
)

const LogoName = styled.div`
  grid-area: Logo;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
`
const Text = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-size: ${(props) => (props.main ? '1.3vw' : '1vw')};
  font-weight: ${(props) => (props.main ? 'bold' : 'normal')};
  padding: 5px;
  letter-spacing: 10px;
  @media (max-width: 1080px) {
    font-size: ${(props) => (props.main ? '1.1rem' : '.8rem')};
  }
  @media (min-width: 0px) {
    font-size: ${(props) => (props.main ? '.9rem' : '.6rem')};
  }
`
