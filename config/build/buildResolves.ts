import {ResolveOptions} from "webpack";
import path from "path";

export function buildResolves ():ResolveOptions {
  return {
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
