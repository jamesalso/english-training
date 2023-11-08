import { useEffect, useState } from 'react';

export function useCookie<T>(cookieName: string) {
    const [cookieValue, setCookieValue] = useState<T | null>();

    // Initialize the cookie value from the existing cookie (if it exists)
    const getCookie = (): T | null => {
        const name = `${cookieName}=`;
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');

        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i].trim();
            if (cookie.indexOf(name) === 0) {
                return JSON.parse(
                    cookie.substring(name.length, cookie.length),
                ) as T;
            }
        }

        return null;
    };

    // Function to set a cookie's value
    const set = (value: T, options?: { expires?: number; path?: string }) => {
        let cookieString = `${cookieName}=${JSON.stringify(value)}`;

        if (options) {
            if (options.expires) {
                const expires = new Date();
                expires.setTime(expires.getTime() + options.expires * 1000);
                cookieString += `;expires=${expires.toUTCString()}`;
            }
            if (options.path) {
                cookieString += `;path=${options.path}`;
            }
        }

        document.cookie = cookieString;
        setCookieValue(value);
    };

    // Function to remove a cookie
    const remove = () => {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        setCookieValue(null);
    };

    useEffect(() => {
        setCookieValue(getCookie());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        value: cookieValue,
        set,
        remove,
    };
}
