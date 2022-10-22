import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

import { buildOptions } from "./config";

export const buildPlugins = ({paths}: buildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: paths.htmlPath
        }),
        new webpack.ProgressPlugin(),
    ];
}