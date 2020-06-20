import React, { useState, useEffect } from 'react'
import { auth } from '../Firebase'
import { UploadImages } from '../Admin/UploadImages'
import styled from 'styled-components/macro'

export const Admin = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })
  const [userVerified, setUserVerification] = useState(false)
  const [renderContent, setRenderContent] = useState(false)

  const Login = () => {
    auth
      .signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .catch((error) => {
        alert(error.message)
      })
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setUserVerification(true)
      setRenderContent(true)
    })
  }, [])

  const handleInput = (e) => {
    const { name, value } = e.target
    setUserInfo((userInfo) => ({ ...userInfo, [name]: value }))
  }

  const renderOutput = () => {
    if (userVerified) {
      return <UploadImages />
    } else {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh'
          }}
        >
          <div>
            <input
              style={{ padding: 15, margin: 15 }}
              name="email"
              type="email"
              placeholder="email"
              onChange={handleInput}
            />
            <input
              style={{ padding: 15, margin: 15 }}
              name="password"
              type="password"
              placeholder="password"
              onChange={handleInput}
            />
            <button
              style={{ width: 100, height: 50, margin: 20 }}
              onClick={Login}
            >
              Login
            </button>
          </div>
        </div>
      )
    }
  }

  return <>{renderContent && renderOutput()}</>
}
