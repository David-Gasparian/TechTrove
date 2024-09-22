export type buildMode = 'production' | 'development';

export interface buildPaths {
    entryPath: string;
    outputPath: string;
    htmlPath: string;
    src: string;
    locales: string;
    buildLocales: string;
}

export interface buildOptions {
    mode: buildMode;
    paths: buildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: 'frontend' | 'storybook' | 'jest';
}

export interface buildEnv {
    port: number;
    mode: buildMode;
    apiUrl: string;
}
