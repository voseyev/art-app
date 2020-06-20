import { combineReducers } from 'redux'
import portfolio from './portfolioReducer'
import shop from './shopReducer'
import checkout from './checkoutReducer'
import shoppingBag from './shopBagReducer'

const rootReducer = combineReducers({
  portfolio,
  shop,
  checkout,
  shoppingBag
})

export default rootReducer
