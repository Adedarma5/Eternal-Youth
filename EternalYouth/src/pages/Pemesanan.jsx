import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyCard = ({ title, description, imageSrc, price }) => {
  const [rating, setRating] = React.useState(null);
  const [hover, setHover] = React.useState(null);

  return (
    <Card style={{ width: '250px', margin: '10px', fontFamily: 'Poppins, sans-serif' }}>
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <Card.Img variant="top" src={imageSrc} alt={title} style={{ width: '50%', height: 'auto' }} />
      </div>
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title style={{ fontFamily: 'Poppins, sans-serif' }}>{title}</Card.Title>
        <Card.Text style={{ fontFamily: 'times new roman' }}>{description}</Card.Text>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;

            return (
              <label key={index}>
                <FaStar
                  className="star"
                  color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                  size={25}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => setRating(ratingValue)}
                />
              </label>
            );
          })}
        </div>
      
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '60px' }}>
          <p style={{ fontFamily: 'times new roman', margin: 0 }}>{price}</p>
          <a href="#" className="btn btn-primary" style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#113946', width: '90px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Beli
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}


const Pemesanan = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#F4EAE0', position: 'relative', fontFamily: 'Poppins, sans-serif' }}>
      <img src="/bgp.png" alt="Header" style={{ width: '100%', height: 'auto' }} />

      <div style={{ position: 'absolute',top :'48%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, color: '#000', fontFamily: 'Poppins, sans-serif', }}>
        <h1 className='text-judul-pemesanan'>Belanja Berdasarkan Kategori</h1>     
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '70px' }}>
          <div style={{ marginRight: '20px' }}> {/* Adjusted marginRight value */}
            <img src="/PT.png" alt="Gambar 1" style={{ width: '250px', height: '260px' }} />
            <Link to="/new-page">
              <Card.Img variant="top" src="/ptt.png" alt="perawatan tubuh" style={{ width: '60%', height: 'auto', marginTop: '30px' }} />
            </Link>
          </div>

          <div style={{ marginRight: '20px' }}> {/* Adjusted marginRight value */}
            <img src="/PW.png" alt="Gambar 2" style={{ width: '250px', height: '260px' }} />
            <Link to="/new-page">
              <Card.Img variant="top" src="/pww.png" alt="perawatan wajah" style={{ width: '60%', height: 'auto', marginTop: '30px' }} />
            </Link>
          </div>
        </div>

        <h1 style={{ color: '#000', fontFamily: 'Poppins, sans-serif', marginTop: '150px', fontWeight: 'bold' }}>Semua Produk</h1>

        <div className="baris1" style={{ display: 'flex', justifyContent: 'center', marginTop: '70px' }}>
          <MyCard title="Makarizo" description="Hair & Scalp Creambath" imageSrc="/P1.png" price="Rp 6.500,-"/>
          <MyCard title="Makarizo" description="Shampoo" imageSrc="/P2.png" price="Rp 27.500,-"/>
          <MyCard title="Makarizo" description="Hair & Scalp Cream" imageSrc="/P3.png" price="Rp 80.000,-"/>
          <MyCard title="Minyak Kemiri" description="Hair Treatment Oil" imageSrc="/p8.png" price="Rp 29.000,-"/>
        </div>

        <div className="baris2" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <MyCard title="Makarizo" description="Hair & Scalp Creambath" imageSrc="/P1.png" price="Rp 6.500,-"/>
          <MyCard title="Makarizo" description="Shampoo" imageSrc="/P2.png" price="Rp 27.500,-"/>
          <MyCard title="Makarizo" description="Hair & Scalp Cream" imageSrc="/P3.png" price="Rp 80.000,-"/>
          <MyCard title="Minyak Kemiri" description="Hair Treatment Oil" imageSrc="/p8.png" price="Rp 29.000,-"/>
        </div>

        <div className="baris3" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <MyCard title="Makarizo" description="Hair & Scalp Creambath" imageSrc="/P1.png" price="Rp 6.500,-"/>
          <MyCard title="Makarizo" description="Shampoo" imageSrc="/P2.png" price="Rp 27.500,-"/>
          <MyCard title="Makarizo" description="Hair & Scalp Cream" imageSrc="/P3.png" price="Rp 80.000,-"/>
          <MyCard title="Minyak Kemiri" description="Hair Treatment Oil" imageSrc="/p8.png" price="Rp 29.000,-"/>
        </div>

        <div className="baris4" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <MyCard title="Makarizo" description="Hair & Scalp Creambath" imageSrc="/P1.png" price="Rp 6.500,-"/>
          <MyCard title="Makarizo" description="Shampoo" imageSrc="/P2.png" price="Rp 27.500,-"/>
          <MyCard title="Makarizo" description="Hair & Scalp Cream" imageSrc="/P3.png" price="Rp 80.000,-"/>
          <MyCard title="Minyak Kemiri" description="Hair Treatment Oil" imageSrc="/p8.png" price="Rp 29.000,-"/>
        </div>
        
      </div>
    </div>
  );
}

export default Pemesanan;
