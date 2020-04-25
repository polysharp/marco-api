module.exports.API_VERSION = 'v1';

module.exports.ENVIRONMENT = Object.freeze({
  DEV: 'dev',
  PROD: 'prod',
  TEST: 'test'
});

module.exports.REGEX = Object.freeze({
  CITY: '^([a-zA-Z]+[- ]?)+[a-zA-Z]+$',
  ZIP: '^[0-9]{5}$',
  CODE: '^[0-9]{2}$'
});

module.exports.API_GOUV_URL =
  'https://geo.api.gouv.fr/communes?fields=nom,codesPostaux,departement&format=json&geometry=centre';
