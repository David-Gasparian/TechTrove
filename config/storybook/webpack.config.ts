import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';

import { buildPaths } from '../build/config';
import { getCssLoader } from '../build/loaders/cssLoader';

export default ({ config }: { config: Configuration }) => {
    const paths: buildPaths = {
        entryPath: '',
        htmlPath: '',
        outputPath: '',
        src: path.relative(__dirname, '../../src'),
        locales: path.resolve(__dirname, '../../public', 'locales'),
        buildLocales: '',
    };

    config.resolve!.modules!.push(paths.src);

    // Add path aliases
    config.resolve!.alias = {
        ...config.resolve!.alias,
        shared: path.resolve(__dirname, '../../src/shared/'),
        features: path.resolve(__dirname, '../../src/features/'),
        widgets: path.resolve(__dirname, '../../src/widgets/'),
    };

    config.resolve!.extensions!.push('.ts', '.tsx');
    config.module!.rules!.push(getCssLoader(true));

    if (config.module?.rules) {
        const { rules } = config.module as { rules: RuleSetRule[] };

        // Modify existing rules to exclude SVG files from the default loader
        config.module.rules = rules.map((rule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });
    }

    // Add new rule for SVG files using @svgr/webpack
    config.module!.rules!.push({
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    });

    // Add DefinePlugin to define global constants
    config.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': path.resolve(__dirname, '..', '..', 'src'),
    };

    return config;
};
