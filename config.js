require('dotenv').config({ path: `${__dirname}/.env` });

const { SERVER_PORT } = process.env;

const config = {
  port: SERVER_PORT || 3000
};

module.exports = config;
