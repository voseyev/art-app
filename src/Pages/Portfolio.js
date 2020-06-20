import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { Layout } from '../Components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getPortFolioImages } from '../Redux/Actions/getImagesAction'
import { Loading } from '../Components/Loading'

export const Portfolio = () => {
  const dispatch = useDispatch()
  const Images = useSelector((state) => {
    const { urls, loaded } = state.portfolio
    return { urls: urls, loaded: loaded }
  })
  const [imageDisplay, setDisplay] = useState({ image: '', display: false })

  useEffect(() => {
    dispatch(getPortFolioImages())
  }, [dispatch])

  const displayImage = (image) => {
    setDisplay({ ...imageDisplay, image: image, display: true })
  }

  if (imageDisplay.display)
    return (
      <Modal onClick={() => setDisplay({ ...imageDisplay, display: false })}>
        <ModalImage src={imageDisplay.image} />
      </Modal>
    )

  return (
    <Layout>
      <Content>
        <ImagesContainer>
          {Images.loaded ? (
            Images.urls.map((image, index) => (
              <ImageWrapper key={index} onClick={() => displayImage(image)}>
                <Image src={image} />
              </ImageWrapper>
            ))
          ) : (
            <Loading />
          )}
        </ImagesContainer>
      </Content>
    </Layout>
  )
}

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-areas: ' . Images . ';
`
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
const ImageWrapper = styled.li`
  height: 40vh;
  // flex-grow: 1;
  list-style: none;
  margin: 5px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  @media (max-aspect-ratio: 1/1) {
    height: 20vh;
  }
`
const Image = styled.img`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  border-radius: 30px;
  transition: padding 0.8s, border-radius 0.8s;
  &:hover {
    border-radius: 0;
    margin: 0;
  }
  animation: fade 6s;
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
const ModalImage = styled.img`
  max-width: 75%;
  max-height: 75%;
`
const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
`
