const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || '8080';

const routes = {
  newGame: `${HOST}:${PORT}/newGame`,
  makeMove: `${HOST}:${PORT}/makeMove`,
};

module.exports = routes;