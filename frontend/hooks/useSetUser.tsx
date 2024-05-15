export const useSetUser = () => {

	const setUser = (email: string): void => {
		// Store the userEmail in localStorage
		localStorage.setItem('userEmail', email);
	};

	const getUser = (): string => {
		// Retrieve the userEmail from localStorage
		if (typeof window !== 'undefined') {
			const storedUserEmail = localStorage.getItem('userEmail');
			if (storedUserEmail) {
				return storedUserEmail;
			}
		}
		return '';
	};

	const clearUser = (): void => {
		// Remove the userEmail from localStorage
		localStorage.removeItem('userEmail');
	};

	return {
		getUser,
		setUser,
		clearUser,
	};
};
