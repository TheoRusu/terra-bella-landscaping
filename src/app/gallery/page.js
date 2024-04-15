import React from 'react';
import GalleryCarousel from '../_components/galleryCarousel/GalleryCarousel';
import { GET_GALLERY_PHOTOS } from '../_api/_queries/queries';
import { getData } from '../_api/graphql-client';

const Page = async () => {
  const res = await getData(GET_GALLERY_PHOTOS);
  const images =
    res.galleryPhotosCollection.items[0].photosCollection.items.map(
      (item, index) => ({
        key: index,
        active: index === 0 ? 'active' : '',
        photoUrl: item.url,
      })
    );
  const indicators =
    res.galleryPhotosCollection.items[0].photosCollection.items.map(
      (_, index) => ({
        key: index,
        index,
        active: index === 0 ? 'active' : '',
      })
    );
  return (
    <div className='container pb-5'>
      <div className='row text-center'>
        <h1 className='my-5 my-sm-5 fw-bold'>Gallery</h1>
        <div className='mt-0 mt-sm-5 '>
          <GalleryCarousel
            galleryIndicators={indicators}
            galleryItems={images}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
