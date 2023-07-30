import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildLoaders ({isDev}: BuildOptions):webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: 'ts-loader',
    options: { appendTsSuffixTo: [/\.vue$/] }
  }
  const vueLoader = {
    test: /\.vue$/,
    loader: 'vue-loader'
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\./,
            localIdentName: isDev ? '[path]-[name]__[local]' : '[hash:base64:8]'
          }
        }
      },
      "sass-loader",
    ],
  }

  return [
    vueLoader,
    typescriptLoader,
    cssLoader
  ]
}
