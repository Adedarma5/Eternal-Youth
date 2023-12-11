import React from 'react';
import { Container, Card, Button} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


const Homepage = () => {
  const customStyle = {
    // Definisi gaya sesuai kebutuhan Anda
    padding: '10px',
  };



  return (

    <div style={{backgroundColor: '#F4EAE0'}} >
      <img className="background" src="public/bacground_home.png"></img>
      <div className="content-atas">
      <h1 className="text-home">Bebas Berekspresi Tak Kenal Usia</h1>
      <p>Yuk, temukan keindahan alami disini !</p>
      <button className='btn-awal'>
        <a href="/LoginPage" style={{textDecoration: 'none', color: 'white'}}>Mulai Sekarang
        </a>
      </button>
      </div>


      <h1 className="text-antara-conten">Kenali Lebih Lanjut</h1>
      
      <div style={{backgroundColor: '#F4EAE0'}}>
      <img className="bg-lavender" src="public/bg_lavender.png"></img>
      <img className="bg-lavender2" src="public/bg_lavender2.png"></img>
      <p className="conten1" >EthernalYouth adalah teman terbaik Anda dalam perjalanan
        merawat kulit yang sehat dan bercahaya.<br></br>
         Kami hadir untuk memberikan rekomendasi berdasarkan produk perawatan kulit terbaik dari <br></br>
        berbagai perusahaan ternama. Dengan fokus pada kualitas, keamanan, dan kehalalan, kami<br></br> 
        menyajikan pilihan skincare yang telah disetujui oleh 
        BPOM.</p>
      <p className="conten2">EthernalYouth mengerti bahwa setiap kulit memiliki  keunikan, dan itulah mengapa kami <br></br>
      menawarkan layanan konsultasi ahli. Kami akan membantu Anda menemukan produk <br></br>
      yang paling cocok untuk kebutuhan kulit Anda. Mari bersama-sama meraih kulit sehat dan <br></br>
      bercahaya dengan percaya diri. Selamat datang di Ethernalyouth...</p>
      </div>

      <p className="text-bawah-conten">Cek  Jenis Kulit Untuk Mengetahui Skincare Apa Yang Cocok Buat Kamu</p> 

    <Container className='kategori-kulit'>
    <div>
    <img className="kategori-kulit" src="public/kulitnormal.png"></img>
    <h4 className='text-kulit'>Kulit Normal</h4>
    </div>
    <div>
    <img className="kategori-kulit" src="public/kulitsensitif.png"></img>
    <h4 className='text-kulit' >Kulit Sensitif</h4>
    </div>
    <div>
    <img className="kategori-kulit" src="public/kulitberminyak.png"></img>
    <h4 className='text-kulit' >Kulit Berminyak</h4>
    </div>
    <div>
    <img className="kategori-kulit" src="public/kulitkering.png"></img>
    <h4 className='text-kulit' >Kulit Kering</h4>
    </div>
    <div>
    <img className="kategori-kulit" src="public/kulitkombinasi.png"></img>
    <h4 className='text-kulit'>Kulit Kombinasi</h4>
    </div>
    </Container>
    <button className='btn-kulit' style={{marginTop: '100px', padding: '10px 60px 10px 60px'}} >
        <a href='/Kalkulator' style={{color: 'white', textDecoration: 'none'}}>Cek Sekarang</a>
      </button>

      <img style={{marginLeft: '430px', position: 'absolute', marginTop: '150px'}} src="public/bgDaisy.png"></img>
      <h1 className="text-bawah-kulit">Produk Terbaru</h1> 
      <img style={{position: 'absolute', marginTop: '500px'}} src="public/bg-produk.png"></img>
    <Carousel className='carousel' data-bs-theme="dark" >
      <Carousel.Item>
        <img
          className=" slide d-block w-90"
          src="public/slide.png"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide d-block w-90"
          src="public/slide.png"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide d-block w-90"
          src="public/slide.png"
          alt="Third slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <button className='btn-kulit' style={{marginTop: '100px', padding: '10px 60px 10px 60px',textDecoration:'none'}} >
        <a href='/Pemesanan' style={{color: 'white', textDecoration: 'none'}}>Selengkapnya</a>
      </button>

    <h1 className="text-bawah-artikel">Artikel</h1> 
    <p style={{textAlign: 'center', fontSize: '20px'}}>Pelajari lebih lanjut untuk menemukan masalah kulit mu</p>

    <Container style={{display: 'flex', marginTop: '100px'}}>
    <Card style={{ width: '25rem', backgroundColor: '#EAD7BB' }}>
      <Card.Img variant="top" src="/bpom.png" style={{width: '350px', marginTop: '10px', marginLeft: '23px'}}/>
      <Card.Body>
        <Card.Title style={{color: '#1B1C57'}}>Cara Mengecek Produk Sudah Resmi BPOM</Card.Title>
        <Card.Text style={{color: 'grey'}}>
        https://cekbpom.pom.go.id/ 
        </Card.Text>
        <Card.Text style={{color: 'grey', fontSize: '15px'}}>
        Dibaca 8 menit yang lalu
        </Card.Text>
        <Button  style={{backgroundColor: "#113946",marginLeft: '200px', border: 'none'}}><a href='/Informasi' style={{color: 'white', textDecoration: 'none'}}>Baca Lebih Lanjut</a></Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '25rem', marginLeft:'50px', backgroundColor: '#EAD7BB'  }}>
      <Card.Img variant="top" src="/perawatan-wajah.png" style={{width: '350px', marginTop: '10px', marginLeft: '23px'}} />
      <Card.Body>
        <Card.Title style={{color: '#1B1C57'}}>Perawatan Wajah - Tipe Kulit, Tips, dan Langkah Perawatan</Card.Title>
        <Card.Text style={{color: 'grey'}}>
        Perawatan Wajah - Tipe Kulit, Tips, dan Langkah Perawatan | Halodoc
        </Card.Text>
        <Card.Text style={{color: 'grey', fontSize: '15px'}}>
        Dibaca 8 menit yang lalu
        </Card.Text>
        <Button  style={{backgroundColor: "#113946",marginLeft: '200px', border: 'none'}}><a href='/Informasi' style={{color: 'white', textDecoration: 'none'}}>Baca Lebih Lanjut</a></Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '25rem', marginLeft:'50px', backgroundColor: '#EAD7BB'  }}>
      <Card.Img variant="top" src="/merawat-wajah.png" style={{width: '350px', marginTop: '10px', marginLeft: '23px'}} />
      <Card.Body>
        <Card.Title style={{color: '#1B1C57'}}>Tips Merawat Kesehatan Kulit Wajah & Tubuh Terlengkap yang Perlu Dilakukan!</Card.Title>
        <Card.Text style={{color: 'grey'}}>
        Tips Merawat Kesehatan Kulit Wajah & Tubuh Terlengkap (farmaku.com)
        </Card.Text>
        <Card.Text style={{color: 'grey', fontSize: '15px'}}>
        Dibaca 8 menit yang lalu
        </Card.Text>
        <Button  style={{backgroundColor: "#113946",marginLeft: '200px', border: 'none'}}><a href='/Informasi' style={{color: 'white', textDecoration: 'none'}}>Baca Lebih Lanjut</a></Button>
      </Card.Body>
    </Card>
    </Container>

    <img style={{marginLeft: '1421px', position: 'absolute', marginTop: '150px'}} src="public/bg-daun.png"></img>
    
    <h1 className="text-bawah-testimoni">Testimoni</h1> 

    <Container style={{display: 'flex', marginTop: '100px'}}>
    <Card style={{ width: '35rem',height: '25rem', backgroundColor: '#EAD7BB', }}>
      <Card.Img variant="top" src="/foto-testi.png" style={{width: '150px', marginTop: '30px', marginLeft: '190px'}}/>
      <Card.Body>
        
        <Card.Text style={{textAlign: 'center', marginTop: '20px'}}>
        Website ini sangat bagus dan interaktif, dengan adanya website ini saya terbantu untuk menangani permasalahan kulit yang sudah saya hadapin dari dulu. Terimakasih EternalYouth
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '35rem', marginLeft:'195px', backgroundColor: '#EAD7BB'  }}>
      <Card.Img variant="top" src="/foto-testi.png" style={{width: '150px', marginTop: '30px', marginLeft: '190px'}} />
      <Card.Body>
      <Card.Text style={{textAlign: 'center', marginTop: '20px'}}>
        Website ini sangat bagus dan interaktif, dengan adanya website ini saya terbantu untuk menangani permasalahan kulit yang sudah saya hadapin dari dulu. Terimakasih EternalYouth
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>


    </div>
  )
}

export default Homepage