import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { GET_CONTACT_PAGE_PARAGRAPH } from '../queries/Queries';
import LoadingScreen from '../components/loadingScreen/LoadingScreen';

const Contact = () => {
  const { loading, error, data } = useQuery(GET_CONTACT_PAGE_PARAGRAPH); // Fetch data using the GraphQL query

  const [mainParagraph, setMainParagraph] = useState('');

  useEffect(() => {
    if (
      data &&
      data.contactPageCollection &&
      data.contactPageCollection.items &&
      data.contactPageCollection.items.length > 0
    ) {
      setMainParagraph(data.contactPageCollection.items[0].mainParagraph);
    }
  }, [data]);

  if (loading) return <LoadingScreen />;
  if (error) return <p>Error :(</p>;
  return (
    <div className='container pb-5'>
      <div className='row text-center'>
        <div className='col-sm-8 mx-auto'>
          <h1 className='my-5 fw-bold'>Contact</h1>
          <p>{mainParagraph}</p>

          <p className='fw-bold mt-5'>Owner: Matthew Tawfiq</p>
          <p className='fw-bold'>Phone: (647) 767-5432</p>
          <p className='fw-bold'>Email: terrabelladreamscape@gmail.com</p>
          <p className='fw-bold mt-5'>Hours of Operation (EST):</p>
          <p>Monday: 9:00am - 8:00pm</p>
          <p>Tuesday: 9:00am - 8:00pm</p>
          <p>Wednesday: 9:00am - 8:00pm</p>
          <p>Thursday: 9:00am - 8:00pm</p>
          <p>Friday: 9:00am - 8:00pm</p>
          <p>Saturday: 9:00am - 5:00pm</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      <div className='row text-center'>
        <div className='col-8 mx-auto'></div>
      </div>
    </div>
  );
};

export default Contact;
