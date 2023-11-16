/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils';
import { SidebarMenu } from '.';

export const Sidebar = () => {
    const isSidebarOpen = true;

    return (
        <aside
            className={cn(
                'relative flex flex-shrink-0 gap-4 overflow-hidden whitespace-nowrap p-4 transition-[width] sm:flex-col',
                { 'sm:w-[250px]': isSidebarOpen },
                { 'sm:w-[80px]': !isSidebarOpen },
            )}
            role="sidebar"
        >
            <div className="my-1 hidden h-[80px] sm:flex sm:shrink-0 sm:items-start sm:justify-center">
                <img
                    className="max-h-full transition-all"
                    src={'/images/logo.svg'}
                    alt="logo"
                />
            </div>
            <SidebarMenu />
        </aside>
    );
};
