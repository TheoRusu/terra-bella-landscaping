import React from 'react';
import { GET_SERVICES } from '../_api/_queries/queries';
import ServiceCard from '../_components/serviceCard/ServiceCard';
import { getData } from '../_api/graphql-client';

const generateServiceLink = (title) => {
  // Convert title to lowercase and replace spaces with hyphens
  return `/${title.toLowerCase().replace(/\s+/g, '-')}`;
};

const chunkArray = (arr, size) => {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
};

const Page = async () => {
  let res = await getData(GET_SERVICES);
  // Extract images from GraphQL data and convert HEIC to PNG
  const serviceItems = res.servicesCollection.items;

  // Function to chunk the services array into rows of 3

  // Chunk the services array into rows of 3
  const rowsOfThree = chunkArray(serviceItems, 3);

  return (
    <div className='container pb-5'>
      <div className='row text-center'>
        <h1 className='my-5 fw-bold'>Services</h1>
        <h4 className='mb-5'>Click on service to see more</h4>
        <div>
          {rowsOfThree.map((row, rowIndex) => (
            <div className='row g-0' key={rowIndex}>
              {row.map((item, index) => (
                <div className='col-md' key={index}>
                  <ServiceCard
                    title={item.serviceName}
                    serviceLink={generateServiceLink(item.serviceName)}
                    image={item.serviceCardImage.url}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;