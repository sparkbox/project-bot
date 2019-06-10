const connection = require('../knexfile');
// eslint-disable-next-line import/order
const knex = require('knex')(connection.development); // In real world, we should use env variables

describe.only('Knex Persistance', () => {
  it('Saves Link to the db', async () => {
    knex('project_links')
      .insert({ project_id: 'd3r3', label: 'jira4', url: 'jira4.com' })
      .then()
      .catch((e) => {
        console.log(e);
      });
    knex.select('*').from('project_links').then();
  });
});
