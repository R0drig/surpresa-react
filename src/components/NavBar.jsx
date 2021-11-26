import {Nav, Navbar, Container} from 'react-bootstrap';


const NavBar = () => {
  return (
    <>
    <Navbar collapseOnSelect  expand="sm" bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="#home">Rabudinha de Limeira</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="/send-mensage">Mande uma Mensagem</Nav.Link>
              <Nav.Link href="#home">Painel de Mensagens</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
  )
}

export default NavBar
