import { FaQuestion } from 'react-icons/fa';

import { useTranslations } from '@/lib/hooks';
import { cn } from '@/lib/utils';

export const SidebarMenu = () => {
    const t = useTranslations('admin');
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
                    <FaQuestion />
                    {isSidebarOpen && (
                        <span className="ml-2 hidden text-base sm:block">
                            {t('sidebar.questions-management')}
                        </span>
                    )}
                </a>
            </li>
        </ul>
    );
};
