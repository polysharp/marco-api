const { register, login } = require('./auth');
const getCityByCoords = require('./get-city-by-coords');
const searchCities = require('./get-search-cities');
const getPolygon = require('./get-polygon');

module.exports = {
  register,
  login,
  getCityByCoords,
  searchCities,
  getPolygon
};
