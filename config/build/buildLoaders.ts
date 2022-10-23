import { RuleSetRule } from "webpack"

export const buildLoaders = (): RuleSetRule[] => {

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader",
      "css-loader",
      "sass-loader",
    ],
  }

  return [
    tsLoader,
    cssLoader
  ]
}