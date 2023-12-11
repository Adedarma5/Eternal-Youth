// LoginSignUpPage.js
import React, { useState } from 'react';
import {  Form, Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';

const SignUpPage = () => {
  const [signupFormData, setSignupFormData] = useState({ name:'',email: '', password: '', confirmPassword: '' });

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!signupFormData.name || !signupFormData.email || !signupFormData.password || !signupFormData.confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    // Additional validation (e.g., password matching)
    if (signupFormData.password !== signupFormData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // In a real-world scenario, you would send the signup data to a server for authentication and storage
    // For now, just log the signup data to the console
    console.log('Signup form submitted:', signupFormData);

    // Set state to indicate successful signup
    setIsSignedUp(true);
  };
  
  const customStyle = {
    backgroundColor: '#113946',
    color: 'white',
    display :'flex',
    marginLeft: '-325px',
    justifyContent:'space-around',
    marginTop:'10px',
    width:'30%',
  };

  return (
      <div className='wrapper'>
    <img src="public/bg-login.png" style={{ marginLeft: '982px', position: 'absolute', width:'35%'}}></img>
         <div className='log1' style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
            <img src="./Logo2.png" alt="logo2"style={{maxHeight:'100%', height:'50%', marginTop: '-320px'}} />
            <h1 style={{marginTop: '80px', marginLeft: '10px', position: 'absolute', fontFamily: 'sans-serif' }}>Bebas Berekspresi</h1>
            <h1 style={{marginTop: '240px', marginLeft: '110px', position: 'absolute', fontFamily: 'sans-serif' }}>Tak Kenal Usia</h1>
        </div>
        <div className='log2' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div style={{width:'70%'}}>
        <h2 style={{margin:'40px 0px'}}>Daftar</h2>
          <Form  onSubmit={handleSignupSubmit} style={{marginTop: '50px',}}>
            <Form.Group controlId="SignUpName" style={{ margin:'20px'}}>
              <Form.Label>Nama Anda</Form.Label>
              <Form.Control 
                type="text"
                value={signupFormData.name}
                onChange={(e) => setSignupFormData({ ...signupFormData, name: e.target.value })}
                style={{height:'50px',
                backdropfilter: 'blur(5px) saturate(120%)', borderRadius: '15px'}}
              />
            </Form.Group>
            <Form.Group controlId="loginEmail" style={{margin:'20px'}}>
              <Form.Label>Alamat Email</Form.Label>
              <Form.Control
                type="email"
                value={signupFormData.email}
                onChange={(e) => setSignupFormData({ ...signupFormData, email: e.target.value })}
                style={{height:'50px', borderRadius: '15px'}}
              />
            </Form.Group>
            <Form.Group controlId="loginPassword" style={{margin:'20px'}}>
              <Form.Label>Kata Sandi</Form.Label>
              <Form.Control
                type="password"
                value={signupFormData.password}
                onChange={(e) => setSignupFormData({ ...signupFormData, password: e.target.value })}
                style={{height:'50px',borderRadius: '15px' }}
              />
            </Form.Group>
            <Form.Group controlId="loginPassword" style={{margin:'20px'}}>
              <Form.Label>Konfirmasi Kata Sandi</Form.Label>
              <Form.Control
                type="password"
                value={signupFormData.password}
                onChange={(e) => setSignupFormData({ ...signupFormData, confirmPassword: e.target.value })}
                style={{height:'50px', borderRadius: '15px'}}
              />
            </Form.Group>
            <div className='btlogin' style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
            <Button variant="primary" type="submit" style={customStyle}>
             <a href='Loginpage' style={{color: 'white', textDecoration: 'none', marginLeft: '-90px'}}></a>Daftar
            </Button>
            <br/>
              
              <br />
            <span style={{marginLeft: '-300px'}}>Sudah Punya akun?<a href="Loginpage" style={{marginLeft: '10px', color: 'black'}}>Masuk</a></span>
            </div>
          </Form>
    <img src="public/kosong.png" style={{marginTop: '-392px', position: 'absolute', marginLeft: '-870px'}}></img>
          </div>
        </div>
      </div>
  );
}

export default SignUpPage;
