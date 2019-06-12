if (process.env.NODE_ENV !== 'production') {
  const env = require('node-env-file');
  env(__dirname + '/.env');
}

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: process.env.DBNAME,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      host: process.env.DBHOST,
    },
  },
  production: {
    client: 'mysql',
    connection: {
      database: process.env.CLEARDB_DATABASE_URL,
    },
  },
};
