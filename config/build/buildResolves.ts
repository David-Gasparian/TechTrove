import { ResolveOptions } from "webpack"

export const buildResolves = (): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
      }
}