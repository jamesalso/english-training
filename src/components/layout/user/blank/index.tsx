import { SessionProvider } from 'next-auth/react';

import { AuthProvider } from '@/lib/contexts';
import { withI18n } from '@/lib/hocs';
import { Children } from '@/typescript';

export const BlankLayout = withI18n(({ children }: Children) => {
    return (
        <SessionProvider>
            <AuthProvider>{children}</AuthProvider>
        </SessionProvider>
    );
});
