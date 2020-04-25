const router = require('express').Router({ caseSensitive: true, strict: true });

// const { authGuard } = require('./middlewares');
const { login, register, getCityByCoords, searchCities } = require('./controllers');

router.route('/register').post(register);
router.route('/login').post(login);

router.route('/city').get(getCityByCoords);
router.route('/cities').get(searchCities);

module.exports = router;
