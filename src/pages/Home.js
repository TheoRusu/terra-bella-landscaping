import React from 'react';
import HomeBox from '../components/homeBox/HomeBox';
import logo from '../assets/logos/TerrabellaLanscapingLogo.PNG';

const Home = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-sm-10 d-flex flex-column'>
          <img
            src={logo}
            width={'350px'}
            height={'300px'}
            className='mx-auto mt-5 rounded-circle'
            alt='logo'
          />
          <div className='w-75 mx-auto'>
            <p className='text-center mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='mt-5 mx-auto text-center'>
            <h5 className='text-decoration-underline mb-4'>Get A Free Quote</h5>
            <div className='row mb-3 justify-content-between'>
              <div className='col-2 my-auto'>
                <label>Name:</label>
              </div>
              <div className='col-8 my-auto'>
                <input className='form-control' />
              </div>
            </div>
            <div className='row mb-3 justify-content-between'>
              <div className='col-2 my-auto'>
                <label>Email:</label>
              </div>
              <div className='col-8 my-auto'>
                <input className='form-control' />
              </div>
            </div>
            <div className='row mb-3 justify-content-between'>
              <div className='col-2 my-auto'>
                <label>Phone:</label>
              </div>
              <div className='col-8 my-auto'>
                <input className='form-control' />
              </div>
            </div>
            <div className='row mb-3 justify-content-between'>
              <div className='col-2 my-auto'>
                <label>Address:</label>
              </div>
              <div className='col-8 my-auto'>
                <input className='form-control' />
              </div>
            </div>
            <div className='row mb-3 justify-content-between'>
              <div className='col-2 my-auto'>
                <label>Service:</label>
              </div>
              <div className='col-8 my-auto'>
                <select className='form-select'>
                  <option selected>Choose Service</option>
                  <option value={'Sodding'}>Sodding</option>
                  <option value={'Interlocking'}>Interlocking</option>
                  <option value={'Planting'}>Planting</option>
                  <option value={'Retaining Wall'}>Retaining Wall</option>
                  <option value={'French Drainage'}>French Drainage</option>
                  <option value={'Decks and Fences'}>Decks and Fences</option>
                </select>
              </div>
            </div>
            <div className='row mb-3 justify-content-between'>
              <div className='col-2 my-auto'>
                <label>Description:</label>
              </div>
              <div className='col-8 my-auto'>
                <input className='form-control' />
              </div>
            </div>
            <button style={{ width: '150px' }} className='btn btn-dark my-2'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
