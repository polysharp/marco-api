const HTTP_CODE = require('http-status-codes');
const axios = require('axios');

const { API_GOUV_URL, REGEX } = require('../constants');
const { localization } = require('../helpers');

const searchCities = async (req, res) => {
  try {
    const search = req.query.search.trim();

    const rxCity = new RegExp(REGEX.CITY, 'g').test(search);
    const rxZip = new RegExp(REGEX.ZIP, 'g').test(search);
    const rxCode = new RegExp(REGEX.CODE, 'g').test(search);

    let params;
    if (rxCity) params = 'nom';
    else if (rxZip) params = 'codePostal';
    else if (rxCode) params = 'codeDepartement';
    else return res.status(HTTP_CODE.OK).json([]);

    const query = `${API_GOUV_URL}&${params}=${search}`;
    const { data } = await axios.get(query);
    if (data.length === 0) return res.sendStatus(HTTP_CODE.NOT_FOUND);

    const result = await localization.computeCities(data);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.sendStatus(HTTP_CODE.INTERNAL_SERVER_ERROR);
  }
};

module.exports = searchCities;
