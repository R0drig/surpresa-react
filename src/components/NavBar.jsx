import {Nav, Navbar, Container} from 'react-bootstrap';
import image from '../assets/brand.png'


const NavBar = () => {
  return (
    <>
    <Navbar collapseOnSelect  expand="sm" bg="dark" variant="dark" >
      <Container>
      <img
          alt=""
          src={image}
          width="50"
          height="50"
          className="d-inline-block align-top"

        />{' '}
        <Navbar.Brand className="m-3" href="#home">Rabudinha de Limeira</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/send-mensage">Mande uma Mensagem</Nav.Link>
              <Nav.Link href="/mensages">Painel de Mensagens</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
  )
}

export default NavBar
