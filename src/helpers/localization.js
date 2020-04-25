const computeCities = async cities =>
  cities.map(city => ({ name: city.nom, zip: city.codesPostaux, department: city.departement }));

module.exports = {
  computeCities
};
