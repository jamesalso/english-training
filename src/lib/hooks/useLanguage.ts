import { useContext } from 'react';

import { LanguageContext } from '@/lib/contexts';
import { I_LanguageContextType } from '@/typescript';

export const useLanguage = (): I_LanguageContextType => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }

    return context;
};
