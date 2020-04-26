const { register, login } = require('./auth');
const getCityByCoords = require('./get-city-by-coords');
const searchCities = require('./get-search-cities');
const getPolygone = require('./get-polygone');

module.exports = {
  register,
  login,
  getCityByCoords,
  searchCities,
  getPolygone
};
