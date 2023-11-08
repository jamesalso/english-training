import { useEffect, useState } from 'react';

export const useScrollbar = () => {
    const [scrollData, setScrollData] = useState({
        visible: false,
        scrollY: 0,
    });

    useEffect(() => {
        const checkScrollbar = () => {
            const visible =
                document.documentElement.clientHeight <
                document.body.scrollHeight;

            const scrollY = window.scrollY;

            setScrollData({
                visible,
                scrollY,
            });
        };

        checkScrollbar();

        window.addEventListener('resize', checkScrollbar);
        window.addEventListener('scroll', checkScrollbar);

        return () => {
            window.removeEventListener('resize', checkScrollbar);
            window.removeEventListener('scroll', checkScrollbar);
        };
    }, []);

    return scrollData;
};
