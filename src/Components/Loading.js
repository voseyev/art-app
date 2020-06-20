import React from 'react'
import styled from 'styled-components/macro'
import Loader from 'react-loader-spinner'

export const Loading = () => (
  <LoadingWrapper>
    <Loader type="TailSpin" color="black" />
  </LoadingWrapper>
)

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  place-items: center;
  justify-content: center;
`
