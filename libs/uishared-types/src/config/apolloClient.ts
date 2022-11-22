import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { GraphqlErrorState } from '../states/apolloStates';
import { ErrorTypeGraphQl } from './types';

const authLinkApp = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const ErrorLinkHandler = () => {
  const { setState } = GraphqlErrorState;
  return onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      setState({ messagesError: graphQLErrors.map((a) => a.message) });
      setState({ errorType: ErrorTypeGraphQl.Request });
      setState({ isOpen: true });
    }
    if (networkError) {
      setState({ errorType: ErrorTypeGraphQl.Network });
      setState({
        messagesError: ['Connection Issue Please check Your internet connection and try again'],
      });
      setState({ isOpen: true });
    }
  });
};

export const httpLinkApp = new HttpLink({
  uri: 'http://localhost:3333/graphql',
  credentials: 'include',
});
export const apolloClient = new ApolloClient({
  link: from([ErrorLinkHandler(), authLinkApp, httpLinkApp]),
  cache: new InMemoryCache(),
  defaultOptions: { query: { errorPolicy: 'all' } },
  credentials: 'include',
});
