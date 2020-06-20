import { ADD_TO_SHOPPING_BAG } from '../Types'

export const addToBag = () => (dispatch) => {
  dispatch({ type: ADD_TO_SHOPPING_BAG })
}
