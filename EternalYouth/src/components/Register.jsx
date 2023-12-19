
import React, { useState } from 'react';
import {  Form, Button } from 'react-bootstrap';
import axios from 'axios';
// import { useHistory } from "react-router-dom"


const Register = () => {
  const [name, setName] = useState (' ');
  const [email, setEmail] = useState (' ');
  const [password, setPassword] = useState (' ');
  const [confPassword, setConfPassword] = useState (' ');
  const [msg, setMsg] = useState(' ');
  // const history = useHistory();

  const User = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users',{
        name: name,
        email: email,
        password: password,
        confPassword: confPassword
      });
      
    } catch (error) {
      if(error.response){
        console.log(error.response.data.msg);
      }
    }
  }

  return (
    <div className='wrapper'>
      <img src="public/bg-login.png" style={{ marginLeft: '893px', position: 'absolute', width: '35%' }}></img>
      <div className='log1' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src="./Logo2.png" alt="logo2" style={{ maxHeight: '100%', height: '50%', marginTop: '-320px' }} />
        <h1 style={{ marginTop: '80px', marginLeft: '10px', position: 'absolute', fontFamily: 'sans-serif' }}>Bebas Berekspresi</h1>
        <h1 style={{ marginTop: '240px', marginLeft: '110px', position: 'absolute', fontFamily: 'sans-serif' }}>Tak Kenal Usia</h1>
      </div>
      <div className='log2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '70%' }}>
          <h2 style={{ margin: '40px 0px' }}>Daftar</h2>

          <Form onSubmit={User} >  
            <p className='text-center'>{msg}</p>
            <Form.Group className="mb-3">
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Kata Sandi</Form.Label>
              <Form.Control 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Konfirmasi Kata Sandi</Form.Label>
              <Form.Control 
              type="password" 
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Daftar
            </Button>
          </Form>

          <img src="public/kosong.png" style={{ marginTop: '-392px', position: 'absolute', marginLeft: '-870px' }}></img>
        </div>
      </div>
    </div>
  );
}

export default Register;
