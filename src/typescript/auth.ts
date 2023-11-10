import type { NextApiRequest } from 'next';

import { I_UserDocument } from './user';

export type T_LoginProvider = 'google' | 'facebook';

export enum E_LoginProvider {
    google = 'google',
    facebook = 'facebook',
}

export interface I_AuthError {
    code: number;
    message: string;
}

export interface I_LoginValues {
    email: string;
    password: string;
}

export interface I_AuthContextValue {
    isLoading: boolean;
    login: (values: I_LoginValues) => Promise<void>;
    loginSocial: (provider: T_LoginProvider) => Promise<void>;
    logout: () => Promise<void>;
    user: I_UserDocument | undefined;
    error?: I_AuthError | undefined;
}

export interface I_CookieOptions {
    expires?: Date;
}

export interface I_Session {
    user: {
        name: string;
        email: string;
        image: string;
    };
    expires: string;
}

export interface I_NextApiRequestWithSession extends NextApiRequest {
    session: I_Session | null;
}
