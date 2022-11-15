import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const authLinkApp = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // authorization: `Bearer ${process.env.NEXT_PUBLIC_APP_ACCESS_TOKEN}`,
    },
  };
});

const ErrorLinkHandler = () => {
  return onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log(`Graphql Errors ${graphQLErrors}`);
    }
    if (networkError) {
      console.log(`Network Errors ${networkError}`);
    }
  });
};

export const httpLinkApp = new HttpLink({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  uri: 'http://localhost:3333/graphql',
});
export const apolloClient = new ApolloClient({
  link: from([ErrorLinkHandler(), authLinkApp, httpLinkApp]),
  cache: new InMemoryCache(),
  defaultOptions: { query: { errorPolicy: 'all' } },
});
