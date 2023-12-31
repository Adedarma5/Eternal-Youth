import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../dist/css/main.css';

const Layanankonsultasi = () => {
  return (
    <div className='layanan' style={{backgroundColor: '#F4EAE0'}}>
      {/* <h1>Layanan Konsultasi</h1> */}
      <img className="background-layanan" src="public/bg_layanan.png"></img>
      <header className='w-100 min-vh-100 d-flex align-items-center'>
        <Container>
          <Row className='header-box d-flex align-items-center'>
            <Col sm="12" md="12">
            <h1 className='mb-4'>Konsultasikan Kondisi Kulitmu <br /> Dengan Dokter Andalan Kami</h1>
            <p className='mb-5'>"Maksimalkan kecantikanmu! Konsultasi di website kami untuk akses ke <br /> 
            dokter kecantikan, rekomendasi perawatan pribadi, produk perawatan kulit <br /> 
            terpercaya, dan skincare berkualitas tinggi. Bergabunglah sekarang!"</p>
            <Col>
            <Link to="/Chat" >
            <button style={{marginLeft:0}} className='btn-layanan'>Chat Dokter Sekarang</button>
            </Link>

            {/* <img src="" alt="" /> */}
            </Col>
            </Col>
          </Row>
        </Container>
      </header>
      <img className="penawaran" src="public/Natural_lavender.png"></img>
        <Container>
          <Row>
            <Col>
            <div className='text-atas'>
            <h1 style={{ fontWeight: 'bold' }} >Kenapa Harus Konsultasi Di Website Kami ?</h1>
            <p style={{ marginTop: '30px' }} >Berkonsultasi di website kami adalah pilihan unggul karena kami menyediakan akses mudah ke dokter kecantikan berpengalaman, 
             <br /> rekomendasi perawatan yang disesuaikan dengan kebutuhan individu, informasi terpercaya tentang produk perawatan kulit, <br /> dan produk skincare berkualitas tinggi yang direkomendasikan oleh para ahli.  
              Dengan dukungan komprehensif dan <br />pengalaman yang nyaman, kami berkomitmen untuk membantu pengguna mencapai kecantikan yang diinginkan dengan percaya diri dan <br /> pengetahuan yang lebih baik tentang perawatan kulit.
            </p>
            </div>
            </Col>
          </Row>
        </Container>
      
      <img className="dokter" src="public/Flat_lay.png"></img>
        <Container>
          <Row className='baris-dokter'>
            <Col className='text-tengah'>
            <h1 style={{ fontWeight: 'bold', marginTop: '-360px' }}>Rekomendasi Dokter Kami</h1>
            <p>Gabung dan konsultasikan Pada Dokter Andalan Kami</p>
            <Card style={{ width: '18rem', height: '150px',outline: 'solid 1px', outlineColor: '#CFC249', marginTop: '50px' }} className='dokter-card'>
            <Card.Img className="dokter1"  src="/dokter1.png" style={{width: '35%'}} />
              <Card.Body>
                <Card.Title className='judul-dokter'>dr. Bejo</Card.Title>
                <Card.Text className='text-dokter'>
                  Dokter Spesialis Kulit
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem',height: '150px', outline: 'solid 1px',  outlineColor: '#CFC249', marginLeft: '400px', marginTop: '-150px'}}>
            <Card.Img className="dokter2" variant="top" src="/dokter2.png" style={{width: '35%', }} />
              <Card.Body>
                <Card.Title className='judul-dokter'>dr. Satria </Card.Title>
                <Card.Text className='text-dokter'>
                  Dokter Spesialis Kulit
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '19rem',height:'140px',outline: 'solid 1px', outlineColor: '#CFC249', marginLeft: '800px', marginTop: '-150px'}} >
            <Card.Img className="dokter3" variant="top" src="/dokter3.png" style={{width: '50%'}} />
              <Card.Body>
                <Card.Title className='judul-dokter3'>dr. Tania Nabila</Card.Title>
                <Card.Text className='text-dokter3'>
                  Dokter Spesialis Kulit
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      
      <div className="panduan" style={{backgroundImage: 'url(bgDaisy.png)', marginTop: '-120px'}}>
        <Container>
          <Row>
            <Col>
            <h1>Panduan Cara Konsultasi</h1>
            <Card style={{ width: '65rem' }}>
              <Card.Body> 
                <Card.Title>Berikut adalah panduan umum untuk konsultasi dengan dokter :</Card.Title>
                <Card.Text className='cardtext1'>
                  <ol>
                    <li>Registrasi dan Buat Akun</li>
                    <li>Isi Informasi Kesehatan</li>
                    <li>Cari Dokter dan Jadwal Konsultasi</li>
                    <li>Bayar Biaya Konsultasi</li>
                    <li>Konsultasi dengan Dokter</li>
                    <li>Tanyakan Pertanyaan Anda</li>
                    <li>Resep Obat atau Tindak Lanjut</li>
                    <li>Simpan Catatan Konsultasi</li>
                    <li>Hubungi Layanan Pelanggan.</li>
                  </ol>
                  Penting untuk diingat bahwa konsultasi dengan dokter virtual tidak selalu cocok untuk semua kondisi medis. 
                  Untuk masalah kesehatan yang serius atau darurat, selalu segera hubungi layanan darurat atau dokter secara langsung.
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      </div> 
    </div>
  )
}

export default Layanankonsultasi