const connection = require('../../knexfile');
// eslint-disable-next-line import/order
const knex = require('knex')(connection);

class MySQLDriver {
  // eslint-disable-next-line class-methods-use-this
  async addLink(project, label, url) {
    await knex('project_links')
      .insert({ project_id: project.project_id, label, url });
  }

  // eslint-disable-next-line class-methods-use-this
  async deleteLink(project, label) {
    await knex.select('*')
      .from('project_links')
      .where({ project_id: project.project_id })
      .andWhere({ label })
      .del();
  }

  // eslint-disable-next-line class-methods-use-this
  async getAllLinksByProject(project) {
    // eslint-disable-next-line no-return-await
    return await knex.select('*')
      .from('project_links')
      .where({ project_id: project.project_id });
  }

  // eslint-disable-next-line class-methods-use-this
  async getProjectLinkByLabel(project, label) {
    // eslint-disable-next-line no-return-await
    return await knex.select('*')
      .from('project_links')
      .where({ project_id: project.project_id })
      .andWhere({ label });
  }
}

module.exports = MySQLDriver;
