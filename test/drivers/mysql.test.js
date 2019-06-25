const { expect } = require('chai');
const connection = require('../../knexfile');
// eslint-disable-next-line import/order
const knex = require('knex')(connection.development);
const MySQLDriver = require('../../lib/dbDriver/mysql');

describe('MySQL/Knex Persistance', () => {

  it('@integration: addLink stores an item to the db', async () => {
    const driver = new MySQLDriver();
    driver.addLink({ project_id: 'sqlIntegration' }, 'MySQLIntegration', 'integrations.com');

    await knex.select('*')
      .from('project_links')
      .where({ project_id: 'sqlIntegration' })
      .then(rows => expect(rows[0].label).to.equal('MySQLIntegration'))
      .then(knex.select('label')
        .from('project_links')
        .where({ project_id: 'sqlIntegration' })
        .del());
  });
});
