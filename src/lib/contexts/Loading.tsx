import type { ReactNode } from 'react';
import { createContext, useState } from 'react';

import { I_LoadingContextType } from '@/typescript';

export const LoadingContext = createContext<I_LoadingContextType | undefined>(
    undefined,
);

export function LoadingProvider({
    children,
}: {
    children: ReactNode;
}): JSX.Element {
    const [isLoading, setIsLoading] = useState(false);

    // Function to start loading
    const startLoading = (): void => {
        setIsLoading(true);
    };

    // Function to stop loading
    const stopLoading = (): void => {
        setIsLoading(false);
    };

    return (
        <LoadingContext.Provider
            value={{ isLoading, startLoading, stopLoading }}
        >
            {children}
        </LoadingContext.Provider>
    );
}
