import React, { useState } from 'react'
import firebase, { storage } from '../Firebase'
import styled from 'styled-components/macro'

export const UploadImages = () => {
  const firestore = firebase.firestore()
  const [imageFile, setImageSrc] = useState()
  const [isLoading, setLoading] = useState(false)
  const [Uploaded, setUploaded] = useState(false)
  const [selectedFolder, setFolder] = useState('Portfolio')
  const [categoryDropdown, setHiddenCategory] = useState(true)
  const [selectedCategory, setCategory] = useState('Drawings')
  const [displayForm, setFormDisplay] = useState(false)

  const [userInput, setInput] = useState({
    Name: '',
    Desc: '',
    Size: '',
    Price: ''
  })

  async function uploadImage() {
    let pathRef = ''
    if (!imageFile) alert('Please Select Files(s) To Upload')
    else {
      if (selectedFolder === 'Portfolio') {
        pathRef = 'Images/Portfolio/'
      } else {
        pathRef = `Images/Shop/${selectedCategory}/`
      }
      setLoading(true)
      var ref = storage.ref(pathRef + imageFile[0].name)
      var uploadImage = ref.put(imageFile[0])
      await uploadImage
      firestore
        .collection('Images')
        .doc(selectedFolder)
        .collection(selectedCategory)
        .doc(ref.name)
        .set({
          Name: userInput.Name,
          Desc: userInput.Desc,
          Size: userInput.Size,
          Price: userInput.Price
        })

      setLoading(false)
      setUploaded(true)
      const timer = setTimeout(() => {
        setUploaded(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }

  const setSelectedFolder = (e) => {
    setFolder(e.target.value)
    if (e.target.value === 'Shop') {
      setHiddenCategory(false)
      setFormDisplay(true)
    } else {
      setHiddenCategory(true)
      setFormDisplay(false)
    }
  }

  const setSelectedCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleInput = (e) => {
    const { name, value } = e.target
    setInput((userInput) => ({ ...userInput, [name]: value }))
    console.log(userInput)
  }

  return (
    <Content>
      <UploadContainer>
        <input
          type="file"
          multiple
          onChange={(e) => setImageSrc(e.target.files)}
        />
        <select onChange={setSelectedFolder}>
          <option>Portfolio</option>
          <option>Shop</option>
        </select>
        <SelectCategory
          hidden={categoryDropdown}
          onChange={setSelectedCategory}
        >
          <option>Drawings</option>
          <option>Oil</option>
          <option>Acrylic</option>
        </SelectCategory>
      </UploadContainer>
      <FormContainer>
        <Input
          show={displayForm}
          name="Name"
          type="text"
          placeholder="Image Name"
          onChange={handleInput}
        />
        <Input
          show={displayForm}
          name="Size"
          type="text"
          placeholder="Image Size"
          onChange={handleInput}
        />
        <Input
          show={displayForm}
          name="Price"
          type="text"
          placeholder="Image Price"
          onChange={handleInput}
        />
        <TextArea
          show={displayForm}
          name="Desc"
          type="textarea"
          placeholder="Image Description"
          onChange={handleInput}
        />
        <Button onClick={uploadImage}>Upload</Button>
        <p style={{ alignSelf: 'center', margin: 20, color: 'blue' }}>
          {isLoading ? 'Loading...' : ''}
        </p>
        <p style={{ alignSelf: 'center', margin: 20, color: 'Green' }}>
          {Uploaded ? 'Uploaded!' : ''}
        </p>
      </FormContainer>
    </Content>
  )
}

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr 2fr;
  grid-template-areas:
    ' . Upload . '
    ' . Desc . ';
  height: 100vh;
  width: 100vw;
`
const SelectCategory = styled.select`
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
`
const UploadContainer = styled.div`
  grid-area: Upload;
  display: flex;
  justify-content: center;
  align-items: end;
  margin-bottom: 50px;
`
const FormContainer = styled.div`
  grid-area: Desc;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Input = styled.input`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  width: 200px;
  height: 25px;
  margin: 10px;
`
const TextArea = styled.textarea`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  width: 200px;
  height: 50px;
  margin: 10px;
`
const Button = styled.button`
  // grid-area: ${({ show }) => (show ? 'Button' : 'Desc')};
  // display: flex;
  // place-self: center;
  // place-items: center;
  // justify-content: center;
  width: 125px;
  height: 50px;
`
