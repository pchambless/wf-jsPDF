import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'libraries/pdfHeader/index.js',
  output: {
    dir: 'dist',
    format: 'esm',
    inlineDynamicImports: true,
    entryFileNames: 'pdfHeader.umd.js'
  },
  plugins: [
    resolve(),
    commonjs(),
    json()
  ]
};
