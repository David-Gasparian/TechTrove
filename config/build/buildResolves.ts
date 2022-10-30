import { ResolveOptions } from "webpack"
import { buildOptions } from "./config"

export const buildResolves = (options: buildOptions): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
      }
}