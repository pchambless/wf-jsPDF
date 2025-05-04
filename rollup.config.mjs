import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';

export default {
input: 'libraries/pdfBundle/index.js', 
output: {
	file: 'dist/index.umd.js', // Single output file
	format: 'umd', // UMD format
	name: 'pdfBundle', // Global variable name for UMD
  exports: 'named' // Disable mixing named and default exports warning
},
plugins: [
resolve(),
commonjs(),
json(),
image()
], manualChunks: () => 'pdfBundle', // Ensure single chunk
};
