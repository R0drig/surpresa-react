import {Form, Container, Button, Modal} from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

const AddForm = () => {
  const [textArea, setTextArea] = useState('')
  const [author, setAuthor] = useState('')
  const [show, setShow] = useState(false);
  
  const postObject ={
    author: author,
    text: textArea
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('127.0.0.1:8000/api/create', postObject)
    alert('Post added')
  }


  return (
    <>
  
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{`Olá ${author}, será enviada a seguinte mensagem `}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {textArea}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Voltar e Editar Mensagem
          </Button>
          <Button variant="primary" onClick={e=>handleSubmit(e)}>Enviar Mensagem</Button>
        </Modal.Footer>
      </Modal>

    <Form className="mt-3">
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
      <Button variant="secondary" onClick={handleShow}>
        Enviar
      </Button>
      </Container>
    </Form>

    
    </>
  )
}

export default AddForm