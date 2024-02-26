import React from 'react';
import HomeServiceCard from '../components/homeServiceCard/HomeServiceCard';
import { useQuery } from '@apollo/client';
import { GET_SERVICES } from '../queries/Queries';
import LoadingScreen from '../components/loadingScreen/LoadingScreen';
import { generateServiceLink } from '../helperFunctions/HelperFunctions';

const Services = () => {
  const { loading, error, data } = useQuery(GET_SERVICES);

  if (loading) return <LoadingScreen />;
  if (error) return <p>Error :</p>;

  console.log(data);
  // Extract images from GraphQL data and convert HEIC to PNG
  const serviceImages = data.servicesCollection.items;

  // Function to chunk the services array into rows of 3
  const chunkArray = (arr, size) => {
    console.log(arr);
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Chunk the services array into rows of 3
  const rowsOfThree = chunkArray(serviceImages, 3);

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
                  <HomeServiceCard
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

export default Services;
