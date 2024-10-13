import { RuleSetRule } from 'webpack';

import { buildOptions } from './config';
import { getBabelLoader } from './loaders/babelLoader';
import { getCssLoader } from './loaders/cssLoader';

export const buildLoaders = ({ isDev }: buildOptions): RuleSetRule[] => {
    const codeBabelLoader = getBabelLoader({ isTsx: false, isDev });
    const tsxCodeBabelLoader = getBabelLoader({ isTsx: true, isDev });

    const svgLoader = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    };

    const filesLoaader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = getCssLoader(isDev);

    return [
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoader,
        svgLoader,
        filesLoaader,
    ];
};
