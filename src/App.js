import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Portfolio } from './Pages/Portfolio'
import { Contact } from './Pages/Contact'
import { Shop } from './Pages/Shop'
import { Admin } from './Admin/Admin'
import { Checkout } from './Pages/Checkout'
import { ShoppingBag } from './Pages/ShoppingBag'

import { useSelector } from 'react-redux'

export const App = () => {
  const checkout = useSelector((state) => state.checkout.ref)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path={`/${checkout}`}>
          <Checkout />
        </Route>
        <Route path="/cart">
          <ShoppingBag />
        </Route>
      </Switch>
    </Router>
  )
}
