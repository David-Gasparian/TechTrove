import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { buildEnv, buildMode, buildPaths } from './config/build/config';

export default (env: buildEnv) => {
    const paths: buildPaths = {
        entryPath: path.resolve(__dirname, 'src', 'index.tsx'),
        outputPath: path.resolve(__dirname, 'build'),
        htmlPath: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
    };

    const mode: buildMode = env?.mode || 'development';
    const isDev = mode === 'development';
    const apiUrl = env?.apiUrl || 'http://localhost:8000/';
    const PORT = env?.port || 3000;

    const config = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        project: 'frontend',
    });

    return config;
};
