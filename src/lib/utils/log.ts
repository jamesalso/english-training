import { C_ResponseStatus, E_SentryLevel } from 'odhq-types';

export const throwResponse = (
    req: any,
    {
        message,
        status = C_ResponseStatus.INTERNAL_SERVER_ERROR,
        level = E_SentryLevel.ERROR,
        extra = {},
    }: any,
) => {
    const responseMessage = message ?? status.MESSAGE;

    throw new Error(responseMessage);
};
