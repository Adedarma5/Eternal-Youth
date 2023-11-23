import { Container } from "react-bootstrap"

const Homepage = () => {

  return (
    <div >
      <img className="background" src="public/bacground_home.png"></img>
      <div className="content-atas">
      <h1 className="text-home">Bebas Berekspresi Tak Kenal Usia</h1>
      <p>Yuk, temukan keindahan alami disini !</p>
      <button >
        Mulai Sekarang
      </button>
      </div>


      <h1 className="text-antara-conten">Kenali Lebih Lanjut</h1>
      
      <div>
      <img className="bg-lavender" src="public/bg_lavender.png"></img>
      <img className="bg-lavender2" src="public/bg_lavender2.png"></img>
      <p className="conten1">EthernalYouth adalah teman terbaik Anda dalam perjalanan
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

      <h1 className="text-bawah-conten">Cek  Jenis Kulit Untuk Mengetahui Skincare Apa Yang Cocok Buat Kamu</h1>

    </div>
  )
}

export default Homepage
