import { useContext } from 'react';

import { LoadingContext } from '@/lib/contexts';
import { I_LoadingContextType } from '@/typescript';

export const useLoading = (): I_LoadingContextType => {
    const context = useContext(LoadingContext);

    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }

    return context;
};
