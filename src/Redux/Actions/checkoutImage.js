import { GET_IMAGE_INFO } from '../Types'
import firebase from 'firebase/app'

export const loadAndSetImage = (url, path, ref, index) => async (dispatch) => {
  const firestore = firebase.firestore()
  var imageInfo = await firestore
    .collection('Images')
    .doc('Shop')
    .collection(path)
    .doc(ref)
    .get()
    .then((data) => {
      var d = data.data()
      return {
        url: url,
        name: d.Name,
        desc: d.Desc,
        size: d.Size,
        price: d.Price,
        index: index,
        ref: ref
      }
    })
  dispatch({ type: GET_IMAGE_INFO, payload: imageInfo })
}
