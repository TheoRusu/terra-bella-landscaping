import React from 'react';
import { getData } from '../_api/graphql-client';
import { GET_CONTACT_PAGE_PARAGRAPH } from '../_api/_queries/queries';

const Page = async () => {
  const res = await getData(GET_CONTACT_PAGE_PARAGRAPH);
  let mainParagraph = res.contactPageCollection.items[0].mainParagraph;

  return (
    <div className='container pb-5'>
      <div className='row text-center'>
        <div className='col-sm-8 mx-auto'>
          <h1 className='my-5 fw-bold'>Contact</h1>
          <p>{mainParagraph}</p>

          <p className='fw-bold mt-5'>Owner: Matthew Tawfiq</p>
          <p className='fw-bold'>
            Phone: <a href='tel: 6477675432'>(647) 767-5432</a>
          </p>
          <p className='fw-bold'>
            Email:{' '}
            <a href='terrabelladreamscape@gmail.com'>
              terrabelladreamscape@gmail.com
            </a>
          </p>
          <p className='fw-bold mt-5 text-decoration-underline'>
            Hours of Operation (EST)
          </p>
          <table className='table table-striped table-bordered table-secondary'>
            <thead>
              <tr>
                <th>Day</th>
                <th>Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>9:00 AM - 8:00 PM</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>9:00 AM - 8:00 PM</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>9:00 AM - 8:00 PM</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>9:00 AM - 8:00 PM</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>9:00 AM - 8:00 PM</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>9:00 AM - 5:00 PM</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='row text-center'>
        <div className='col-8 mx-auto'></div>
      </div>
    </div>
  );
};

export default Page;
