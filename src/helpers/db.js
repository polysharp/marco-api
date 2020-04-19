const mongoose = require('mongoose');
const HTTP_CODE = require('http-status-codes');
const { DB_CONNECTION_STRING } = require('../config');

const db = {
	connect: async () => {
		try {
			return await mongoose.connect(
				DB_CONNECTION_STRING,
				{
					useUnifiedTopology: true,
					useNewUrlParser: true,
					useCreateIndex: true,
					dbName: 'marco',
				},
				(error) => {
					if (error) {
						console.error(error);
						return res.set(HTTP_CODE.INTERNAL_SERVER_ERROR);
					}
					console.log('Connected to db.');
				},
			);
		} catch (error) {
			console.error(error);
			return res.set(HTTP_CODE.INTERNAL_SERVER_ERROR);
		}
	},
};

module.exports = db;
