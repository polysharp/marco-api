const computeCities = async collection =>
  collection.features.map(feature => ({
    name: feature.properties.nom,
    zip: feature.properties.codesPostaux,
    department: feature.properties.departement,
    coordinates: feature.geometry.coordinates
  }));

module.exports = {
  computeCities
};
