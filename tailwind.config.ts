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
            },
            backgroundColor: {
                primary: colors.blue[500],
                secondary: colors.blue[300],
            },
            borderRadius: {
                primary: '2rem',
            },
        },
    },
    plugins: [],
};
export default config;
