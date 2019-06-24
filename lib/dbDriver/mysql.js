const connection = require('../../knexfile');
// eslint-disable-next-line import/order
const knex = require('knex')(connection.development);

class MySQLDriver {
  // eslint-disable-next-line class-methods-use-this
  async addLink(project, label, url) {
    await knex('project_links')
      .insert({ project_id: project.project_id, label, url });
  }

  async listOutLinks(project) {
    // eslint-disable-next-line class-methods-use-this
    return knex.select('*')
      .from('project_links')
      .where({ project_id: project.project_id })
  }
}
module.exports = MySQLDriver;
