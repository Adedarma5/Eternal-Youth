import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Tabs from 'react-bootstrap/Tabs'; 
import Tab from 'react-bootstrap/Tab'; 
import { Icon } from '@iconify/react';

export default function App() { 
return ( 
	<div className='fom' style={{ display: 'flex',justifyContent:'center',height:'auto'}}>  
	<Tabs  defaultActiveKey="second" className="custom-tabs" style={{display :'flex', flexDirection:'column', height:'auto', backgroundColor:'#113946', width:'20%',borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px' }}> 
		<Tab eventKey="first" title="kartu Kredit/Debit">
                <form style={{display:'block'}}>
                <h2 >Kartu Kredit/Debit 
                    <Icon icon="logos:paypal" style={{margin:'0px 10px'}}/>
                    <Icon icon="logos:mastercard" style={{margin:'0px 10px'}}/>
                    <Icon icon="logos:maestro" />
                    </h2>
                 <div className="row">
                    <div className="col-12">
                      <div className="input-group">
                      <label>CARD NUMBER</label>    
                        <input type="text" id="cr_no" placeholder="0000 0000 0000 0000" minLength="19" maxLength="19" style={{height:'50px', borderRadius:'10px'}} />
                      </div>
                    </div>
                 </div>
                 <div className="row">
                    <div className="col-6">
                      <div className="input-group">
                        <label>EXPIRY MONTH</label>
                        <input type="text" id="ex_month" placeholder="MM" minLength="2" maxLength="2" style={{height:'50px', borderRadius:'10px'}} />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-group">
                        <label>EXPIRY YEAR</label>
                        <input type="text" id="ex_year" placeholder="YYYY" minLength="4" maxLength="4"style={{height:'50px', borderRadius:'10px'}}  />
                      </div>
                    </div>
                 </div>
                 <div className="row">
                    <div className="col-6" style={{width:'100%'}}>
                      <div className="input-group" >
                        <label>CVV</label>
                        <input type="text" id="cvv" placeholder="CVV" minLength="3" maxLength="3"style={{height:'50px', borderRadius:'10px'}}  />
                      </div>
                    </div>
                    <div >
                        <h5>Rincian Harga</h5>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                        <p>Harga total</p>
                        <p>Rp. 4.388.983,80</p>
                        </div>
                    </div>
                    <div  style={{display:'flex',justifyContent:'flex-end'}}>
                      <input type="submit" value="Bayar" className="btn btn-success placeicon" style={{backgroundColor:'#113946', fontWeight:'bold'}}/>
                    </div>
                 </div>
                </form>
		</Tab> 
		<Tab eventKey="second" title="Transfer Bank" > 
		<h2>Transfer bank</h2>
        <div className='ppp'>
        <label class="container2">Transfer BCA
        <img src="./bca.png" alt="bca" />        
        <input type="radio" name="radio"/>
        <span class="checkmark"></span>
        </label>
        <label class="container2">Transfer Mandiri    
        <img src="./mandiri.png" alt="mandiri" />    
        <input type="radio" name="radio"/>
        <span class="checkmark"></span>
        </label>
        <label class="container2">Transfer BRI
        <img src="./bri.png" alt="bri" style={{marginRight:'20px'}} />
        <input type="radio" name="radio"/>
        <span class="checkmark"></span>
        </label>
        <label class="container2">Transfer BNI
        <img src="./bni.png" alt="bni" style={{marginRight:'20px'}}/>
        <input type="radio" name="radio"/>
        <span class="checkmark"></span>
        </label>
        <div >
        <h5>Rincian Harga</h5>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <p>Harga total</p>
        <p>Rp. 4.388.983,80</p>
        </div>
        </div>
        <div  style={{display:'flex',justifyContent:'flex-end'}}>
        <input type="submit" value="Bayar" className="btn btn-success placeicon" style={{backgroundColor:'#113946', fontWeight:'bold'}}/>
        </div>
        </div>
		</Tab> 
        <Tab eventKey="third" title="OTC non-Bank" >
        <h2>Transfer bank</h2>
        <div className='ppp'>
        <label class="container2">Alfamart 
        <img src="alfa.png" alt="alfa"style={{marginRight:'20px'}} />       
        <input type="radio" name="radio"/>
        <span class="checkmark"></span>
        </label>
        <label class="container2">Indomaret
        <img src="alfa2.png" alt="alfa" style={{marginRight:'20px'}}/>        
        <input type="radio" name="radio"/>
        <span class="checkmark"></span>
        </label>
        <div >
        <h5>Rincian Harga</h5>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <p>Harga total</p>
        <p>Rp. 4.388.983,80</p>
        </div>
        </div>
        <div  style={{display:'flex',justifyContent:'flex-end'}}>
        <input type="submit" value="Bayar" className="btn btn-success placeicon" style={{backgroundColor:'#113946', fontWeight:'bold'}}/>
        </div>
        </div>
        </Tab>
        <Tab eventKey="fourth" title="E-Wallet" >
        <h2>Transfer bank</h2>
        <div className='ppp'>
        <label class="container2">Dana
        <img src="dana.png" alt="dana"style={{marginRight:'20px'}}/>       
        <input type="radio" name="radio"/>
        <span class="checkmark"></span>
        </label>
        <label class="container2">OVO
        <img src="ovo.png" alt="ovo" style={{marginRight:'20px'}}/>        
        <input type="radio" name="radio"/>
        <span class="checkmark"></span>
        </label>
        <label class="container2">Gopay
        <img src="gopay.png" alt="gopay" style={{marginRight:'20px'}}/>
        <input type="radio" name="radio"/>
        <span class="checkmark"></span>
        </label>
        <div >
        <h5>Rincian Harga</h5>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <p>Harga total</p>
        <p>Rp. 4.388.983,80</p>
        </div>
        </div>
        <div  style={{display:'flex',justifyContent:'flex-end'}}>
        <input type="submit" value="Bayar" className="btn btn-success placeicon" style={{backgroundColor:'#113946', fontWeight:'bold'}}/>
        </div>  
        </div>
        </Tab>
	</Tabs>
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          <div className="text-wrapper">NO. PESANAN</div>
          <div className="div">RINCIAN PESANAN</div>
          <div className="text-wrapper-2">AKUN</div>
          <div className="text-wrapper-3">Data Pemesanan</div>
          <p className="jenis-produk-hair">
            <span className="span">Jenis Produk : </span>
            <span className="text-wrapper-4">Hair &amp; Scalp Creambath</span>
          </p>
          <div className="text-wrapper-5">109012312300123</div>
          <div className="text-wrapper-6">Makarizo</div>
          <div className="text-wrapper-7">Nama Panjang</div>
          <div className="text-wrapper-8">Nomor Telfon</div>
          <p className="nama-panjang">
            <a href="mailto:Email@gmail.com" rel="noopener noreferrer" target="_blank">
              <span className="text-wrapper-9">Nama Panjang</span>
            </a>
          </p>
          <div className="text-wrapper-11">Email@gmail.com</div>
          <div className="ellipse" />
          <div className="ellipse-2" />
          <p className="p">Check out : Sen, 15 Agustus 2023</p>
          <div className="text-wrapper-12">Jumlah Produk : 1</div>
          <div className="ellipse-3" />
        </div>
      </div>
    </div> 
	</div> 
); 
}
