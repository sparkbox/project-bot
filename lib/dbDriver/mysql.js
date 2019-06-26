const connection = require('../../knexfile');
// eslint-disable-next-line import/order
const knex = require('knex')(connection.development);

class MySQLDriver {
  // eslint-disable-next-line class-methods-use-this
  async addLink(project, label, url) {
    await knex('project_links')
      .insert({ project_id: project.project_id, label, url });
  }

  // eslint-disable-next-line class-methods-use-this
  async getAllLinksByProject(project) {
    // eslint-disable-next-line no-return-await
    return await knex.select('*')
      .from('project_links')
      .where({ project_id: project.project_id });
  }
}

module.exports = MySQLDriver;
