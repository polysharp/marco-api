const computeCities = async collection =>
  collection.features.slice(0, 20).map(feature => ({
    name: feature.properties.nom,
    zip: feature.properties.codesPostaux,
    coordinates: feature.geometry.coordinates.reverse()
  }));

module.exports = {
  computeCities
};
