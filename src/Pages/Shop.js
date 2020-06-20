import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { Layout } from '../Components/Layout'
import { ShopImages } from '../Components/ShopImages'
import { getShopImages } from '../Redux/Actions/getImagesAction'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from '../Components/Loading'

export const Shop = () => {
  const dispatch = useDispatch()
  const Images = useSelector(({ shop }) => {
    return {
      drawings: shop.drawings,
      acrylic: shop.acrylic,
      oil: shop.oil,
      loaded: shop.loaded
    }
  })

  const [currentOption, setOption] = useState('Drawings')
  const [imageData, setImageData] = useState([])

  useEffect(() => {
    dispatch(getShopImages())
  }, [dispatch])

  useEffect(() => {
    if (Images.loaded) setImages(currentOption)
  }, [Images.loaded, currentOption])

  const checkOption = (e) => {
    setOption(e.target.value)
  }

  const setImages = (option) => {
    if (option === 'Acrylic') {
      setImageData(Images.acrylic)
    } else if (option === 'Oil') {
      setImageData(Images.oil)
    } else setImageData(Images.drawings)
  }

  return (
    <>
      <Layout>
        <Content>
          <SelectorContainer>
            <ImageTypes onChange={checkOption}>
              <Option>Drawings</Option>
              <Option>Oil</Option>
              <Option>Acrylic</Option>
            </ImageTypes>
          </SelectorContainer>
          <ImagesContainer>
            {Images.loaded ? <ShopImages Images={imageData} /> : <Loading />}
          </ImagesContainer>
        </Content>
      </Layout>
    </>
  )
}

const ImagesContainer = styled.ul`
  grid-area: Images;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 480px) {
    &::after {
      content: '';
      flex-grow: 10;
    }
  }
`
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr 10fr;
  grid-template-areas:
    ' Types Types . '
    ' . Images . ';
`
const SelectorContainer = styled.div`
  grid-area: Types;
  display: flex;
  justify-self: end;
  margin-bottom: 20px;
`
const ImageTypes = styled.select``
const Option = styled.option``
