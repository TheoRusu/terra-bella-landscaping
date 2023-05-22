import React from 'react';
import HomeServiceCard from '../homeServiceCard/HomeServiceCard';
import './homeBox.css';
import GalleryCarousel from '../galleryCarousel/GalleryCarousel';
import { Link } from 'react-router-dom';
import { BsInstagram, BsTelephone } from 'react-icons/bs';
import Navbar from '../navbar/Navbar';
// import asda from '../../../public/';

const HomeBox = () => {
  // const [navHeight, setNavHeight] = useState(0);
  // const ref = useRef(null);
  // const navigate = useNavigate();
  // const onGalleryClick = () => {
  //   navigate('/gallery');
  // };

  // const onNavLoad = () => {
  //   setNavHeight(-ref.current.clientHeight);
  //   console.log(-ref.current.clientHeight);
  // };
  return (
    <>
      <Navbar
      // navHeight={navHeight}
      // setNavHeight={setNavHeight}
      // ref={ref}
      // onLoad={onNavLoad}
      />
      <div className='container-xxl g-0'>
        <div className='row g-0' id='home'>
          <div className='col mb-5'>
            {/* <h1 className='text-center mt-5 businessTitle'>
            Terra Bella Landscaping
          </h1>
          <h1 className='text-center slogan'>Your Ultimate Dreamscape</h1> */}

            <div className='header-container'>
              <img
                src={'/Lawn.jpg'}
                alt='landscaping'
                className='header-image'
              ></img>

              <div className='fw-bold image-link text-white'>
                <h1 className='text-center mt-2 businessTitle'>
                  Terra Bella Landscaping
                </h1>
                <h1 className='text-center text-nowrap slogan'>
                  Your Ultimate Dreamscape
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className='row g-0 justify-content-center mb-5'>
          <p className='text-center company-message'>
            Transforming outdoor spaces with creativity and expertise.
            <br />
            <br />
            Welcome to Terra Bella Landscaping, your premier destination for
            breathtaking landscapes.
          </p>
          <img
            src='/Lawnmower.jpg'
            className='rounded img-fluid home-image'
            alt='logo'
          />
        </div>
        <hr
          className='border border-dark border-2 opacity-100 w-25 mx-auto'
          id='services'
        />

        <div className='row g-0'>
          <h1 className='text-center mb-3'>Services</h1>
          <div className='col-md'>
            <HomeServiceCard
              title={'Sodding'}
              description={'The best sodding in the country'}
              serviceLink={'/sodding'}
              image={'/Sodding.jpg'}
            />
          </div>
          <div className='col-md'>
            <HomeServiceCard
              title={'Interlocking'}
              description={'The best interlocking in the country'}
              image={'/Interlocking.jpg'}
            />
          </div>
          <div className='col-md'>
            <HomeServiceCard
              title={'Planting'}
              description={'The best planting in the country'}
              image={'/Planting.jpg'}
            />
          </div>
        </div>
        <div className='row g-0 mb-5'>
          <div className='col-md'>
            <HomeServiceCard
              title={'Retaining Wall'}
              description={'The best retaining wall in the country'}
              image={'/RetainingWall.jpg'}
            />
          </div>
          <div className='col-md'>
            <HomeServiceCard
              title={'French Drainage'}
              description={'The best french drainage in the country'}
              image={'/FrenchDrain.jpg'}
            />
          </div>
          <div className='col-md'>
            <HomeServiceCard
              title={'Decks and Fences'}
              description={'The best decks and fences in the country'}
              image={'/DecksAndFences.jpg'}
            />
          </div>
        </div>
        <hr
          className='border border-dark border-2 opacity-100 w-25 mx-auto'
          id='gallery'
        />
        <div className='row g-0 mb-5'>
          <h1 className='text-center mb-5'>Gallery</h1>

          <GalleryCarousel />
        </div>

        <hr
          className='border border-dark border-2 opacity-100 w-25 mx-auto'
          id='contact'
        />
        <div className='row g-0 text-center justify-content-center'>
          <h1 className='mb-3'>Contact Us</h1>
          <div className='col d-flex flex-column mb-5 aligns-items-center'>
            <div className='mb-5'>
              <h3 className='mb-3'>Reach out for a free quote</h3>
              <Link to={'tel:6477675432'} className='me-3'>
                <BsTelephone size={40} />
              </Link>
            </div>
            <div className='mb-5'>
              <h3 className='mb-3'>Check out our instagram</h3>
              <Link
                to={
                  'https://www.instagram.com/terrabella.landscaping/?igshid=YmMyMTA2M2Y%3D'
                }
                target='_blank'
              >
                <BsInstagram size={40} />
              </Link>
            </div>
          </div>
          {/* <div className='row g-0 text-center justify-content-center contact-col'>
          <h1 className='mb-3'>Contact Us</h1>
          <div className='col d-flex flex-column mb-5 aligns-items-center'>
            <div className='mb-5'>
              <h3 className='mb-3'>Reach out for a free quote</h3>
              <Link to={'tel:6477675432'} className='me-3'>
                <BsTelephone size={40} />
              </Link>
            </div>
            <div className='mb-5'>
              <h3 className='mb-3'>Check out our instagram</h3>
              <Link
                to={
                  'https://www.instagram.com/terrabella.landscaping/?igshid=YmMyMTA2M2Y%3D'
                }
                target='_blank'
              >
                <BsInstagram size={40} />
              </Link>
            </div>
          </div> */}
          {/* <img
            src='Tools.jpg'
            className='rounded-circle img-fluid home-image'
            alt='logo'
          /> */}
        </div>

        {/* <div className='header-container'>
          <img src='Lawn.jpg' alt='landscaping' className='header-image'></img>

          <div className='fw-bold image-link text-white'>
            <h1 className='text-center mt-2 businessTitle'>
              Terra Bella Landscaping
            </h1>
            <h1 className='text-center slogan'>Your Ultimate Dreamscape</h1>
          </div>
        </div> */}
        {/* <img
          src='TerrabellaLanscapingLogo1.png'
          className='rounded-circle img-fluid'
          alt='logo'
        /> */}
      </div>
    </>
  );
};

export default HomeBox;
