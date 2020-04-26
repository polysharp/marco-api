const computeCities = async collection =>
  collection.features.slice(0, 10).map(feature =>
    feature.properties && feature.geometry
      ? {
          name: feature.properties.nom ? feature.properties.nom : null,
          zip: feature.properties.codesPostaux ? feature.properties.codesPostaux : null,
          coordinates: feature.geometry.coordinates ? feature.geometry.coordinates.reverse() : null
        }
      : null
  );

module.exports = {
  computeCities
};
