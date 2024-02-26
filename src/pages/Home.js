import React, { useEffect, useState } from 'react';
import logo from '../assets/logos/TerrabellaLandscapingLogo2.PNG';
import { GET_HOME_PAGE_PARAGRAPH } from '../queries/Queries';
import { useQuery } from '@apollo/client';
import LoadingScreen from '../components/loadingScreen/LoadingScreen';

const Home = () => {
  const { loading, error, data } = useQuery(GET_HOME_PAGE_PARAGRAPH); // Fetch data using the GraphQL query

  const [mainParagraph, setMainParagraph] = useState('');

  useEffect(() => {
    if (
      data &&
      data.homePageCollection &&
      data.homePageCollection.items &&
      data.homePageCollection.items.length > 0
    ) {
      setMainParagraph(data.homePageCollection.items[0].mainParagraph);
    }
  }, [data]);

  if (loading) return <LoadingScreen />;
  if (error) return <p>Error :(</p>;

  return (
    <div className='container pb-5'>
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
            <p className='text-center mt-5'>{mainParagraph}</p>
          </div>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-sm-6'>
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
