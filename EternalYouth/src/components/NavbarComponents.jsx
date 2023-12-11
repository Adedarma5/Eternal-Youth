import { Navbar, Container, Nav, NavDropdown, Row, Form, Col } from "react-bootstrap"
import { Icon } from '@iconify/react';
const NavbarComponents = () => {
  return (
    <div>
        <Navbar xpand="lg" >
      <Container>
        <img className="logo" src="/Logo.png"></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-link"  > 
          <Nav.Link className="beranda" href="Homepage" style={{color: '#FFD26C'}}>Beranda</Nav.Link>
          <Nav.Link href="Layanankonsultasi"style={{color: '#FFD26C'}}>Layanan Konsultasi</Nav.Link>
          <Nav.Link href="Pemesanan"style={{color: '#FFD26C'}}>Pemesanan</Nav.Link>
          <NavDropdown title="Informasi" id="basic-navbar-nav" className="text-primary">
              <NavDropdown.Item href="TentangKami"style={{color: '#FFD26C'}}>Tentang Kami</NavDropdown.Item>
              <NavDropdown.Item href="PusatBantuan"style={{color: '#FFD26C'}}>Pusat Bantuan</NavDropdown.Item>
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
              <Icon icon="mdi:account-circle-outline" color="#cfc249" width="40" height="40"href="/pages/pemesanan" className="btn-login"/>
              <Icon icon="mdi:cart-variant" color="#cfc249" width="40" height="40"href="/pages/pemesanan" className="btn-keranjang"/>
              {/* <img src="public/keranjang.png" className="btn-keranjang"></img> */}
          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}

export default NavbarComponents