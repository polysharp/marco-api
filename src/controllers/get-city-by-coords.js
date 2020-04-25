const HTTP_CODE = require('http-status-codes');
const axios = require('axios');

const { API_GOUV_URL } = require('../constants');
const { localization } = require('../helpers');

const getCityByCoords = async (req, res) => {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) return res.sendStatus(HTTP_CODE.BAD_REQUEST);

    const query = `${API_GOUV_URL}&lat=${lat}&lon=${lon}`;
    const { data } = await axios.get(query);
    if (data.length === 0) return res.sendStatus(HTTP_CODE.NOT_FOUND);

    const result = await localization.computeCities(data);
    return res.status(HTTP_CODE.OK).json(result[0]);
  } catch (error) {
    return res.sendStatus(HTTP_CODE.INTERNAL_SERVER_ERROR);
  }
};

module.exports = getCityByCoords;
