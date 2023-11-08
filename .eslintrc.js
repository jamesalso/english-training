module.exports = {
    plugins: ['import'],
    extends: [
        'next',
        'prettier',
        'next/core-web-vitals',
        'plugin:import/recommended',
    ],
    settings: {
        'import/resolver': {
            typescript: true,
        },
    },
    rules: {
        'import/newline-after-import': [
            'error',
            {
                count: 1,
            },
        ],
    },
    ignorePatterns: ['.next', '__test__', 'next.config.js'],
};
