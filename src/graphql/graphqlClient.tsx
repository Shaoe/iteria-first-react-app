  import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
  } from "@apollo/client";
  
  export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: "https://measured-mongrel-55.hasura.app/v1/graphql",
    headers:{
      "x-hasura-admin-secret": "bFLFCqAg7Y6FNM9JDJg814TUkvd1QnMAzokREYU6mDV8Ix8QwPt8eDnerUMX9pty"
    },
    cache: new InMemoryCache({
      addTypename: false,
    }),
  });