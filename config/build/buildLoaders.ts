import { RuleSetRule } from 'webpack';

import { buildOptions } from './config';
import { getBabelLoader } from './loaders/babelLoader';
import { getCssLoader } from './loaders/cssLoader';

export const buildLoaders = ({ isDev }: buildOptions): RuleSetRule[] => {
    const babelLoader = getBabelLoader();

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
