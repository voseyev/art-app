import { GET_PORTFOLIO_IMAGES } from '../Types'
import { GET_ACRYLIC_IMAGES } from '../Types'
import { GET_DRAWING_IMAGES } from '../Types'
import { GET_OIL_IMAGES } from '../Types'
import { IS_LOADED } from '../Types'
import { storage } from '../../Firebase'

export const getPortFolioImages = () => async (dispatch) => {
  let imageData = []
  var imageRefs = await storage
    .ref('Images/Portfolio/')
    .listAll()
    .then((result) => result.items)

  for (var ref of imageRefs) {
    var image = await ref.getDownloadURL().then((imageUrl) => imageUrl)
    imageData.push(image)
  }
  dispatch({ type: GET_PORTFOLIO_IMAGES, payload: imageData })
}

export const getShopImages = () => async (dispatch) => {
  await Promise.all([
    _getShopCategoryImages('Drawings', GET_DRAWING_IMAGES, dispatch),
    _getShopCategoryImages('Acrylic', GET_ACRYLIC_IMAGES, dispatch),
    _getShopCategoryImages('Oil', GET_OIL_IMAGES, dispatch)
  ])

  dispatch({ type: IS_LOADED, payload: true })
}

const _getShopCategoryImages = async (path, type, dispatch) => {
  let imageData = []
  var imageRefs = await storage
    .ref(`Images/Shop/${path}/`)
    .listAll()
    .then((result) => result.items)

  for (let ref of imageRefs) {
    imageData.push(
      await ref.getDownloadURL().then((imageUrl) => {
        return {
          url: imageUrl,
          ref: ref.name,
          path: path
        }
      })
    )
  }
  dispatch({ type: type, payload: imageData })
}
