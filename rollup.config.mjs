import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';

export default {
  input: 'libraries/pdf/index.js', // Combined entry point
  output: {
    dir: 'dist', // Output to a directory
    format: 'es', // Use 'es' for ES Modules
    name: 'pdfBundle',
    entryFileNames: '[name].esm.js', // Name of the output file within the directory
    chunkFileNames: '[name]-[hash].esm.js' // Optional: naming pattern for chunks
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    image()
  ]
};
