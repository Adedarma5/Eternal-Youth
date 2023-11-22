import { Navbar, Container, Nav, NavDropdown, Row, Form, Col } from "react-bootstrap"

const NavbarComponents = () => {
  return (
    <div>
        <Navbar xpand="lg" >
      <Container>
        <img className="logo" src="/Logo.png"></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-link" > 
          <Nav.Link href="Homepage">Beranda</Nav.Link>
          <Nav.Link href="Layanankonsultasi">Layanan Konsultasi</Nav.Link>
          <Nav.Link href="Pemesanan">Pemesanan</Nav.Link>
          <NavDropdown title="Informasi" id="basic-navbar-nav" >
              <NavDropdown.Item href="TentangKami">Tentang Kami</NavDropdown.Item>
              <NavDropdown.Item href="PusatBantuan">Pusat Bantuan</NavDropdown.Item>
            </NavDropdown>
            
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Cari sesuatu"
              className="search"
              />
              </Col>
              </Row>
              <input type="image" src="/Login.png" alt="pemesanan" className="btn-login" href="/pages/pemesanan"></input>
              <input type="image" src="/Keranjang.png" alt="pemesanan" className="btn-keranjang" href="/pages/pemesanan"></input>
              {/* <img src="public/keranjang.png" className="btn-keranjang"></img> */}
          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}

export default NavbarComponents
