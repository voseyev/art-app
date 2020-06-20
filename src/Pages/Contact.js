import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Layout } from '../Components/Layout'
import axios from 'axios'
import { toast } from 'react-toastify'

import aboutImage from '../Images/Image_About.jpeg'

export const Contact = () => {
  //   useEffect(() => {
  //     window.scrollTo(0, 0)
  //   }, [])

  const [userInput, setInput] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setInput((userInput) => ({ ...userInput, [name]: value }))
  }

  const sendEmail = () => {
    axios
      .post('/send', {
        name: userInput.name,
        email: userInput.email,
        message: userInput.message
      })
      .then(() => console.log('email sent!'))
      .catch((err) => console.log(err))
  }

  if (!userInput) return <div>Loading...</div>

  return (
    <Layout>
      <Content>
        <Image src={aboutImage} />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          scelerisque rutrum purus sed ultricies. Integer eleifend nulla sed
          gravida sollicitudin. Vestibulum rutrum dolor arcu, vitae porta leo
          viverra eu. Pellentesque id odio nec elit auctor laoreet vitae in
          urna. Aliquam at scelerisque libero, vel sodales libero. Nam rutrum
          augue in nulla ornare volutpat ac sit amet felis. Ut egestas gravida
          elementum. Vestibulum at ultrices orci. Vestibulum commodo augue quis
          lorem congue rhoncus. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Sed hendrerit ex arcu,
          pellentesque elementum massa placerat vitae. Maecenas turpis odio,
          commodo vel porta eget, tempor vitae ipsum. Mauris vitae bibendum
          nisi.
        </Text>
        <Form>
          <Wrapper value="Name">
            <Input name="name" onChange={handleInput} />
          </Wrapper>
          <Wrapper value="Email">
            <Input name="email" type="email" onChange={handleInput} />
          </Wrapper>
          <Wrapper value="Message">
            <TextArea name="message" onChange={handleInput} />
          </Wrapper>
          <Button onClick={() => sendEmail()}>Submit</Button>
        </Form>
      </Content>
    </Layout>
  )
}

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 5fr 1fr;
  grid-template-areas:
    ' . Image Text  .  '
    ' . Image Form . ';
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      ' Image '
      ' Text '
      ' Form ';
  }
`
const Image = styled.img`
  grid-area: Image;
  display: flex;
  justify-self: center;
  padding: 2vw;
  max-width: 50vh;
  max-height: 50vh;
`
const Form = styled.div`
  grid-area: Form;
  display: flex;
  margin: auto;
  width: 80%;
  flex-direction: column;
  @media (min-width: 1080px) {
    justify-self: start;
    margin-left: 2vh;
    width: 50%;
  }
`
const Input = styled.input`
  margin-top: 1rem;
  width: 100%;
  outline: 0;
  border-width: 0 0 1px;
  font-size: 1rem;
`
const TextArea = styled.textarea`
  margin-top: 1rem;
  outline: 0;
  width: 100%;
  height: 3rem;
`

const Wrapper = styled.div`
  &::after {
    display: block;
    content: '${(props) => props.value}';
    font-size: max(.9vw, 15px);
    font-family: 'Courier New', Courier, monospace;
    padding: 5px;
  }
`
const Text = styled.p`
  grid-area: Text;
  font-family: 'Courier New', Courier, monospace;
  font-size: max(1vw, 14px);
  margin: 25px;
`

const Button = styled.button`
  margin: auto;
  width: 20vh;
  height: 5vh;
  background-color: white;
  border: 0.5px solid black;
  font-family: 'Courier New', Courier, monospace;
  font-size: 2vh;
  box-shadow: 0px 0px black;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`
