import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import { loadAndSetImage } from '../Redux/Actions/checkoutImage'

export const ShopImages = ({ Images }) => {
  const dispatch = useDispatch()
  return (
    <>
      {Images.map((image, index) => (
        <Link key={index} to={image.ref}>
          <ImageWrapper
            onClick={() =>
              dispatch(loadAndSetImage(image.url, image.path, image.ref, index))
            }
          >
            <Image src={image.url} />
          </ImageWrapper>
        </Link>
      ))}
    </>
  )
}

const ImageWrapper = styled.li`
  height: 40vh;
  flex-grow: 1;
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
  animation: fade 6s;
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  transition: padding 0.8s, border-radius 0.8s;
  &:hover {
    border-radius: 0;
    margin: 0;
  }
`
