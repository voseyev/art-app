import React from 'react'
import styled from 'styled-components/macro'

import InstaIcon from '../Images/Insta_Icon.png'
import TikTokIcon from '../Images/Tik_Tok_Icon.png'

export const Footer = ({ insideNavIcon, smallScreen }) => {
  return (
    <FooterContent
      SmallScreen={smallScreen}
      as={insideNavIcon ? modalFooterContent : ''}
    >
      <SocialLink href="https://www.instagram.com/anyachekhovskiy/">
        <Icon src={InstaIcon} />
      </SocialLink>
      <SocialLink href="https://www.tiktok.com/@anya.chekhovskiy">
        <Icon src={TikTokIcon} />
      </SocialLink>
    </FooterContent>
  )
}

const FooterContent = styled.div`
  grid-area: Footer;
  display: ${({ SmallScreen }) => SmallScreen && 'none'};
  position: fixed;
  left: 3vh;
  bottom: 0;
`

const modalFooterContent = styled.div`
  position: relative;
  marigin: 10px;
  left: 0;
`

const SocialLink = styled.a`
  text-decoration: none;
  color: black;
  @media (max-width: 768px) {
    margin: 10px;
  }
  @media (min-width: 0px) {
    margin: 0px;
  }
`
const Icon = styled.img`
  height: 20px;
  width: 20px;
  margin: 10px;
`
