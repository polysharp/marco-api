const router = require('express').Router({ caseSensitive: true, strict: true });

const { authGuard } = require('./middlewares');
const { login, register } = require('./controllers');

router.route('/register').post(register);
router.route('/login').post(login);

// router.route('/user').get(authGuard, getUser);

module.exports = router;
