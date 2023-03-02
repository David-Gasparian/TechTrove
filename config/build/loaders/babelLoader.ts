export const getBabelLoader = () => ({
    test: /\.(js|ts|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                [
                    'i18next-extract',
                    {
                        locales: [
                            'en',
                            'ru',
                        ],
                        keyAsDefaultValue: true,
                    },
                ],
            ],
        },
    },
});
