import { GET_IMAGE_INFO } from '../Types'

const initialState = {
  url: '',
  name: '',
  desc: '',
  size: '',
  price: '',
  index: '',
  ref: '',
  loaded: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE_INFO:
      var { url, name, desc, size, price, index, ref } = action.payload
      return {
        ...state,
        url: url,
        name: name,
        desc: desc,
        size: size,
        price: price,
        index: index,
        ref: ref,
        loaded: true
      }
    default:
      return state
  }
}
