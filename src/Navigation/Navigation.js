import React from 'react'
import { NavigationBar } from './NavigationBar'
import { NavigationIcon } from './NavigationIcon'
import { useMediaQuery } from 'react-responsive'

export const Navigation = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' })
  return isSmallScreen ? <NavigationIcon /> : <NavigationBar />
}
