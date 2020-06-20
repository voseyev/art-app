import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import ShopBag from '../Images/Shopping_Bag.png'

export const NavigationBar = () => {
  const cartAmount = useSelector((state) => state.shoppingBag.amount)

  return (
    <NavBar>
      <NavLink to="/">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      {cartAmount > 0 && (
        <NavLink to="/cart">
          <IconWrap>
            <BagIcon alt="shop-bag" src={ShopBag} />
            <Counter>{cartAmount}</Counter>
          </IconWrap>
        </NavLink>
      )}
    </NavBar>
  )
}
const NavBar = styled.div`
  grid-area: NavBar;
  display: flex;
  justify-content: center;
  align-self: center;
  background-color: white;
`

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  padding: 1rem;
  font-size: 16px;
  font-family: 'Courier New', Courier, monospace;
  letter-spacing: 2px;
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.8;
  }
`
const BagIcon = styled.img`
  display: flex;
  height: 30px;
  margin: auto;
`
const IconWrap = styled.div`
  display: flex;
`
const Counter = styled.div`
  display: flex;
  background-color: lightblue;
  font-size: 2vh;
  align-self: start;
  justify-content: center;
  place-items: center;
  width: 3vh;
  height: 3vh;
  border-radius: 15px;
`
