import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { buildOptions } from "./config";

export const buildLoaders = ({ isDev }: buildOptions): RuleSetRule[] => {

  const svgLoader =  {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  }

  const filesLoaader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => Boolean(resourcePath.includes(".module.")),
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : '[hash:base64:8]',
          },
        },
      },
      "sass-loader",
    ],
  }

  return [
    tsLoader,
    cssLoader,
    svgLoader,
    filesLoaader
  ]
}