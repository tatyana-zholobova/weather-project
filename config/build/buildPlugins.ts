import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {VueLoaderPlugin} from "vue-loader";
import {BuildOptions} from "./types/config";

export function buildPlugins ({paths}: BuildOptions):webpack.WebpackPluginInstance[] {
  return [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }
  ),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      '__VUE_OPTIONS_API__': true,
      '__VUE_PROD_DEVTOOLS__': false
    }),
  ]
}
