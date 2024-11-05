import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'libraries/pdfTable/index.js',
  output: {
    dir: 'dist',
    format: 'esm',
    inlineDynamicImports: true,
    entryFileNames: 'pdfTable.umd.js', // Specify the output filename
  },
  plugins: [
    resolve(),
    commonjs(),
    json()
  ]
};
