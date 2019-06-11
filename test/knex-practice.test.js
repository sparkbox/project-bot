const knexion = require('../knexfile.test');
const knex = require('knex')(knexion.test);

describe.only('Knex Persistance', () => {
  before((callback) => {
    knex.migrate.latest().then(() => {
      callback();
    });
  });
  it('Saves Link to the db', () => {
    knex('project_links').insert({ project_id: 'c1718', label: 'b', url: 'b.com' }).catch((e) => {
      console.log(e);
    });
    knex.select('*').from('project_links').then((result) => {
      console.log(result);
    });
  });
});
