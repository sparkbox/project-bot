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
  };
} else {
  connection = {
    client: 'mysql',
    connection: process.env.CLEARDB_DATABASE_URL,
  };
}

module.exports = connection;
