import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const ProductRecommendation = () => {
  const [skinType, setSkinType] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleSkinTypeChange = (event) => {
    setSkinType(event.target.value);
  };

  const customStyle = {
    backgroundColor: '#113946',
    color: 'gold',
  };

  const handleRecommendation = () => {
    // Berdasarkan jenis kulit, tentukan rekomendasi produk
    let newRecommendation = '';

    if (skinType === 'kering') {
      newRecommendation = 'Pelembap khusus untuk kulit kering';
    } else if (skinType === 'berminyak') {
      newRecommendation = 'Sabun pembersih untuk kulit berminyak';
    } else if (skinType === 'kombinasi') {
        newRecommendation = 'Sabun pembersih untuk kulit kombinasi';  
    } else {
      newRecommendation = 'Produk umum untuk perawatan kulit';
    }

    setRecommendation(newRecommendation);
  };

  return (
    <Container className='kalku'>
        <h1 className='judul'>Kalkulator Kulit</h1>
        <Container className='kalku2'>
        <Card style={{ width: '14rem' }} className='card2'>
      <Card.Img variant="top" src="/KulitN.png" />
      <Card.Body style={customStyle}>
        <Card.Title>Kulit Normal</Card.Title>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '14rem' }} className='card2'>
      <Card.Img variant="top" src="/KulitS.png" />
      <Card.Body style={customStyle}>
        <Card.Title>Kulit Sensitif</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem' }} className='card2'>
      <Card.Img variant="top" src="/KulitK.png" />
      <Card.Body style={customStyle}>
        <Card.Title>Kulit Kering</Card.Title>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '14rem' }} className='card2'>
      <Card.Img variant="top" src="/KulitB.png" />
      <Card.Body style={customStyle}>
        <Card.Title>Kulit Berminyak</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem' }} className='card2'>
      <Card.Img variant="top" src="/KulitK2.png" />
      <Card.Body style={customStyle}>
        <Card.Title>Kulit Kombinasi</Card.Title>
      </Card.Body>
    </Card>
        </Container>
        <label>Pilih Jenis Kulit Anda:</label>
        
        <select className='pilih'value={skinType} onChange={handleSkinTypeChange}>
          <option value="">Pilih Jenis Kulit</option>
          <option value="kering">Kulit Kering</option>
          <option value="berminyak">Kulit Berminyak</option>
          <option value="kombinasi">Kulit Kombinasi</option>
          <option value="normal">Kulit Normal</option>
        </select>
        <button className='kalku1' onClick={handleRecommendation}>Dapatkan Rekomendasi</button>
        {recommendation && (
          <div>
            <strong>Rekomendasi Produk:</strong> {recommendation}
          </div>
        )}
    </Container>
  );
};

export default ProductRecommendation;
