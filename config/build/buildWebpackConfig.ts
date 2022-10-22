import webpack from 'webpack';

import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { buildOptions } from './config';


export const buildWebpackConfig = (options: buildOptions): webpack.Configuration => {

    const { paths, mode } = options;

    return {
        mode,
        entry: paths.entryPath,
        output: {
            path: paths.outputPath,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolves()
    }
}