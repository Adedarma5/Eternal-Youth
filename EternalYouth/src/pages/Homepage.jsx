import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Container, Card, Button} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Homepage = () => {

  useEffect(() => {
    AOS.init({  
    })
  }, [])

  const customStyle = {
    // Definisi gaya sesuai kebutuhan Anda
    padding: '10px',
  };

  const formatRupiah = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };



  return (

    <div style={{backgroundColor: '#F4EAE0'}} >



      <img className="background" src="public/bacground_home.png"></img>
      <div className="content-atas">
      <h1 className="text-home"
      >Bebas Berekspresi Tak Kenal Usia</h1>
      <p
      >Yuk, temukan keindahan alami disini !</p>
      <button className='btn-awal'>
        <a href="/LoginPage" style={{textDecoration: 'none', color: 'white'}}>Mulai Sekarang
        </a>
      </button>
      </div>


      <h1 className="text-antara-conten" 
       data-aos="fade-up"
       data-aos-duration="2000"
      >Kenali Lebih Lanjut</h1>
      
      <div style={{backgroundColor: '#F4EAE0'}}>
      <img className="bg-lavender" src="public/bg_lavender.png"></img>
      <img className="bg-lavender2" src="public/bg_lavender2.png"></img>
      <p className="conten1" 
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      >EthernalYouth adalah teman terbaik Anda dalam perjalanan
        merawat kulit yang sehat dan bercahaya.<br></br>
         Kami hadir untuk memberikan rekomendasi berdasarkan produk perawatan kulit terbaik dari <br></br>
        berbagai perusahaan ternama. Dengan fokus pada kualitas, keamanan, dan kehalalan, kami<br></br> 
        menyajikan pilihan skincare yang telah disetujui oleh 
        BPOM.</p>
      <p className="conten2"
      data-aos="fade-left"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      >EthernalYouth mengerti bahwa setiap kulit memiliki  keunikan, dan itulah mengapa kami <br></br>
      menawarkan layanan konsultasi ahli. Kami akan membantu Anda menemukan produk <br></br>
      yang paling cocok untuk kebutuhan kulit Anda. Mari bersama-sama meraih kulit sehat dan <br></br>
      bercahaya dengan percaya diri. Selamat datang di Ethernalyouth...</p>
      </div>

      <p className="text-bawah-conten" data-aos="fade-up"
    data-aos-duration="2000">Cek  Jenis Kulit Untuk Mengetahui Skincare Apa Yang Cocok Buat Kamu</p> 

    <Container className='kategori-kulit'>
    <div data-aos="fade-up"
    data-aos-duration="2000"
    >
    <img className="kategori-kulit" src="public/kulitnormal.png"></img>
    <h4 className='text-kulit'>Kulit Normal</h4>
    </div>
    <div  data-aos="fade-up"
    data-aos-duration="2000"
    >
    <img className="kategori-kulit" src="public/kulitsensitif.png"></img>
    <h4 className='text-kulit' >Kulit Sensitif</h4>
    </div>
    <div data-aos="fade-up"
    data-aos-duration="2000"
    >
    <img className="kategori-kulit" src="public/kulitberminyak.png"></img>
    <h4 className='text-kulit' >Kulit Berminyak</h4>
    </div>
    <div data-aos="fade-up"
    data-aos-duration="2000"
    >
    <img className="kategori-kulit" src="public/kulitkering.png"></img>
    <h4 className='text-kulit' >Kulit Kering</h4>
    </div>
    <div data-aos="fade-up"
    data-aos-duration="2000"
    >
    <img className="kategori-kulit" src="public/kulitkombinasi.png"></img>
    <h4 className='text-kulit'>Kulit Kombinasi</h4>
    </div>
    </Container>

    
    <button className='btn-kulit' style={{marginTop: '100px', padding: '10px 60px 10px 60px'}} >
        <a href='/Kalkulator' style={{color: 'white', textDecoration: 'none'}}>Cek Sekarang</a>
      </button>

      <img style={{marginLeft: '430px', position: 'absolute', marginTop: '150px'}} src="public/bgDaisy.png"></img>

      <h1 className="text-bawah-kulit" 
      data-aos="fade-up"
      data-aos-duration="2000"
      >Produk Terbaru</h1> 

      <img style={{position: 'absolute', marginTop: '500px'}} src="public/bg-produk.png"></img>

      <div className="card-container">
      <Slider {...settings}>
        <div className="card-produk ">
          <img className='slider-img ' src="./foto_slider.png" alt="Card 1" />
          <h3 className='slider-judul'>Title 1</h3>
          <p className="original-price">{formatRupiah(50000)}</p>
          <p className="discounted-price">{formatRupiah(40000)}</p>
          <img className='bintang'  src="./bintang.png"  />
        </div>
        <div className="card-produk ">
          <img className='slider-img ' src="./foto_slider2.png" alt="Card 2" />
          <h3 className='slider-judul'>Title 2</h3>
          <p className="original-price">{formatRupiah(60000)}</p>
          <p className="discounted-price">{formatRupiah(45000)}</p>
          <img className='bintang'  src="./bintang.png"  />
        </div>
        <div className="card-produk ">
          <img className='slider-img ' src="./foto_slider3.png" alt="Card 3" />
          <h3 className='slider-judul'>Title 3</h3>
          <p className="original-price">{formatRupiah(70000)}</p>
          <p className="discounted-price">{formatRupiah(55000)}</p>
          <img className='bintang'  src="./bintang.png"  />
        </div>
        <div className="card-produk ">
          <img className='slider-img ' src="./foto_slider2.png" alt="Card 3" />
          <h3 className='slider-judul'>Title 3</h3>
          <p className="original-price">{formatRupiah(70000)}</p>
          <p className="discounted-price">{formatRupiah(55000)}</p>
          <img className='bintang' src="./bintang.png"  />
        </div>
        {/* Add more cards as needed */}
      </Slider>
    </div>
   

    <button className='btn-kulit' style={{marginTop: '100px', padding: '10px 60px 10px 60px',textDecoration:'none'}} >
        <a href='/Pemesanan' style={{color: 'white', textDecoration: 'none'}}>Selengkapnya</a>
      </button>

    <h1 className="text-bawah-artikel" data-aos="fade-up"
    data-aos-duration="2000"
    >Artikel</h1 > 
    <p style={{textAlign: 'center', fontSize: '20px'}}
    data-aos="fade-up"
    data-aos-duration="2000"
    >Pelajari lebih lanjut untuk menemukan masalah kulit mu</p>

    <Container style={{display: 'flex', marginTop: '100px'}}>
    <Card style={{ width: '25rem', backgroundColor: '#EAD7BB' }} className='card-informasi' data-aos="fade-up-left"
    data-aos-duration="2000">
      <Card.Img variant="top" src="/bpom.png" style={{width: '300px', marginTop: '10px', marginLeft: '19px'}}/>
      <Card.Body>
        <Card.Title style={{color: '#1B1C57'}}>Cara Mengecek Produk Sudah Resmi BPOM</Card.Title>
        <Card.Text style={{color: 'grey'}}>
        https://cekbpom.pom.go.id/ 
        </Card.Text>
        <Card.Text style={{color: 'grey', fontSize: '15px'}}>
        Dibaca 8 menit yang lalu
        </Card.Text>
        <Button  style={{backgroundColor: "#113946",marginLeft: '170px', border: 'none', position: 'absolute', marginTop: '48px'}}><a href='/Informasi' style={{color: 'white', textDecoration: 'none', fontSize: '13px'}}>Baca Lebih Lanjut</a></Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '25rem', marginLeft:'50px', backgroundColor: '#EAD7BB'  }} className='card-informasi' data-aos="fade-up"
    data-aos-duration="3000">
      <Card.Img variant="top" src="/perawatan-wajah.png" style={{width: '300px', marginTop: '10px', marginLeft: '19px'}} />
      <Card.Body>
        <Card.Title style={{color: '#1B1C57'}}>Perawatan Wajah - Tipe Kulit, Tips, dan Langkah Perawatan</Card.Title>
        <Card.Text style={{color: 'grey'}}>
        Perawatan Wajah - Tipe Kulit, Tips, dan Langkah Perawatan | Halodoc
        </Card.Text>
        <Card.Text style={{color: 'grey', fontSize: '15px'}}>
        Dibaca 8 menit yang lalu
        </Card.Text>
        <Button  style={{backgroundColor: "#113946",marginLeft: '170px', border: 'none' ,position: 'absolute', marginTop: '25px'}}><a href='/Informasi' style={{color: 'white', textDecoration: 'none', fontSize: '13px'}}>Baca Lebih Lanjut</a></Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '25rem', marginLeft:'50px', backgroundColor: '#EAD7BB'  }} className='card-informasi'data-aos="fade-up-right"
    data-aos-duration="2000">
      <Card.Img variant="top" src="/merawat-wajah.png" style={{width: '300px', marginTop: '10px', marginLeft: '19px'}} />
      <Card.Body>
        <Card.Title style={{color: '#1B1C57'}}>Tips Merawat Kesehatan Kulit Wajah & Tubuh Terlengkap yang Perlu Dilakukan!</Card.Title>
        <Card.Text style={{color: 'grey'}}>
        Tips Merawat Kesehatan Kulit Wajah & Tubuh Terlengkap (farmaku.com)
        </Card.Text>
        <Card.Text style={{color: 'grey', fontSize: '15px'}}>
        Dibaca 8 menit yang lalu
        </Card.Text>
        <Button  style={{backgroundColor: "#113946",marginLeft: '170px', border: 'none'}}><a href='/Informasi' style={{color: 'white', textDecoration: 'none',fontSize: '13px'}}>Baca Lebih Lanjut</a></Button>
      </Card.Body>
    </Card>
    </Container>

   
    
    <h1 className="text-bawah-testimoni">Testimoni</h1> 

    <Container style={{display: 'flex', marginTop: '100px'}}>
    <Card style={{ width: '35rem',height: '25rem', backgroundColor: '#EAD7BB', }}className='card-informasi' 
    data-aos="fade-up"
    data-aos-duration="2000"
    >
      <Card.Img variant="top" src="/foto-testi.png" style={{width: '150px', marginTop: '30px', marginLeft: '190px'}}/>
      <Card.Body>
        
        <Card.Text style={{textAlign: 'center', marginTop: '20px'}}>
        Website ini sangat bagus dan interaktif, dengan adanya website ini saya terbantu untuk menangani permasalahan kulit yang sudah saya hadapin dari dulu. Terimakasih EternalYouth
        </Card.Text>
      </Card.Body>
    </Card>
    

    <Card style={{ width: '35rem', marginLeft:'195px', backgroundColor: '#EAD7BB'  }}className='card-informasi'
     data-aos="fade-up"
     data-aos-duration="2000"
    >
      <Card.Img variant="top" src="/foto-testi.png" style={{width: '150px', marginTop: '30px', marginLeft: '190px'}} />
      <Card.Body>
      <Card.Text style={{textAlign: 'center', marginTop: '20px'}}>
        Website ini sangat bagus dan interaktif, dengan adanya website ini saya terbantu untuk menangani permasalahan kulit yang sudah saya hadapin dari dulu. Terimakasih EternalYouth
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
    <img style={{marginLeft: '1421px',  marginTop: '-150px'}} src="public/bg-daun.png"></img>


    </div>
  )
}

export default Homepage