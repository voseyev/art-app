import { ADD_TO_SHOPPING_BAG } from '../Types'

const initialState = {
  amount: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SHOPPING_BAG:
      return {
        ...state,
        amount: state.amount + 1
      }
    default:
      return state
  }
}
