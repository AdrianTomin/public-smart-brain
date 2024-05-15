import { useMemo } from 'react';
import { ParticleBG } from '@/components/ParticleBG';

export const useMemoizedParticleBG = () => {
	return useMemo(() => <ParticleBG />, []);
};