import { GET_SERVICES } from '@/app/_api/_queries/queries';
import { getData } from '@/app/_api/graphql-client';
import { generateServiceLink } from '@/app/_helpers/helpers';
import React from 'react';

export async function generateStaticParams() {
  const res = await getData(GET_SERVICES);

  return res.servicesCollection.items.map((serviceItem) => ({
    service: serviceItem.serviceName,
  }));
}

const parseServiceTitle = (serviceLink) => {
  // Split the service link by hyphens
  const parts = serviceLink.split('-');

  // Capitalize each word and join them with a space
  const title = parts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  return title;
};

const Page = async ({ params }) => {
  const service = parseServiceTitle(params.service);
  const res = await getData(GET_SERVICES);

  const currentService = res.servicesCollection.items.find(
    (item) => item.serviceName === service
  );

  const text = currentService.servicePageParagraph
    ? currentService.servicePageParagraph
    : '';

  const serviceImages = currentService.servicePageImagesCollection.items
    ? currentService.servicePageImagesCollection.items
    : [];

  return (
    <div className='container'>
      <div className='row justify-content-center text-center'>
        <div className='col-sm-8'>
          <h1 className='my-5 fw-bold'>{service}</h1>
          <p>{text}</p>
        </div>
      </div>

      <div className='row justify-content-center mt-5'>
        {serviceImages.map((serviceImage, index) => {
          return (
            <div className='col-12 col-md-4' key={index}>
              <img
                src={serviceImage.url}
                height={'350vh'}
                className='w-100 rounded my-1'
                style={{ objectFit: 'cover' }}
                key={index}
                alt='service'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
