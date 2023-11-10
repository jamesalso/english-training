import { signIn, signOut } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import type { FC } from 'react';
import { createContext, useEffect, useState } from 'react';

import { withI18n } from '@/lib/hocs';
import { useApi } from '@/lib/hooks';
import {
    APIResponseSingle,
    Children,
    I_AuthContextValue,
    I_AuthError,
    I_LoginValues,
    I_UserDocument,
    T_LoginProvider,
} from '@/typescript';

export const AuthContext = createContext<I_AuthContextValue>({
    isLoading: false,
    error: undefined,
    user: undefined,
    login: async () => {},
    loginSocial: async () => {},
    logout: async () => {},
});

export const AuthProvider: FC<Children> = withI18n(({ children }: Children) => {
    // const tokenCookie = useCookie<string>('cookie');
    const { isLoading, callApi } = useApi<APIResponseSingle<I_UserDocument>>();
    const router = useRouter();
    const pathname = usePathname();
    const [user, setUser] = useState<I_UserDocument>();
    const [error, setError] = useState<I_AuthError>();

    async function checkAuth() {
        try {
            const response = await callApi({
                method: 'GET',
                url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/check-auth`,
            });

            if (response?.success && response?.result) {
                setUser(response?.result);
            }
        } catch (err) {
            setError(err as I_AuthError);
        }
    }

    async function login(values: I_LoginValues) {
        try {
            const response = await callApi({
                method: 'POST',
                url: `${process.env.NEXT_PUBLIC_API_LOGIN_URL}/login`,
                data: values,
            });

            if (!response?.success) {
                console.error(`common.login.error.${response?.message}`);
            } else {
                // tokenCookie.set(response?.idToken as string, {
                //     expires: +(response?.expiresIn ?? 0) as number,
                // });

                if (response.result) {
                    setUser(response.result);
                }
            }
        } catch (err) {
            setError(err as I_AuthError);
        }
    }

    async function loginSocial(provider: T_LoginProvider) {
        signIn(provider);
    }

    async function logout() {
        signOut();
    }

    const contextValue: I_AuthContextValue = {
        error,
        user,
        login,
        loginSocial,
        logout,
        isLoading,
    };

    useEffect(() => {
        if (pathname?.includes('/admin') && user !== undefined && !user) {
            router.push('/user/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        checkAuth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
});
