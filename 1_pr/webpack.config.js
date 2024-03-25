const path = require('path');

module.exports = {
  entry: './src/index.js', // входная точка в приложение
  output: {
    filename: 'main.js', // имя файла, создаваемого после сборки
    path: path.resolve(__dirname, 'dist'), // имя создаваемой директории после сборки
  },
};
