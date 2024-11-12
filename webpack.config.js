const path = require('path');

module.exports = {
  entry: './libraries/pdf/index.js',
  output: {
    filename: '.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'pdfBundle',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  externals: {
    jspdf: 'jsPDF',
    'jspdf-autotable': 'autoTable',
  },
};
