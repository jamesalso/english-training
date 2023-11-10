import { SessionProvider } from 'next-auth/react';

import { AuthProvider } from '@/lib/contexts';
import { withI18n } from '@/lib/hocs';
import { Children } from '@/typescript';
import { Glass, Main, Sphere } from '.';

export const PublicLayout = withI18n(({ children }: Children) => (
    <SessionProvider>
        <AuthProvider>
            <Main>
                <Glass className="flex-col max-sm:w-full">
                    <Sphere
                        variant="primary"
                        className="right-[-80px] top-[-80px]"
                    />
                    {children}
                    <Sphere
                        variant="secondary"
                        className="bottom-[-60px] left-[-60px]"
                    />
                </Glass>
            </Main>
        </AuthProvider>
    </SessionProvider>
));
