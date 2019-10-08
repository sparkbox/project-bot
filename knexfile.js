const env = require('node-env-file');

let connection = null;

if (process.env.NODE_ENV !== 'production') {
  env(__dirname + '/.env');

  connection = {
    client: 'mysql',
    connection: {
      database: process.env.DBNAME,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      host: process.env.DBHOST,
    },
    pool: { min: 0, max: 10 },
    acquireConnectionTimeout: 5000,
  };
} else {
  connection = {
    client: 'mysql',
    connection: process.env.CLEARDB_DATABASE_URL,
    acquireConnectionTimeout: 5000,
  };
}

module.exports = connection;
