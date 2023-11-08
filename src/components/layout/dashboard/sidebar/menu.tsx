import { cn } from '@/lib/utils';

export const SidebarMenu = () => {
    const isSidebarOpen = true;

    return (
        <ul className="flex w-full justify-center sm:flex-col" role="menu">
            <li>
                <a
                    className={cn(
                        'flex h-12 w-full items-center rounded-2xl p-3 text-2xl transition-colors hover:text-active',
                        {
                            'bg-white text-active': true,
                        },
                    )}
                    href={'path'}
                    title={'menu?.text'}
                >
                    {'menu?.icon'}
                    {isSidebarOpen && (
                        <span className="ml-2 hidden text-base sm:block">
                            {'menu?.text'}
                        </span>
                    )}
                </a>
            </li>
        </ul>
    );
};
