var env = require('node-env-file');
env(__dirname + '/.env');

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: process.env.dbName,
      user: process.env.dbUsername,
      password: process.env.dbPassword,
      host: process.env.dbHost
    }
  }
};
