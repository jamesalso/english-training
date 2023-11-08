import { I_User } from './user';

export interface I_AuthError {
    code: number;
    message: string;
}

export interface I_LoginResponse {
    error?: I_AuthError;
    displayName?: string;
    email?: string;
    expiresIn?: string;
    idToken?: string;
    kind?: string;
    localId?: string;
    refreshToken?: string;
    registered?: boolean;
}

export interface I_LoginValues {
    email: string;
    password: string;
}

export interface I_AuthContextValue {
    isLoading: boolean;
    error?: null | I_AuthError;
    user: null | I_User;
    login: (values: I_LoginValues) => Promise<void>;
    logout: () => Promise<void>;
}

export interface I_CookieOptions {
    expires?: Date;
}
