import { PrivateLayout } from '@/components/layout/dashboard';
import { Children } from '@/typescript';

export default function Layout({ children }: Children) {
    return (
        <html lang="en">
            <body>
                <PrivateLayout>{children}</PrivateLayout>
            </body>
        </html>
    );
}
