import { Children } from '@/typescript';
import { Glass, Header, Main, Sidebar, SidebarToggler, Sphere } from '.';

export const PrivateLayout = ({ children }: Children) => (
    <Main>
        <Glass className="h-full w-full flex-col-reverse sm:flex-row">
            <Sphere variant="primary" className="-right-10 top-8" />
            <Sidebar />
            <div
                className="relative flex h-full w-full flex-col gap-4 rounded-primary bg-white/30 p-4"
                role="content-wrapper"
            >
                <SidebarToggler />
                <Header />
                {children}
            </div>
            <Sphere variant="secondary" className="-bottom-10 left-8" />
        </Glass>
    </Main>
);
