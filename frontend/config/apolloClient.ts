/**
 * @file apolloClient.ts
 * @description Configuration for Apollo Client used for making GraphQL requests.
 */

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const uri = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:4000/graphql';

/**
 * @constant httpLink
 * @description HTTP link to the GraphQL server.
 */
const httpLink = new HttpLink({
	uri,
	credentials: 'include',
});

/**
 * @constant client
 * @description Apollo Client instance configured with HTTP link and in-memory cache.
 */
export const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});