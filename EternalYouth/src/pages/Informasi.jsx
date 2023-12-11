import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Informasi = () => {
  const customStyle = {
    backgroundColor: '#113946',
    color: 'white',
  };
  return (
    <Container>
      <Row>
        <Col sm={9}>
          {/* Adding the 'text-left' class to align the text to the left */}
          <h1 className="text-left">Tips Memilih Produk Perawatan Wajah Yang Tepat</h1>
          <Container className='ctn1'>
            <img src="public/image_94.png" alt="image_94" />
          <p className="P1">Dalam mencari produk perawatan wajah yang tepat, banyak konsumen mengalami kesulitan karena pasar yang penuh dengan berbagai pilihan. Untuk membantu Anda membuat keputusan yang bijak, ada beberapa tips yang dapat diikuti agar Anda dapat memilih produk perawatan wajah yang sesuai dengan kebutuhan kulit Anda. Dengan begitu banyak merek dan klaim yang beredar, memahami jenis kulit Anda, mengidentifikasi kebutuhan khusus, dan memahami bahan-bahan yang terkandung dalam produk dapat menjadi langkah awal yang penting. Artikel ini akan memberikan panduan praktis untuk membantu Anda menavigasi melalui berbagai opsi yang tersedia, sehingga Anda dapat merawat kulit wajah dengan efektif dan sesuai dengan kebutuhan individu Anda.
          </p>
          <h4> 1. Identifikasi Jenis Kulit Anda:</h4>
          <p className="P2">Pemahaman yang mendalam tentang jenis kulit sangat penting karena produk perawatan wajah yang efektif dapat bervariasi sesuai dengan karakteristik kulit. Kulit normal, kering, berminyak, kombinasi, dan sensitif memiliki kebutuhan yang berbeda, sehingga pemilihan produk harus disesuaikan.</p>
          <h4>2. Kenali Kebutuhan Khusus Kulit</h4>
          <p className="P2">Langkah ini melibatkan penentuan masalah atau kebutuhan khusus kulit, seperti jerawat, garis-garis halus, hiperpigmentasi, atau dehidrasi. Dengan mengidentifikasi masalah tertentu, Anda dapat fokus pada produk yang dirancang khusus untuk menangani permasalahan tersebut.</p>
          <h4>3. Perhatikan Kandungan Bahan:</h4>
          <p className="P2">Ketahui bahan-bahan yang terkandung dalam produk. Misalnya, asam hialuronat untuk hidrasi intens, retinol untuk meredakan tanda-tanda penuaan, atau salisilat untuk mengatasi masalah kulit berminyak. Memahami bahan-bahan ini membantu Anda memilih produk yang sesuai dengan kebutuhan kulit Anda.</p>
          <h4>4. Uji Produk pada Area Kecil:</h4>
          <p className="P2">Sebelum mengaplikasikan produk secara keseluruhan, lakukan uji coba pada area kecil kulit. Langkah ini penting untuk menghindari reaksi alergi atau iritasi yang mungkin timbul, terutama jika Anda memiliki kulit yang sensitif.</p>
          <h4>5. Perhatikan Label dan Klaim Produk:</h4>
          <p className="P2">Bacalah label dengan cermat dan perhatikan klaim produk seperti non-komedogenik, hypoallergenic, atau bebas pewangi. Informasi ini memberikan gambaran tentang sejauh mana produk tersebut cocok untuk jenis kulit dan kebutuhan Anda.</p>
          <h4>6. Konsultasikan dengan Ahli Kecantikan:</h4>
          <p className="P2">Jika memungkinkan, berkonsultasilah dengan ahli kecantikan atau dermatologis untuk saran yang lebih spesifik. Mereka dapat memberikan rekomendasi berdasarkan kondisi kulit dan masalah kulit Anda secara individual.</p>
          <h4>7. Cek Review dan Rating:</h4>
          <p className="P2">Membaca ulasan dan peringkat dari konsumen lain dapat memberikan wawasan berharga. Ulasan tersebut mencerminkan pengalaman penggunaan produk dan membantu Anda membuat keputusan yang lebih informasional.</p>
          <h4>8. Perhatikan Konsistensi Penggunaan:</h4>
          <p className="P2">Pastikan Anda dapat dan bersedia menggunakan produk secara konsisten. Perawatan kulit membutuhkan waktu untuk memberikan hasil, sehingga konsistensi penggunaan adalah kunci keberhasilan.</p>
          <h4>9. Pilih Produk Sesuai Budget:</h4>
          <p className="P2">Menetapkan anggaran untuk produk perawatan wajah membantu Anda mempersempit pilihan. Terdapat berbagai produk dengan berbagai harga, sehingga Anda dapat menemukan produk yang sesuai dengan keuangan Anda.</p>
          <h4>10. Pantau Perubahan pada Kulit:</h4>
          <p className="P2">Setelah menggunakan produk, perhatikan perubahan pada kulit Anda. Jika terjadi iritasi atau reaksi yang tidak diinginkan, segera hentikan penggunaan dan pertimbangkan untuk berkonsultasi dengan ahli kecantikan atau dermatologis.</p>
          <br />
          <p className="P2">Dengan mengikuti langkah-langkah ini secara cermat, Anda dapat membuat keputusan yang lebih terinformasi dalam memilih produk perawatan wajah yang sesuai dengan kebutuhan dan kondisi kulit Anda..</p>
          <br />
          <p className="P2">Dalam mengejar perawatan wajah yang optimal, kunci utamanya adalah konsistensi dan pemahaman mendalam tentang kebutuhan kulit pribadi. Dengan mengikuti langkah-langkah tersebut, Anda dapat memastikan bahwa produk perawatan wajah yang dipilih tidak hanya sesuai dengan jenis kulit dan masalah spesifik, tetapi juga memberikan manfaat jangka panjang. Ingatlah bahwa setiap individu memiliki keunikan kulitnya sendiri, sehingga eksplorasi produk dan penyesuaian rutinitas perawatan pribadi mungkin diperlukan. Selain itu, berkonsultasi dengan profesional kecantikan atau dermatologis dapat memberikan pandangan yang lebih terarah untuk mencapai tujuan perawatan kulit yang diinginkan. Dengan komitmen terhadap perawatan yang tepat dan pilihan produk yang cerdas, Anda dapat mencapai kulit yang sehat, bercahaya, dan memancarkan kecantikan alaminya.</p>
          </Container>
        </Col>
        <Col sm={3}><h5 className='info'>Informasi lainnya</h5>
        <Card style={{ width: '18rem' }} className='card1'>
      <Card.Img variant="top" src="/image 90.png" />
      <Card.Body>
        <Card.Title>Manfaat Perawatan Rambut</Card.Title>
        <Card.Text className='cardtext1'>
        Perawatan rambut dapat digunakan untuk mengobati berbagai masalah rambut umum, seperti kerusakan rambut.
        </Card.Text>
        <Button variant="primary"style={customStyle} >Selengkapnya</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='card1'>
      <Card.Img variant="top" src="/image 91.png" />
      <Card.Body>
        <Card.Title>Cara Ampuh Menjaga Kesehatan Kulit dan Tubuh</Card.Title>
        <Card.Text className='cardtext1'>
        Kulit yang sehat tentunya akan terlihat lebih cantik dan segar. Penggunaan produk perawatan kulit yang tepat
        </Card.Text>
        <Button variant="primary"style={customStyle} >Selengkapnya</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='card1'>
      <Card.Img variant="top" src="/basuh.png" />
      <Card.Body>
        <Card.Title>Tips Perawatan Wajah Berminyak dan Berjerawat</Card.Title>
        <Card.Text className='cardtext1'>
        Memiliki kulit yang rentan berjerawat perlu ekstra hati-hati dan kesabaran saat merawatnya. Salah memilih produk
        </Card.Text>
        <Button variant="primary" style={customStyle}>Selengkapnya</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='card1'>
      <Card.Img variant="top" src="/image 90.png" />
      <Card.Body>
        <Card.Title>Manfaat Perawatan Rambut</Card.Title>
        <Card.Text className='cardtext1'>
        Perawatan rambut dapat digunakan untuk mengobati berbagai masalah rambut umum, seperti kerusakan rambut.
        </Card.Text>
        <Button variant="primary" style={customStyle}>Selengkapnya</Button>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
  );
}

export default Informasi;