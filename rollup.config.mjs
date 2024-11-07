import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'libraries/pdf/index.js', // Combined entry point
  output: {
    dir: 'dist', 
    format: 'es', // Use 'es' for ES Modules
  },
  plugins: [
    resolve(),
    commonjs(),
    json()
  ]
};
