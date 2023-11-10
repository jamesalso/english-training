import { PrivateLayout } from '@/components/layout/dashboard';
import { LanguageProvider } from '@/lib/contexts';
import { Children } from '@/typescript';

export default function Layout({ children }: Children) {
    return (
        <html lang="vi">
            <body>
                <LanguageProvider>
                    <PrivateLayout>{children}</PrivateLayout>
                </LanguageProvider>
            </body>
        </html>
    );
}
