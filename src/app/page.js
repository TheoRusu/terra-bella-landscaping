import logo from '../../public/TerrabellaLandscapingLogo2.PNG';
import Image from 'next/image';
import { getData, graphqlClient } from './_api/graphql-client';
import { GET_HOME_PAGE_PARAGRAPH } from '@/app/_api/_queries/queries';
import QuoteForm from './_components/quoteForm/QuoteForm';

export default async function Home() {
  const res = await getData(GET_HOME_PAGE_PARAGRAPH);
  const data = res.homePageCollection.items[0].mainParagraph;
  return (
    <div className='container pb-5'>
      <div className='row justify-content-center'>
        <div className='col-sm-8 d-flex flex-column'>
          <Image
            src={logo}
            style={{
              width: '350px',
              height: '300px',
            }}
            className='mx-auto mt-5 rounded'
            alt='logo'
          />
          <div className='mx-auto'>
            <p className='text-center mt-5'>{data}</p>
          </div>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-sm-6'>
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}
