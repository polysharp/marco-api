const router = require('express').Router({ caseSensitive: true, strict: true });

// const { authGuard } = require('./middlewares');
const { login, register, getCityByCoords, searchCities, getPolygone } = require('./controllers');

router.route('/register').post(register);
router.route('/login').post(login);

router.route('/city').get(getCityByCoords);
router.route('/cities').get(searchCities);
router.route('/city/:zip/polygone').get(getPolygone);

module.exports = router;
