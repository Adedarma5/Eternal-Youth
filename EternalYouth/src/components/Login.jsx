import axios from 'axios';
import React, {useState}  from 'react';
import {  Form, Button } from 'react-bootstrap';
// import { useHistory} from "react-router-dom"

const LoginSignUpPage = () => {
  const [email, setEmail] = useState (' ');
  const [password, setPassword] = useState (' ');
  const [msg, setMsg] = useState(' ');
  // const history = useHistory();

  const Auth = async(e) => {
    e.preventdefault();
    try {
      await axios.post('http://localhost:5000/login',{
        email: email,
        password: password
      });
      history.push("/Layanankonsultasi");
    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg);
      }
    }
  }

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

        <Form onSubmit={Auth} >  
            <p className='text-center'>{msg}</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Kata Sandi</Form.Label>
              <Form.Control 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <span>Tidak Punya akun?<a href="SignUpPage" style={{marginLeft: '10px', color: 'black'}}>Daftar</a></span>

          </Form>
          
          </div>
        </div>
    <img src="public/kosong.png" style={{marginTop: '317px', position: 'absolute'}}></img>
      </div>
      </div>
  );
}

export default LoginSignUpPage;