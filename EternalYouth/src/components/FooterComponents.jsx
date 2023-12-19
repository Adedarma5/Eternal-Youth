import React from "react"
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";


const FooterComponents = () => <footer className="footer pt-5">
    <div className="container-fluid text-center text-md-left" >
        <div className="row">
        <img style={{width: '280px', height: '80px', marginTop: '30px'}} src="public/logo.png"></img>
        <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="text-footer col-md-2 mb-md-0 mb-2">
                <h5 className="judul">Main Menu</h5>
                <ul className="list-unstyled">
                    <li><a href="/Homepage">Beranda</a></li>
                    <li><a href="/Tentangkami">Tentang Kami</a></li>
                    <li><a href="/Pemesanan">Pemesanan</a></li>
                    <li><a href="/Pusatbantuan">Pusat Bantuan</a></li>
                </ul>
            </div>

            <div className="text-footer2 col-md-3 mb-md-0 mb-3">
                <h5 className="judul">Kebijakan</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Pencarian</a></li>
                    <li><a href="/Informasi">Informasi</a></li>
                    <li><a href="#!">Jangka Waktu Pelayanan</a></li>
                    <li><a href="#!">Kebijakan Pengiriman</a></li>
                </ul>
            </div>

            <div className="text-footer3 col-md-3 mb-md-0 mb-3">
      <h5 className="judul">Ikuti Kami</h5>
      <ul className="list-unstyled">
        <li>
            <FaFacebook color="white" size={30} />
            <FaTiktok color="white" size={30} style={{marginLeft: '10px'}} /> 
            <FaInstagram color="white" size={30} style={{marginLeft: '-70px', position: 'absolute', marginTop: '40px'}}/> 
            <FaTwitter color="white" size={30} style={{marginLeft: '-30px', position: 'absolute', marginTop: '40px'}}/> 
          </li>
          </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">Hak Cipta © 2023 - Eternalyouth.com
        
    </div>

</footer>

export default FooterComponents