import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

const NavbarComponents = () => {
  return (
    <div>
        <Navbar xpand="lg" >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-link" > 
 
          <Nav.Link href="Homepage">Home</Nav.Link>
          <Nav.Link href="Layanankonsultasi">Layanan Konsultasi</Nav.Link>
          <Nav.Link href="Pemesanan">Pemesanan</Nav.Link>
          <NavDropdown title="Informasi" id="basic-nav-dropdown" >
              <NavDropdown.Item href="TentangKami">Tentang Kami</NavDropdown.Item>
              <NavDropdown.Item href="PusatBantuan">Pusat Bantuan</NavDropdown.Item>
            </NavDropdown>
          </Nav>


          <div>
            <button>Login</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponents
