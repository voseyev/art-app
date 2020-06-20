import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../Components/Footer'
import styled from 'styled-components/macro'

export const NavigationIcon = () => {
  const [isMenuOpen, changeMenu] = useState(false)

  return (
    <>
      {isMenuOpen ? (
        <>
          <Modal>
            <LinkWrapper>
              <NavLink onClick={() => changeMenu(false)} to="/">
                Portfolio
              </NavLink>
              <NavLink onClick={() => changeMenu(false)} to="/contact">
                Contact
              </NavLink>
              <NavLink onClick={() => changeMenu(false)} to="/shop">
                Shop
              </NavLink>
              <Footer insideNavIcon />
            </LinkWrapper>
          </Modal>
        </>
      ) : (
        ''
      )}
      <NavIcon
        onClick={() => (isMenuOpen ? changeMenu(false) : changeMenu(true))}
        isMenuOpen={isMenuOpen}
      >
        <IconBar className="Bar1" isMenuOpen={isMenuOpen}></IconBar>
        <IconBar className="Bar2" isMenuOpen={isMenuOpen}></IconBar>
        <IconBar className="Bar3" isMenuOpen={isMenuOpen}></IconBar>
      </NavIcon>
    </>
  )
}

const NavIcon = styled.div`
  position: fixed;
  grid-area: NavBar;
  padding: 10px;
  background-color: ${({ isMenuOpen }) =>
    isMenuOpen ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.2)'};
  border-radius: 100px;
  z-index: 2;
`

const IconBar = styled.div.attrs()`
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
  &.Bar1 {
    ${({ isMenuOpen }) =>
      isMenuOpen ? 'transform: rotate(-45deg) translate(-9px, 6px)' : ''};
  }
  &.Bar2 {
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '1')};
  }
  &.Bar3 {
    ${({ isMenuOpen }) =>
      isMenuOpen ? 'transform: rotate(45deg) translate(-8px, -8px)' : ''};
  }
`
const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
`
const LinkWrapper = styled.div`
  display: flex;
  margin-top: 50%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`
const NavLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  padding: 30px;
  margin: 10px;
  width: 200px;
  border: solid black 2px;
  border-radius: 50px;
  color: white;
  background-color: #333;
`
