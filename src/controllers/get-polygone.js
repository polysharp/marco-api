const HTTP_CODE = require('http-status-codes');
const axios = require('axios');

const { API_GOUV_URL_POLYGONE, REGEX } = require('../constants');
const { localization } = require('../helpers');

const getPolygone = async (req, res) => {
  try {
    const zip = req.params.zip.trim();

    const rxZip = new RegExp(REGEX.ZIP, 'g').test(zip);
    if (!rxZip) return res.sendStatus(HTTP_CODE.BAD_REQUEST);

    const query = `${API_GOUV_URL_POLYGONE}&codePostal=${zip}`;
    const { data } = await axios.get(query);
    if (data.length === 0) return res.sendStatus(HTTP_CODE.NOT_FOUND);

    const result = await localization.computePolygone(data);

    if (!result) return res.sendStatus(HTTP_CODE.BAD_REQUEST);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.sendStatus(HTTP_CODE.INTERNAL_SERVER_ERROR);
  }
};

module.exports = getPolygone;
