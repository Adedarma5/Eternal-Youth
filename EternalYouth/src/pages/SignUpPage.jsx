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
    alignItems:'center',
    justifyContent:'space-around',
    marginTop:'10px',
    width:'30%',
  };

  return (
      <div className='wrapper'>
         <div className='log1' style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
            <img src="./Logo2.png" alt="logo2"style={{maxHeight:'100%', height:'50%'}} />
        </div>
        <div className='log2' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div style={{width:'70%'}}>
        <h2 style={{margin:'40px 0px'}}>Daftar</h2>
          <Form onSubmit={handleSignupSubmit}>
            <Form.Group controlId="SignUpName" style={{margin:'20px'}}>
              <Form.Label>Nama Anda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan Nama Anda"
                value={signupFormData.email}
                onChange={(e) => setSignupFormData({ ...signupFormData, name: e.target.value })}
                style={{height:'50px'}}
              />
            </Form.Group>
            <Form.Group controlId="loginEmail" style={{margin:'20px'}}>
              <Form.Label>Alamat Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Masukkan Alamat Email Anda"
                value={signupFormData.email}
                onChange={(e) => setSignupFormData({ ...signupFormData, email: e.target.value })}
                style={{height:'50px'}}
              />
            </Form.Group>
            <Form.Group controlId="loginPassword" style={{margin:'20px'}}>
              <Form.Label>Kata Sandi</Form.Label>
              <Form.Control
                type="password"
                placeholder="Kata Sandi"
                value={signupFormData.password}
                onChange={(e) => setSignupFormData({ ...signupFormData, password: e.target.value })}
                style={{height:'50px'}}
              />
            </Form.Group>
            <Form.Group controlId="loginPassword" style={{margin:'20px'}}>
              <Form.Label>Konfirmasi Kata Sandi</Form.Label>
              <Form.Control
                type="password"
                placeholder="Konfirmasi ulang Kata Sandi Anda"
                value={signupFormData.password}
                onChange={(e) => setSignupFormData({ ...signupFormData, confirmPassword: e.target.value })}
                style={{height:'50px'}}
              />
            </Form.Group>
            <div className='btlogin' style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
            <Button variant="primary" type="submit" style={customStyle}>
              Login
            </Button>
            <br/>
            <span>Atau Masuk Dengan</span>
            <br />
            <div style={{width:'100%',display :'flex',alignItems:'center', justifyContent:'space-around'}}>
            <Button className='btnO'style={customStyle}>
                Facebook<Icon icon="fluent-mdl2:facebook-logo" />
            </Button>
            <Button className='btnO'style={customStyle}>
                Gmail<Icon icon="logos:google-gmail" />
            </Button>
            </div>
            <br />
            <span>Tidak Punya akun?<a href="SignUpPage">Daftar</a></span>
            </div>
          </Form>
          </div>
        </div>
      </div>
  );
}

export default SignUpPage;
