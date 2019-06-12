const connection = require('../../knexfile');
// eslint-disable-next-line import/order
const knex = require('knex')(connection.development);

class MySQLDriver {
  constructor(project) {
    this.project = project;
  }

  addLink() {
    return knex('project_links')
      .insert({ project_id: this.project.project.id, label: this.project.label, url: this.project.url })
      .then()
      .catch((e) => {
        console.log(e);
      });
  }
}

// let driver = new MySQLDriver({ id: 'c17183' }, 'google', 'google.com');
// driver.addLink();

module.exports = MySQLDriver;
