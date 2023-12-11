import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import '../dist/css/main.css';
import { Container } from 'react-bootstrap';


const Tentangkami = () => {
  return (
    <div>
    <section className='head'>
      <img className="bg-tentang-kami" src="public/image_94.png"></img>
      <div className='hd2'>
          <h1 style={{color:'whitesmoke', margin:'20px'}}>Tentang Kami</h1>
          <span className='hd1'>"Ethernal Youth merupakan sebuah Website membantu menyelesaikan permasalah kulit dan mencari skincare yang cocok untuk mengatasi masalah kulit, serta mencegah pembelian skincare palsu atau yang tidak sesuai dengan standar BPOM. Website ini menawarkan layanan konsultasi dengan harga terjangkau, rekomendasi produk dari pakar, pemeriksaan keaslian dan legalitas produk, serta ulasan dan informasi produk yang lengkap."</span>
      </div>
      </section>
      <section className='bod2'style={{display:'flex', justifyContent:'center',}}>
      <img className="bg-tentang-tengah" src="public/image-81.png"></img>
        <div className='hd3' style={{textAlign:'center', width:'50%',  flexDirection:'column'}}>
        <h1 style={{margin:'20px', marginTop: '150px'}}>Visi & Misi</h1>
        <span style={{margin:'40px'}} >“Menjadi penunjuk arah utama dalam perawatan kulit berkelas yang menggabungkan teknologi dan keahlian medis untuk memberikan pengalaman perawatan yang unggul dan personal bagi setiap pengguna.”</span>
        <div style={{textAlign:'justify',display:'flex', justifyContent:'center', margin:'20px', fontSize: '20px', marginTop: '50px'}}>
        <ol>
          <li>Pelayanan Kesehatan Kulit Berkualitas: Akses mudah ke dokter kulit berkualitas untuk saran perawatan kulit terbaik.</li>
          <li>Rekomendasi Skincare Personal: Analisis kulit dan rekomendasi skincare yang sesuai.</li>
          <li>Kemitraan Brand Terkemuka: Merek perawatan kulit terkemuka direkomendasikan oleh dokter.</li>
          <li>Pendidikan Kulit: Pengetahuan tentang perawatan kulit melalui artikel dan panduan andal.</li>
        </ol>
        </div>    
        </div>
      </section>
      <section className='bod3'>
        <div>
          <h1 style={{marginTop:'200px'}}>Keunggulan</h1>
          <div style={{margin:'40px', display:'flex',justifyContent:'center'}}>
            <ol style={{textAlign:'justify', width:'50%'}}>
          <li>Konsultasi Medis Langsung: Akses ke dokter kulit berlisensi untuk saran dan rekomendasi skincare personal.</li>
          <li>Rekomendasi Personal: Rekomendasi produk skincare yang sesuai dengan kondisi kulit individu untuk hasil terbaik</li>
          <li>Keamanan & Kualitas: Produk yang direkomendasikan telah diuji keamanan dan kualitas, memberikan kepercayaan kepada pengguna.</li>
          <li>Pendidikan Kulit: Sumber daya informatif membantu pengguna memahami kulit dan perawatannya.</li>
          <li>Merek Terkemuka: Kerja sama dengan merek perawatan kulit terkemuka yang direkomendasikan oleh dokter kulit.</li>
            </ol>
        </div>
        <div style={{display:'flex',justifyItems:'center', alignItems:'center', textAlign:'justify', marginTop:'120px', marginRight:'20px', marginLeft:'20px'}}>
          <div style={{display:'flex'}}>
            <img src="parabean.png" alt="tlogo" style={{width: '118px', height:'127px'}}/>
            <div  style={{margin:'20px',width:'50%'}}><h4>PARABEN FREE</h4>
            <span className='desic'>Komposisi produk yang kami jual bebas dari paraben untuk merawat kulit anda dengan aman dan efektif.</span></div>
          </div>
          <div style={{display:'flex'}}>
            <img src="sertifikat.png" alt="tlogo" style={{width: '118px', height:'127px'}}/>
            <div style={{margin:'20px',width:'50%'}}><h4>PARABEN FREE</h4>
            <span className='desic'>Komposisi produk yang kami jual bebas dari paraben untuk merawat kulit anda dengan aman dan efektif.</span></div>
          </div>
          <div style={{display:'flex'}}>
            <img src="non_alkohol.png" alt="tlogo" style={{width: '118px', height:'127px'}}/>
            <div style={{margin:'20px',width:'50%'}}><h4>PARABEN FREE</h4>
            <span className='desic'>Komposisi produk yang kami jual bebas dari paraben untuk merawat kulit anda dengan aman dan efektif.</span></div>
          </div>
        </div>
        </div>
      </section>
      </div>

  )
}

export default Tentangkami