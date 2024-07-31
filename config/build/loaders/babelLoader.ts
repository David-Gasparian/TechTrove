import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";

interface BabelLoaderProps {
    isTsx: boolean;
}

export const getBabelLoader = ({ isTsx }: BabelLoaderProps) => ({
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
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
                [
                    '@babel/plugin-transform-typescript',
                    {
                        isTsx
                    },
                ],
                '@babel/plugin-transform-runtime',
                isTsx && [
                    babelRemovePropsPlugin,
                    {
                        props: ['data-testid'],
                    },
                ],
            ].filter(Boolean),
        },
    },
});
