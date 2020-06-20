import React from 'react'
import styled from 'styled-components/macro'
import { Layout } from '../Components/Layout'
import { addToBag } from '../Redux/Actions/addToBag'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export const Checkout = () => {
  const dispatch = useDispatch()
  const imageData = useSelector((state) => state.checkout)

  return (
    <Layout>
      <Content>
        <Image src={imageData.url} />
        <ImageForm>
          <Description>
            <Title>{imageData.name}</Title>
            {imageData.desc}
          </Description>
          <Size>{imageData.size}</Size>
          <Price>{imageData.price}</Price>
          <Button onClick={() => dispatch(addToBag())}>Add to Cart</Button>
        </ImageForm>
      </Content>
    </Layout>
  )
}

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 5fr 1fr;
  grid-template-rows: 0px 2fr 1fr;
  grid-template-areas:
    ' . . . . '
    ' . Image Form . '
    ' . Image . . ';
  @media (max-width: 768px) {
    grid-template-columns: 2fr;
    grid-template-rows: auto;
    grid-template-areas:
      '  Image  '
      '  Form  ';
  }
`
const Image = styled.img`
  grid-area: Image;
  display: flex;
  justify-self: center;
  padding: 2vw;
  max-width: 100%;
  max-height: 100%;
  animation: fade 6s;
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`
const ImageForm = styled.div`
  grid-area: Form;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  margin: 0vw 10vw;
  font-family: 'Courier New', Courier, monospace;
  font-size: max(1vw, 14px);
  animation: fade 6s;
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`
const Title = styled.h3`
  margin: 2vh 0;
`
const Description = styled.div`
  font-size: max(0.8vw, 13px);
`
const Size = styled.p`
  margin: 2vh 0;
`
const Price = styled.p`
  margin: 2vh 0;
`
const Button = styled.button`
  margin: 2vh 0;
  outline: 0;
  width: 150px;
  height: 50px;
  background-color: white;
  border: 0.5px solid black;
  font-family: 'Courier New', Courier, monospace;
  font-size: max(15px, 12px);
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`
