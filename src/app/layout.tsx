import type { Metadata } from 'next';

import { BlankLayout } from '@/components/layout/user';
import { LanguageProvider } from '@/lib/contexts';
import { Children } from '@/typescript';

import './globals.css';

export const metadata: Metadata = {
    title: 'Bài tập tiếng anh',
    description: 'Giáo dục nên là miễn phí',
};

export default function RootLayout({ children }: Children) {
    return (
        <html lang="vi">
            <body>
                <LanguageProvider>
                    <BlankLayout>{children}</BlankLayout>
                </LanguageProvider>
            </body>
        </html>
    );
}
