export type buildMode = 'production' | 'development';

export interface buildPaths {
    entryPath: string;
    outputPath: string;
    htmlPath: string;
    src: string;
}

export interface buildOptions {
    mode: buildMode;
    paths: buildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
}

export interface buildEnv {
    port: number;
    mode: buildMode;
    apiUrl: string;
}
