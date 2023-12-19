// ProductRecommendation.jsx

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
AOS.init();

const ProductRecommendation = () => {
  const [skinType, setSkinType] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [products, setProducts] = useState([]);

  const handleSkinTypeChange = (event) => {
    setSkinType(event.target.value);
  };

  const customStyle = {
    backgroundColor: 'transparent',
    color: '#113946',
  };

  const handleRecommendation = () => {
    let newRecommendation = '';
    let newProducts = [];

    if (skinType === 'kering') {
      newRecommendation = 'Pelembap khusus untuk kulit kering';
      newProducts = [
        { name: 'Product A', image: '/product_a.jpg' },
        { name: 'Product B', image: '/product_b.jpg' },
        // Tambahkan produk lain jika diperlukan
      ];
    } else if (skinType === 'berminyak') {
      newRecommendation = 'Sabun pembersih untuk kulit berminyak';
      newProducts = [
        { name: 'Product X', image: '/product_x.jpg' },
        { name: 'Product Y', image: '/product_y.jpg' },
        // Tambahkan produk lain jika diperlukan
      ];
    } else if (skinType === 'kombinasi') {
      newRecommendation = 'Sabun pembersih untuk kulit kombinasi';
      <p>cara pemakaian</p>
      newProducts = [
        { name: 'Product M', image: '/product_m.jpg' },
        { name: 'Product N', image: '/product_n.jpg' },
        // Tambahkan produk lain jika diperlukan
      ];
    } else {
      newRecommendation = 'Sabun pembersih untuk perawatan kulit sensitif ' ;
      <p>cara pemakaian</p>
      newProducts = [
        { name: 'Product M', image: '/product_m.jpg' },
        { name: 'Product N', image: '/product_n.jpg' },
        // Tambahkan produk lain jika diperlukan
      ];
    }

    setRecommendation(newRecommendation);
    setProducts(newProducts);
  };

  return (
    <Container className='kalku' >
      <h1 className='judul'>Kalkulator Kulit</h1>
      <Container className='kalku2' >
        {/* Render gambar kartu kulit di sini */}
        <Card style={{ width: '14rem', boxShadow: 'none', border: 'none' }} className='card2'>
          <Card.Img variant="top" src="/kulitnormal.png" />
          <Card.Body style={customStyle}>
            <Card.Title>Kulit Normal</Card.Title>
          </Card.Body>
        </Card>
    
        <Card style={{ width: '14rem', boxShadow: 'none', border: 'none' }} className='card2'>
          <Card.Img variant="top" src="/kulitsensitif.png" />
          <Card.Body style={customStyle}>
            <Card.Title>Kulit Sensitif</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: '15rem', boxShadow: 'none', border: 'none'}} className='card2'>
          <Card.Img variant="top" src="/kulitberminyak.png" />
          <Card.Body style={customStyle}>
            <Card.Title>Kulit Berminyak</Card.Title>
          </Card.Body>
        </Card>
    
        <Card style={{ width: '14rem', boxShadow: 'none', border: 'none'}} className='card2'>
          <Card.Img variant="top" src="/kulitkering.png" />
          <Card.Body style={customStyle}>
            <Card.Title>Kulit Kering</Card.Title>
          </Card.Body>
        </Card>
        
    
        <Card style={{ width: '15rem', boxShadow: 'none', border: 'none' }} className='card2'>
          <Card.Img variant="top" src="/kulitkombinasi.png" />
          <Card.Body style={customStyle}>
            <Card.Title>Kulit Kombinasi</Card.Title>
          </Card.Body>
        </Card>
      </Container>
      
   

      <h3><label>Pilih Jenis Kulit Anda:</label></h3>
      <select className='pilih' value={skinType} onChange={handleSkinTypeChange}>
        <option value="">Pilih Jenis Kulit</option>
        <option value="kering">Kulit Kering</option>
        <option value="berminyak">Kulit Berminyak</option>
        <option value="kombinasi">Kulit Kombinasi</option>
        <option value="sensitif">Kulit Sensitif</option>
      </select>
      <button className='kalku1' onClick={handleRecommendation}>Dapatkan Rekomendasi</button>
      {recommendation && (
        <div>
          <strong>Rekomendasi Produk:</strong> {recommendation}
        </div>
      )}
      {/* Tampilkan produk di sini di bawah tombol */}
      <Container className='kalku2'>
        {products.map((product, index) => (
          <Card key={index} style={{ width: '14rem' }} className='card2'>
            <Card.Img variant="top" src={product.image} />
            <Card.Body style={customStyle}>
              <Card.Title>{product.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </Container>
  );
};

export default ProductRecommendation;
