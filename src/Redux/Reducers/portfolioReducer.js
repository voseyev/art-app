import { GET_PORTFOLIO_IMAGES } from '../Types'

const initialState = {
  urls: [],
  loaded: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PORTFOLIO_IMAGES:
      return {
        ...state,
        urls: action.payload,
        loaded: true
      }
    default:
      return state
  }
}
