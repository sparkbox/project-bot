var mysql = require('mysql');
var SQL = require('sql-template-strings');

module.exports = function (config) {
  if (!config || !Object.keys(config).length) {
    throw new Error('Need to provide MySQL connection information.');
  }

  var get = function (tableName, translator) {
    return function (id, callback) {
      var connection = mysql.createConnection(config);
      try {
        connection.connect();
        connection.query(SQL`SELECT * from `.append(tableName).append(SQL` where id = ${id}`), function (err, rows) {
            callback(err, translator(rows[0]));
        });
      } finally {
        connection.end();
      }
    };
  };

  var saveUser = function (tableName) {
    return function (data, callback) {
      var id = data.id;
      var access_token = data.access_token;
      var scopes = JSON.stringify(data.scopes);
      var team_id = data.team_id;
      var user = data.user;

      save(SQL`INSERT into `.append(tableName).append(SQL` (id, access_token, scopes, team_id, user)`)
        .append(SQL`VALUES (${id}, ${access_token}, ${scopes}, ${team_id}, ${user})`)
        .append(SQL`ON DUPLICATE KEY UPDATE id=${id}, access_token=${access_token}, scopes=${scopes}, team_id=${team_id}, user=${user}`),
        callback);
    };
  };

  var saveTeam = function (tableName) {
    return function (data, callback) {
      var id = data.id;
      var createdBy = data.createdBy;
      var name = data.name;
      var url = data.url;
      var token = data.token;
      var bot = JSON.stringify(data.bot);

      save(SQL`INSERT into `.append(tableName).append(SQL` (id, createdBy, name, url, token, bot)`)
          .append(SQL`VALUES (${id}, ${createdBy}, ${name}, ${url}, ${token}, ${bot})`)
          .append(SQL`ON DUPLICATE KEY UPDATE createdBy = ${createdBy}, name = ${name}, url = ${url}, token = ${token}, bot = ${bot}`),
          callback);
    };
  };

  var saveChannel = function (tableName) {
    return function (data, callback) {
      var keys = Object.keys(data);
      var json = {};
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (key != 'id') {
          json[key] = data[key];
        }
      }

      var stringifiedJson = JSON.stringify(json);
      save(SQL`INSERT into `.append(tableName).append(SQL` (id, json)`)
          .append(SQL`VALUES (${data.id}, ${stringifiedJson})`)
          .append(SQL`ON DUPLICATE KEY UPDATE json=${stringifiedJson}`), callback);
    };
  };

  var save = function (statement, callback) {
    var connection = mysql.createConnection(config);
      try {
        connection.connect();
        connection.query(statement, function (err) {
            callback(err);
        });
      } finally {
        connection.end();
      }
  };

  var all = function (tableName, translator) {
    return function (callback) {
      var connection = mysql.createConnection(config);
      try {
        connection.connect();
        connection.query(SQL`SELECT * from `.append(tableName), function (err, rows) {
            var translatedData = [];
            for (var i = 0; i < rows.length; i++) {
                translatedData.push(translator(rows[i]))
            }
            callback(err, translatedData);
        });
      } finally {
        connection.end();
      }
    };
  };

  var dbToUserJson = function (userDataFromDB) {
    if (userDataFromDB) {
      userDataFromDB.scopes = JSON.parse(userDataFromDB.scopes);
    }
    return userDataFromDB;
  };

  var dbToTeamJson = function (teamDataFromDB) {
    if (teamDataFromDB) {
      teamDataFromDB.bot = JSON.parse(teamDataFromDB.bot);
    }
    return teamDataFromDB;
  };

  var dbToChannelJson = function (input) {
    var output = {id: input.id};
    var json = JSON.parse(input.json);
    var keys = Object.keys(json);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      output[key] = json[key];
    }
    return output;
  };

  var storage = {
    teams: {
      get: get('botkit_team', dbToTeamJson),
      save: saveTeam('botkit_team'),
      all: all('botkit_team', dbToTeamJson)
    },
    channels: {
      get: get('botkit_channel', dbToChannelJson),
      save: saveChannel('botkit_channel'),
      all: all('botkit_channel', dbToChannelJson)
    },
    users: {
      get: get('botkit_user', dbToUserJson),
      save: saveUser('botkit_user'),
      all: all('botkit_user', dbToUserJson)
    }
  };
  return storage;
};