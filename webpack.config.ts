import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { buildMode, buildPaths } from './config/build/config';

const paths: buildPaths = {
  entryPath: path.resolve(__dirname, 'src', 'index.ts'),
  outputPath: path.resolve(__dirname, 'build'),
  htmlPath: path.resolve(__dirname, 'public', 'index.html')
}

const mode: buildMode = 'development';

const isDev = mode === 'development'

const config = buildWebpackConfig({
  mode,
  paths,
  isDev
});

export default config;