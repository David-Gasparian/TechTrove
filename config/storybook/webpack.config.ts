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
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');
    config.module?.rules?.push(getCssLoader(true));

    if (config.module?.rules) {
        const { rules } = config.module as { rules: RuleSetRule[] };

        // eslint-disable-next-line no-param-reassign
        config.module.rules = rules.map((rule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });
    }

    config.module?.rules?.push({
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    });

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: true,
        }),
    );

    return config;
};
