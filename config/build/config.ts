export type buildMode = 'production' | 'development';

export interface buildPaths {
    entryPath: string;
    outputPath: string;
    htmlPath: string;
}

export interface buildOptions {
    mode: buildMode;
    paths: buildPaths;
    isDev: boolean;
}