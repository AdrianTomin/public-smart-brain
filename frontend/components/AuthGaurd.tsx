/**
 * @file AuthGuard.tsx
 * @description Defines a component for guarding routes based on user authentication status.
 */

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useUser } from '@/contexts/UserContext';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '@/graphql/queries/GetCurrentUser';

/**
 * @function AuthGuard
 * @description A component that guards routes based on user authentication status.
 * @param children - The child components to be rendered if the user is authenticated.
 * @returns The child components if the user is authenticated, otherwise redirects to the login page.
 */
export const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const user = useUser() || {};
	const { isLoggedIn, email, isActive } = user;
	const { data, loading } = useQuery(GET_CURRENT_USER, {
		variables: email ? { email } : {},
	});
	const router = useRouter();

	useEffect(() => {
		const checkAuthentication = async (): Promise<void> => {
			if (!email || loading) {
				// Wait for user data to be available
				return;
			}
			if (!isLoggedIn || !isActive) {
				await router.push('/login');
			}
		};

		checkAuthentication();
	}, [email, loading, isLoggedIn, isActive, router]);

	if (loading) {
		return (
			<div className={'flex justify-center items-center h-screen'}>
				<CircularProgress sx={{
					color: 'rgb(164, 110, 231)',
				}} />
			</div>
		);
	}

	if (data) {
		return (
			<>
				{children}
			</>
		);
	}
};