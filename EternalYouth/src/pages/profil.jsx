import { Card } from 'react-bootstrap';
import {  Form, Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';

function Profil() {
  return (
    <div style={{backgroundColor:'#F4EAE0'}}>
    <img src="public/bg_lavender.png" style={{width: '70%', marginLeft: '450px'}}></img>
    <Card style={{width: '70%', height: '1050px', backgroundColor: '#FFF2D8', marginLeft: '220px', marginTop: '-590px'}}>
        <button style={{width: '150px', borderRadius: '10px', marginTop: '10px', backgroundColor: 'transparent', color: 'black', border: 'none'}}> Kembali</button>
    <p style={{ textAlign: 'center', fontSize: '30px', borderBottom: 'black 1px solid', width: '150px', marginLeft: '487px'}}>Profile</p>
    <img style={{width: '150px', marginLeft: '480px'}} src="public/fotoprofil.png"></img>
    <p style={{ textAlign: 'center', fontSize: '25px', borderBottom: 'black 3px solid', width: '200px', marginLeft: '100px'}}>Info Pemilik Akun</p>
    <Form>
      <Form.Group className="mb-4" controlId="formGroupEmail" style={{width: '50%', marginLeft: '300px', marginTop: '50px', fontWeight: 'normal'}}>
        <Form.Label >Nama Lengkap</Form.Label>
        <Form.Control style={{ borderRadius: '15px', border: '1px solid black', backgroundColor: 'transparent'}} type="text" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formGroupEmail" style={{width: '50%', marginLeft: '300px', fontWeight: 'normal'}}>
        <Form.Label >Jenis Kelamin</Form.Label>
        <div>
        <label style={{ width: '20%'}}><input type="radio" name="jenis_kelamin" value="laki-laki" /> Laki-laki</label>
        <label style={{marginLeft: '10px', width: '20%'}}><input type="radio" name="jenis_kelamin" value="perempuan" /> Perempuan</label>
            </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupTanggalLahir" style={{width: '50%', marginLeft: '300px'}}>
        <Form.Label>Tanggal Lahir</Form.Label>
        <Form.Control style={{ borderRadius: '15px', border: '1px solid black', backgroundColor: 'transparent'}} type="date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupNomorHp" style={{width: '50%', marginLeft: '300px'}}>
        <Form.Label>Nomor Hp</Form.Label>
        <Form.Control style={{ borderRadius: '15px', border: '1px solid black', backgroundColor: 'transparent'}} type="number"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmailAkun" style={{width: '50%', marginLeft: '300px'}}>
        <Form.Label>Email Akun</Form.Label>
        <Form.Control style={{ borderRadius: '15px', border: '1px solid black', backgroundColor: 'transparent'}} type="email"  />
      </Form.Group>
      <Form.Group className="mb-5 " controlId="formGroupAlamat" style={{width: '50%', marginLeft: '300px'}}>
        <Form.Label>Alamat</Form.Label>
        <Form.Control style={{ borderRadius: '15px', border: '1px solid black', backgroundColor: 'transparent'}} />
      </Form.Group>
    </Form>
    <Button variant="primary" type="submit" style={{ backgroundColor: '#113946',
            marginLeft: '430px',
            marginTop:'10px',
            width:'20%',}}>
              <a href='Layanankonsultasi' style={{ color: 'white', textDecoration: 'none'}}>Simpan</a>
            </Button>
    </Card>
      <img className="bg-lavender2" src="public/bg_lavender2.png" style={{marginTop: '-449px', width: '20%'}}></img>
    </div>
  );
}

export default Profil;