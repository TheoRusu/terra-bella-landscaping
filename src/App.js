import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Navbar from './components/navbar/Navbar';
import Sodding from './pages/ServicePages/Sodding';
import Interlocking from './pages/ServicePages/Interlocking';
import Planting from './pages/ServicePages/Planting';
import RetainingWall from './pages/ServicePages/RetainingWall';
import FrenchDrainage from './pages/ServicePages/FrenchDrainage';
import DecksFences from './pages/ServicePages/DecksFences';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sodding' element={<Sodding />} />
        <Route path='/interlocking' element={<Interlocking />} />
        <Route path='/planting' element={<Planting />} />
        <Route path='/retaining-wall' element={<RetainingWall />} />
        <Route path='/french-drainage' element={<FrenchDrainage />} />
        <Route path='/decks-fences' element={<DecksFences />} />
      </Routes>
    </>
  );
}

export default App;
