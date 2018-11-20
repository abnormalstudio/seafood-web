import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { BatchHttpLink } from "apollo-link-batch-http";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import produce from "immer";
import fetch from "isomorphic-unfetch";
import { config } from "@settings";

const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Path: ${path}`)
    );
  }

  if (networkError) {
    console.log(
      `[Network error ${operation.operationName}]: ${networkError.message}`
    );
  }
});

const authLink = setContext((_, oldContext) => {
  return produce(oldContext, draft => {
    if (!draft.headers) {
      draft.headers = {};
    }
  });
});

const batchLink = new BatchHttpLink({
  uri: config.apiUrl,
  fetch
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, authLink, batchLink])
});

export default client;
