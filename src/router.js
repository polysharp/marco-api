const router = require('express').Router({ caseSensitive: true, strict: true });

// const { authGuard } = require('./middlewares');
const { login, register, getCityByCoords, searchCities, getPolygon } = require('./controllers');

router.route('/register').post(register);
router.route('/login').post(login);

router.route('/city').get(getCityByCoords);
router.route('/cities').get(searchCities);
router.route('/city/:zip/polygon').get(getPolygon);

module.exports = router;
