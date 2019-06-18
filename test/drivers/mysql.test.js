const { expect } = require('chai');
const connection = require('../../knexfile');
// eslint-disable-next-line import/order
const knex = require('knex')(connection.development);

describe('MySQL/Knex Persistance', () => {
  before((callback) => {
    knex.migrate.latest().then(() => {
      callback();
    });
  });

  it('Knex stores an item to the db', async () => {
    knex('project_links')
      .insert({ project_id: 'knexTesting', label: 'knexStoreTest', url: 'testInput.com' })
      .then()
      .catch((e) => {
        console.log(e);
      });

    await knex.select('label')
      .from('project_links')
      .where({ project_id: 'knexTesting' })
      .then(rows => expect(rows[0].label).to.equal('knexStoreTest'));

    await knex.select('label')
      .from('project_links')
      .where({ label: 'knexStoreTest' })
      .del();
  });
});
