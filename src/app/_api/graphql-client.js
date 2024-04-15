import { GraphQLClient } from 'graphql-request';

export const graphqlClient = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`,
  {
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
    method: 'POST',
  }
);

export const getData = async (query) => {
  const res = await graphqlClient.request(query);
  return res;
};
