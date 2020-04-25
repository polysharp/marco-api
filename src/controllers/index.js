const { register, login } = require('./auth');
const getCityByCoords = require('./get-city-by-coords');
const searchCities = require('./get-search-cities');

module.exports = {
  register,
  login,
  getCityByCoords,
  searchCities
};
