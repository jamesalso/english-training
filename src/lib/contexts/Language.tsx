import type { ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';

import { useLocalStorage } from '@/lib/hooks';
import { I_LanguageContextType } from '@/typescript';

export const LanguageContext = createContext<I_LanguageContextType | undefined>(
    undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('vi');
    const localLang = useLocalStorage<string>('lang');

    useEffect(() => {
        localLang.set(selectedLanguage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedLanguage]);

    useEffect(() => {
        if (window !== undefined) {
            setSelectedLanguage(localLang.value || 'vi');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <LanguageContext.Provider
            value={{ selectedLanguage, setSelectedLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
