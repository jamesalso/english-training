import { useContext } from 'react';

import { AuthContext } from '@/lib/contexts';
import { I_AuthContextValue } from '@/typescript';

export const useAuth = (): I_AuthContextValue => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }

    return context;
};
