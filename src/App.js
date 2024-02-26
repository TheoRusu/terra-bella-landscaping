import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { useQuery } from '@apollo/client';
import { GET_SERVICES } from './queries/Queries';
import LoadingScreen from './components/loadingScreen/LoadingScreen';
import { generateServiceLink } from './helperFunctions/HelperFunctions';
import ServicePage from './pages/ServicePage';

function App() {
  const { loading, error, data } = useQuery(GET_SERVICES);

  if (loading) return <LoadingScreen />;
  if (error) return <p>Error :(</p>;

  const services = data.servicesCollection.items;

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        {services.map((item, index) => (
          <Route
            key={index}
            path={generateServiceLink(item.serviceName)}
            element={
              <ServicePage
                title={item.serviceName}
                text={item.servicePageParagraph}
              />
            }
          />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
