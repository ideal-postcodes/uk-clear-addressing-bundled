import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const input = "node_modules/uk-clear-addressing/dist/index.js";

/**
 * Whitelist files processed by Babel
 */
const include = ["node_modules/uk-clear-addressing/dist/**"];

export default [
  /**
   * ESM build targeting minimum browser versions that allow [ES6 Modules](https://caniuse.com/#feat=es6-module)
   */
  {
    input,
    output: {
      file: "./dist/esm.min.js",
      format: "esm",
      exports: "named",
    },
    plugins: [resolve(), commonjs(), terser({})],
  },
  /**
   * UMD build that targets ie11 as base
   */
  {
    input,
    output: {
      file: "./dist/umd.min.js",
      format: "umd",
      name: "IdealPostcodes",
      extend: true,
      exports: "named",
    },
    plugins: [resolve(), commonjs(), terser({})],
  },
];
