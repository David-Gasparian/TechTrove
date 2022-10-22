import { RuleSetRule } from "webpack"

export const buildLoaders = (): RuleSetRule[] => {
    return [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ] 
}