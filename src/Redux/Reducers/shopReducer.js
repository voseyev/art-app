import { GET_DRAWING_IMAGES } from '../Types'
import { GET_ACRYLIC_IMAGES } from '../Types'
import { GET_OIL_IMAGES } from '../Types'
import { IS_LOADED } from '../Types'

const initialState = {
  drawings: [],
  acrylic: [],
  oil: [],
  loaded: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DRAWING_IMAGES:
      return {
        ...state,
        drawings: action.payload
      }
    case GET_ACRYLIC_IMAGES:
      return {
        ...state,
        acrylic: action.payload
      }
    case GET_OIL_IMAGES:
      return {
        ...state,
        oil: action.payload
      }
    case IS_LOADED:
      return { ...state, loaded: action.payload }
    default:
      return state
  }
}
