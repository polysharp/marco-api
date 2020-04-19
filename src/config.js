require('dotenv').config();

const CONFIG = {
	PORT: process.env.PORT || '3000',
	DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017',
};

module.exports = CONFIG;
