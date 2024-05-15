import type { AppProps } from 'next/app';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/config/apolloClient';
import '@/styles/globals.scss';
import { UserProvider } from '@/contexts/UserContext';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App({ Component, pageProps }: AppProps): React.ReactElement {
	return (
		<ApolloProvider client={client}>
			<UserProvider>
				<Component {...pageProps} />
			</UserProvider>
			<Analytics />
			<SpeedInsights />
		</ApolloProvider>
	);
}
