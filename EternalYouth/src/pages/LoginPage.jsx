// LoginSignUpPage.js
import React, { useState } from 'react';
import {  Form, Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';

const LoginSignUpPage = () => {
  const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login form submitted:', loginFormData);
  };
  const customStyle = {
    backgroundColor: '#113946',
    color: 'white',
    display :'flex',
    alignItems:'center',
    justifyContent:'space-around',
    marginTop:'10px',
    width:'30%',
  };

  return (
    <div>
    <img src="public/bg-login.png" style={{ marginLeft: '982px', position: 'absolute', width:'35%'}}></img>
    <div className='wrapper'>
        <div className='log1' style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
            <img src="./Logo2.png" alt="logo2"style={{maxHeight:'100%', height:'50%', marginTop: '-320px'}} />
            <h1 style={{marginTop: '80px', marginLeft: '10px', position: 'absolute', fontFamily: 'sans-serif' }}>Bebas Berekspresi</h1>
            <h1 style={{marginTop: '240px', marginLeft: '110px', position: 'absolute', fontFamily: 'sans-serif' }}>Tak Kenal Usia</h1>
        </div>
        <div className='log2' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div style={{width:'70%'}}>
        <h2 style={{margin:'40px 0px'}}> Masuk</h2>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group controlId="loginNama" style={{margin:'20px'}}>
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control
                type="text"
                value={loginFormData.nama}
                onChange={(e) => setLoginFormData({ ...loginFormData, nama: e.target.value })}
                style={{height:'50px',  borderRadius: '15px'}}
              />
            </Form.Group>
            <Form.Group controlId="loginEmail" style={{margin:'20px'}}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={loginFormData.email}
                onChange={(e) => setLoginFormData({ ...loginFormData, email: e.target.value })}
                style={{height:'50px',  borderRadius: '15px'}}
              />
            </Form.Group>
            <Form.Group controlId="loginPassword" style={{margin:'20px'}}>
              <Form.Label>Kata Sandi</Form.Label>
              <Form.Control
                type="password"
                value={loginFormData.password}
                onChange={(e) => setLoginFormData({ ...loginFormData, password: e.target.value })}
                style={{height:'50px',  borderRadius: '15px'}}
              />
            </Form.Group>
            <a href='' style={{marginLeft: '370px', color: 'black', textDecoration: 'none'}}>Lupa Kata Sandi?</a>
            <div className='btlogin' style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
            <br/>
            <span style={{marginTop: '-10px'}}>Atau Masuk Dengan</span>
            <br />
            <div style={{width:'100%',display :'flex',alignItems:'center', justifyContent:'center', marginTop: '-20px'}}>
            <Button className='btnO'style={customStyle}>
                <Icon icon="logos:google-gmail" />Gmail
            </Button>
            <Button className='btnO'style={customStyle}>
                <Icon icon="fluent-mdl2:facebook-logo" />Facebook
            </Button>
            <Button className='btnO'style={customStyle}>
                <Icon icon="logos:whatsapp"  />
            </Button>
            </div>
            <Button variant="primary" type="submit" style={{ backgroundColor: '#113946',
            
            marginTop:'30px',
            width:'30%',}}>
              <a href='Profil' style={{ color: 'white', textDecoration: 'none'}}>Masuk</a>
            </Button>
            <br />
            <span>Tidak Punya akun?<a href="SignUpPage" style={{marginLeft: '10px', color: 'black'}}>Daftar</a></span>
            </div>
          </Form>
          </div>
        </div>
    <img src="public/kosong.png" style={{marginTop: '317px', position: 'absolute'}}></img>
      </div>
      </div>
  );
}

export default LoginSignUpPage;
