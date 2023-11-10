import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primary: colors.slate[500],
                active: colors.slate[800],
                success: colors.green[400],
                error: colors.red[400],
                'bg-rgba': 'rgba(255, 255, 255, 0.25)',
                border: 'rgba(255, 255, 255, 0.5)',
            },
            backgroundColor: {
                primary: colors.blue[500],
                secondary: colors.blue[300],
            },
            borderRadius: {
                primary: '2rem',
            },
            keyframes: {
                wiggle: {
                    '0%': { transform: 'translateX(calc(100% + 100vw))' },
                    '50%': { transform: 'translateX(calc(-100% - 100vw))' },
                    '50.01%': {
                        transform:
                            'translateX(calc(-100% - 100vw)) rotateY(180deg)',
                    },
                    '100%': {
                        transform:
                            'translateX(calc(100% + 100vw)) rotateY(180deg)',
                    },
                },
                slideOutDown: {
                    '0%': { transform: 'translateY(calc(-100% - 100vh))' },
                    '100%': { transform: 'translateY(calc(100% + 100vh)) ' },
                },
            },
            animation: {
                wiggle: 'wiggle 15s infinite',
                slideOutDown:
                    'slideOutDown 15s linear(-0.38 71.32%, 1 100%) infinite',
            },
        },
    },
    plugins: [],
};
export default config;
