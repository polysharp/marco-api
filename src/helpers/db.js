const mongoose = require('mongoose');
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
          dbName: 'marco'
        },
        error => {
          if (error) {
            console.error(error);
            return error;
          }
          console.log('Connected to db.');
        }
      );
    } catch (error) {
      console.error(error);
      return error;
    }
  }
};

module.exports = db;
