import { RuleSetRule } from 'webpack';

import { buildOptions } from './config';
import { getCssLoader } from './loaders/cssLoader';

export const buildLoaders = ({ isDev }: buildOptions): RuleSetRule[] => {
    const babelLoader = {
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
    };

    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    };

    const filesLoaader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = getCssLoader(isDev);

    return [
        babelLoader,
        tsLoader,
        cssLoader,
        svgLoader,
        filesLoaader,
    ];
};
