/* eslint-disable @next/next/no-img-element */
import { useAuth, useTranslations } from '@/lib/hooks';
import { HeaderMenu } from '.';

export const Header = () => {
    const t = useTranslations('admin');
    const { user } = useAuth();

    return (
        <header
            className="flex items-center justify-between gap-4"
            role="header"
        >
            <img className="w-10 sm:hidden" src={user?.avatar} alt="logo" />
            <h5 className="w-full">{t('header.title')}</h5>
            <HeaderMenu />
        </header>
    );
};
