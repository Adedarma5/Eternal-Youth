import {Routes, Route} from 'react-router-dom'

// import FooterComponents from './components/FooterComponents';
import NavbarComponents from './components/NavbarComponents';

import Homepage from './pages/Homepage'
import Layanankonsultasi from './pages/Layanankonsultasi';
import Pemesanan from './pages/Pemesanan';
import Pusatbantuan from './pages/Pusatbantuan';
import Tentangkami from './pages/Tentangkami';



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
        </Routes>

        {/* <FooterComponents/> */}
      </div>
  
      );
}

export default App
