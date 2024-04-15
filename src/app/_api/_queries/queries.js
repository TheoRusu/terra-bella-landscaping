import { gql } from '@apollo/client';

export const GET_GALLERY_PHOTOS = gql`
  {
    galleryPhotosCollection {
      items {
        photosCollection {
          items {
            url
          }
        }
      }
    }
  }
`;

export const GET_SERVICES = gql`
  {
    servicesCollection {
      items {
        serviceName
        serviceCardImage {
          url
        }
        servicePageParagraph
        servicePageImagesCollection {
          items {
            url
          }
        }
      }
    }
  }
`;

export const GET_HOME_PAGE_PARAGRAPH = gql`
  {
    homePageCollection {
      items {
        mainParagraph
      }
    }
  }
`;

export const GET_CONTACT_PAGE_PARAGRAPH = gql`
  {
    contactPageCollection {
      items {
        mainParagraph
      }
    }
  }
`;
