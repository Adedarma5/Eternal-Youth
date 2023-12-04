import {Routes, Route} from 'react-router-dom'

// import FooterComponents from './components/FooterComponents';
import NavbarComponents from './components/NavbarComponents';

import Homepage from './pages/Homepage'
import Layanankonsultasi from './pages/Layanankonsultasi';
import Pemesanan from './pages/Pemesanan';
import Pusatbantuan from './pages/Pusatbantuan';
import Tentangkami from './pages/Tentangkami';
import Informasi from './pages/Informasi';
import Kalkulator from './pages/Kalkulator';
import Payment from './pages/Payment';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';



function App() {
  
  return (
      <div>
        <NavbarComponents/>

        <Routes>
          <Route path="/Homepage" Component={Homepage} />
          <Route path="/Tentangkami" Component={Tentangkami} />
          <Route path="/Pemesanan" Component={Pemesanan} />
          <Route path="/Pusatbantuan" Component={Pusatbantuan} />
          <Route path="/Layanankonsultasi" Component={Layanankonsultasi} />
          <Route path="/Informasi" Component={Informasi} />
          <Route path="/Kalkulator" Component={Kalkulator} />
          <Route path="/Payment" Component={Payment} />
          <Route path="/LoginPage" Component={LoginPage} />
          <Route path="/SignUpPage" Component={SignUpPage}/>
          <Route path="/Tentangkami" Component={Tentangkami}/>
        </Routes>

        {/* <FooterComponents/> */}
      </div>
  
      );
}

export default App
