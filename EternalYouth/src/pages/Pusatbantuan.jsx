import {Container, Row, Col }from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


const Pusatbantuan = () => {
  return (
  <div className='pusatbantuan'>
    <img className="background-pb" src="public/Natural_lavender.png"></img>
    <Container>
      <Row>
        <Col>
          <Container style={{ justifyContent:'center'}}>
          <Card className='seacrh-pb'>
            <Card.Body>
              <Card.Title>
                <h1>Apa yang bisa kami bantu?</h1>
              </Card.Title>
              <Card.Text style={{textAlign:'center'}}>
                cari kendala anda di pusat bantuan kami
              </Card.Text>
                <Form.Control type='text' placeholder="pencarian"/>
            </Card.Body>
          </Card>
          </Container>
        </Col>

        <Container style={{ display:'flex', justifyContent:'center', marginTop:'-180px'}}>
          <Row>
            <Col>
            <Card style={{ width: '15rem',height:'150px'}}>
            <Card.Img variant="top"  src="/Q and a.png" style={{width: '3rem', height: '3rem', margin:'auto',marginTop:'25px'}}/>
              <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Card.Title style={{textAlign:'center'}}>Pertanyaan Umum</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem',height:'150px', marginLeft: '400px', marginTop: '-150px'}}>
            <Card.Img variant="top" src="/Guide.png" style={{width: '3rem', height: '3rem', margin:'auto',marginTop:'25px'}}/>
              <Card.Body>
                <Card.Title style={{textAlign:'center'}}>Panduan</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem',height:'150px',marginLeft: '800px', marginTop: '-150px'}} >
            <Card.Img variant="top" src="/Conversation.png" style={{width: '3rem', height: '3rem', margin:'auto',marginTop:'25px'}} />
              <Card.Body>
                <Card.Title style={{textAlign:'center'}}>Komunitas</Card.Title>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>

        <Container>
          <Card style={{ width: '70rem', marginTop:'50px'}}>
            <Card.Body style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
              <div style={{ flex: '1', marginLeft: '100px'}}>
                <Card.Title>Pertanyaan Umum</Card.Title>
                {/* <Card.Text>{description}</Card.Text> */}
              </div>
              <Card.Img variant="top" src="/Q and a.png" style={{ width: '50px', height: '50px'}}/>
            </Card.Body>
          </Card>
          <Card style={{ width: '70rem', marginTop:'50px' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
              <div style={{ flex: '1', marginLeft: '100px'}}>
                <Card.Title>Panduan</Card.Title>
                {/* <Card.Text>{description}</Card.Text> */}
              </div>
              <Card.Img variant="top" src="/Guide.png" style={{ width: '50px', height: '50px'}}/>
            </Card.Body>
          </Card>
          <Card style={{ width: '70rem', marginTop:'50px'}}>
            <Card.Body style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
              <div style={{ flex: '1', marginLeft: '100px'}}>
                <Card.Title>Komunitas</Card.Title>
                {/* <Card.Text>{description}</Card.Text> */}
              </div>
              <Card.Img variant="top" src="/Conversation.png" style={{ width: '50px', height: '50px',}}/>
            </Card.Body>
          </Card>
          {/* <img src="public/Flat_lay.png"></img> */}
        </Container>
      </Row>
    </Container>
    
    <img  src="public/Flat_lay.png" style={{marginTop: '-400px'}}></img>
  </div>
  );
}

export default Pusatbantuan;