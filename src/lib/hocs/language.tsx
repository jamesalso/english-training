import { NextIntlClientProvider } from 'next-intl';
import type { FC } from 'react';

import { useLanguage } from '@/lib/hooks';

export const withI18n = (Component: any) => {
    const PageWithI18n = (props: any) => {
        const { selectedLanguage } = useLanguage();
        const messages = require(`@/i18n/data/${selectedLanguage}.json`);

        return (
            <NextIntlClientProvider
                locale={selectedLanguage}
                messages={messages}
            >
                <Component {...props} />
            </NextIntlClientProvider>
        );
    };

    return PageWithI18n;
};
