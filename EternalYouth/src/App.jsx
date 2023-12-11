import {Routes, Route} from 'react-router-dom'
import NavbarComponents from './components/NavbarComponents';

import Homepage from './pages/Homepage'
import Layanankonsultasi from './pages/Layanankonsultasi';
import Pemesanan from './pages/Pemesanan';
import Tentangkami from './pages/Tentangkami';
import Informasi from './pages/Informasi';
import Kalkulator from './pages/Kalkulator';
import FooterComponents from './components/FooterComponents'
import Pusatbantuan from './pages/Pusatbantuan';
import LoginSignUpPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Payment from './pages/Payment';
import Profil from './pages/profil';
import Chat from './pages/Chat';
import Keranjang from './pages/Keranjang';





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
          <Route path="/Tentangkami" Component={Tentangkami}/>
          <Route path="/Payment" Component={Payment} />
          <Route path="/LoginPage" Component={LoginSignUpPage} />
          <Route path="/SignUpPage" Component={SignUpPage}/>
          <Route path="/Profil" Component={Profil}/>
          <Route path="/Chat" Component={Chat}/>
          <Route path="/Keranjang" Component={Keranjang}/>
        </Routes>

        <FooterComponents/>
      </div>
  
      );
}

export default App