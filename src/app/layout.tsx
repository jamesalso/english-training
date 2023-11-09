import type { Metadata } from 'next';

import { BlankLayout } from '@/components/layout/user';
import { Children } from '@/typescript';

import './globals.css';

export const metadata: Metadata = {
    title: 'Bài tập tiếng anh',
    description: 'Giáo dục nên là miễn phí',
};

export default function RootLayout({ children }: Children) {
    return (
        <html lang="en">
            <body>
                <BlankLayout>{children}</BlankLayout>
            </body>
        </html>
    );
}
