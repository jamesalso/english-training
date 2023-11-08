import type { FC, ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';

import { withI18n } from '@/lib/hocs';
import {
    useApi,
    useCookie,
    useLocalStorage,
    useToast,
    useTranslations,
} from '@/lib/hooks';
import {
    I_AuthContextValue,
    I_AuthError,
    I_LoginResponse,
    I_LoginValues,
    I_User,
} from '@/typescript';

export const AuthContext = createContext<I_AuthContextValue>({
    isLoading: false,
    error: null,
    user: null,
    login: async () => {},
    logout: async () => {},
});

export const AuthProvider: FC<{ children: ReactNode }> = withI18n(
    ({ children }: { children: ReactNode }) => {
        const [user, setUser] = useState<null | I_User>(null);
        const [error, setError] = useState<null | I_AuthError>(null);
        const localUser = useLocalStorage<I_User>('user');
        const { toast } = useToast();
        const tokenCookie = useCookie<string>('cookie');
        const tComponent = useTranslations('components');
        const { isLoading, callApi } = useApi<I_LoginResponse>();

        async function checkAuth() {
            try {
                if (tokenCookie?.value) {
                    setUser(localUser.value);
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

                if (response?.error) {
                    toast({
                        variant: 'destructive',
                        description: tComponent(
                            `common.login.error.${response?.error?.message}`,
                        ),
                    });
                } else {
                    tokenCookie.set(response?.idToken as string, {
                        expires: +(response?.expiresIn ?? 0) as number,
                    });

                    const user = {
                        displayName: response?.displayName as string,
                        email: response?.email as string,
                    };

                    localUser.set(user);
                    setUser(user);
                }
            } catch (err) {
                setError(err as I_AuthError);
            }
        }

        async function logout() {
            try {
                tokenCookie.remove();
                localUser.remove();
                setUser(null);
            } catch (err) {
                setError(err as I_AuthError);
            }
        }

        const contextValue: I_AuthContextValue = {
            error,
            user,
            login,
            logout,
            isLoading,
        };

        useEffect(() => {
            checkAuth();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
            <AuthContext.Provider value={contextValue}>
                {children}
            </AuthContext.Provider>
        );
    },
);
