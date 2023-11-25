import React from 'react';
import HomeBox from '../components/homeBox/HomeBox';
import logo from '../assets/logos/TerrabellaLanscapingLogo.PNG';

const Home = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-sm-8 d-flex flex-column'>
          <img
            src={logo}
            width={'350px'}
            height={'300px'}
            className='mx-auto mt-5 rounded-circle'
            alt='logo'
          />
          <div className='mx-auto'>
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
          <div className='mt-5 mx-auto text-center w-100'>
            <h4 className='text-decoration-underline mb-4'>Get A Free Quote</h4>

            <div className='form-floating mb-2'>
              <input className='form-control' placeholder='Name' />
              <label>Name</label>
            </div>

            <div className='form-floating  mb-2'>
              <input className='form-control' placeholder='Email' />
              <label>Email</label>
            </div>

            <div className='form-floating mb-2'>
              <input className='form-control' placeholder='Phone Number' />
              <label>Phone Number</label>
            </div>

            <div className='form-floating  mb-2'>
              <input className='form-control' placeholder='Address' />
              <label>Address</label>
            </div>

            <div className='form-floating  mb-2'>
              <select className='form-select'>
                <option defaultValue={'Sodding'}>Sodding</option>
                <option value={'Interlocking'}>Interlocking</option>
                <option value={'Planting'}>Planting</option>
                <option value={'Retaining Wall'}>Retaining Wall</option>
                <option value={'French Drainage'}>French Drainage</option>
                <option value={'Decks and Fences'}>Decks and Fences</option>
              </select>
              <label>Service</label>
            </div>

            <div className='form-floating  mb-2'>
              <textarea
                className='form-control'
                placeholder='Description'
                style={{ height: '200px' }}
              />
              <label>Description</label>
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
