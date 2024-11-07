import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'libraries/pdfTable/index.js',
  output: {
    dir: 'dist',
    format: 'umd',
    inlineDynamicImports: true,
    name: 'pdfTable',
    entryFileNames: '[name].umd.js'
  },
  plugins: [
    resolve(),
    commonjs(),
    json()
  ]
};
