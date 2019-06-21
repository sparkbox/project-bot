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
    // await knex.select('label','link').from('project_links').where(project_id)
    // console.log(project.project.project_id);
    // return knex.select('*').from('project_links').where('project_id', 'DK3SQ8KV2').then(rows => console.log(rows));

    return knex.select('*')
      .from('project_links')
      .where({ project_id: project.project.project_id })
      .then(rows => console.log(rows));
  // }
  }
}
module.exports = MySQLDriver;
