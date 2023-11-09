import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { useState } from 'react';

async function handleResponse<T>(response: AxiosResponse<T>): Promise<T> {
    if (response.status >= 200 && response.status < 300) {
        return response.data;
    } else {
        throw new Error('Request failed');
    }
}

export const useApi = <T>() => {
    // const tokenCookie = useCookie<string>('cookie');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const callApi = async (
        options: AxiosRequestConfig,
    ): Promise<T | undefined> => {
        const requestOptions: AxiosRequestConfig = {
            baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
            ...options,
            headers: {
                ...options.headers,
            },
        };

        try {
            requestOptions.headers = {
                ...requestOptions.headers,
                // Authorization: `Bearer ${tokenCookie.value}`,
            };

            setIsLoading(true);

            const response = await axios(requestOptions);

            return handleResponse<T>(response);
        } catch (error) {
            console.error((error as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    return { callApi, isLoading };
};
