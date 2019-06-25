const { expect } = require('chai');
const knexion = require('../knexfile');
// eslint-disable-next-line import/order
const knex = require('knex')(knexion.development);
const ProjectLink = require('../lib/projectLink');
const MySQLDriver = require('../lib/dbDriver/mysql');

describe('Project Link', () => {
  it('Saves a link to the Project', () => {
    let hasAdded = false;
    const projectLink = new ProjectLink({ project_id: 'c17183' }, 'google', 'google.com');
    const db = {
      addLink(projectId, label, link) {
        if (projectId.project_id === 'c17183' && label === 'google' && link === 'google.com') {
          hasAdded = true;
        }
      },
    };
    projectLink.save(db);

    expect(hasAdded).to.equal(true);
  });

  it('@integration: projectLink save method saves link to driver', async () => {
    const project = new ProjectLink({ project_id: 'projectLink-Int' }, 'projectLinkIntegration', 'integration.com');
    const driver = new MySQLDriver();

    project.save(driver);

    await knex.select('*')
      .from('project_links')
      .where({ project_id: 'projectLink-Int' })
      .then(rows => expect(rows[0].label).to.equal('projectLinkIntegration'))
      .then(knex.select('label')
        .from('project_links')
        .where({ project_id: 'projectLink-Int' })
        .del());
  });

// make sure we are getting an array of project links.
  it.only('Creates list of project instances', async () => {
    const driver = new MySQLDriver();
    const links = await driver.listOutLinks(project);
    console.log(links);
    let linksList = [];


  })
});
