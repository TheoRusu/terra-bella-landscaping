import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sodding from './pages/Sodding';
import Navbar from './components/navbar/Navbar';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/sodding' element={<Sodding />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
