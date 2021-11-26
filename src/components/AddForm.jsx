import {Form, Container, Button} from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

const AddForm = () => {
  const [textArea, setTextArea] = useState('')
  const [author, setAuthor] = useState('')
  const postObject ={
    author: author,
    text: textArea
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('127.0.0.1:8000/api/create', postObject)
  }
  return (
    <>
    <Form className="mt-3" onSubmit={e=>handleSubmit(e)}>
      <Container >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Autor da Menssagem</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Seu Nome" 
        value={author}
        onChange={e=>setAuthor(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mande uma mensagem de felicitações</Form.Label>
        <Form.Control 
        as="textarea" 
        rows={5}
        placeholder="Feliz Aniversario!!!"
        value={textArea}
        onChange={e=>setTextArea(e.target.value)} />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Submit
      </Button>
      </Container>
    </Form>
    </>
  )
}

export default AddForm