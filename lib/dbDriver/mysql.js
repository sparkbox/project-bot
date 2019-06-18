const connection = require('../../knexfile');
// eslint-disable-next-line import/order
const knex = require('knex')(connection.development);

class MySQLDriver {
  // eslint-disable-next-line class-methods-use-this
  addLink(project, label, url) {
    return knex('project_links')
      .insert({ project_id: project, label, url })
      .catch((e) => {
        console.log(e);
      });
  }
}

module.exports = MySQLDriver;
