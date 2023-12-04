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
      <div className='wrapper'>
        <div className='log1' style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
            <img src="./Logo2.png" alt="logo2"style={{maxHeight:'100%', height:'50%'}} />
        </div>
        <div className='log2' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div style={{width:'70%'}}>
        <h2 style={{margin:'40px 0px'}}> Login</h2>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group controlId="loginEmail" style={{margin:'20px'}}>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={loginFormData.email}
                onChange={(e) => setLoginFormData({ ...loginFormData, email: e.target.value })}
                style={{height:'50px'}}
              />
            </Form.Group>
            <Form.Group controlId="loginPassword" style={{margin:'20px'}}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={loginFormData.password}
                onChange={(e) => setLoginFormData({ ...loginFormData, password: e.target.value })}
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
            <div style={{width:'100%',display :'flex',alignItems:'center', justifyContent:'center'}}>
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

export default LoginSignUpPage;
