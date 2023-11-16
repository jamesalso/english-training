import { I_GenericDocument } from 'odhq-types';

export interface I_UserDocument extends I_GenericDocument {
    email: string;
    avatar?: string;
    password?: string;
    phone?: string;
    fullName?: string;
}
