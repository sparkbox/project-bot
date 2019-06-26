const { expect } = require('chai');
const knexion = require('../knexfile');
// eslint-disable-next-line import/order
const knex = require('knex')(knexion.development);
const ProjectLink = require('../lib/projectLink');
const Project = require('../lib/project');
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

  it('@integration: returns an array of project links', async () => {
    const driver = new MySQLDriver();
    const context = { project: new Project('CKQ225WSV') };
    const projectLinkInstances = await ProjectLink.findByProject(context.project, driver);
    expect(projectLinkInstances).to.be.an('array');
  });

  it('@integration: findByProject retrieves project links from db', async () => {
    const driver = new MySQLDriver();
    const context = { project: new Project('CKQ225WSV') };
    const projectLinkInstances = await ProjectLink.findByProject(context.project, driver);

    const expectedResult = [
      {
        project: { project: 'CKQ225WSV' },
        label: 'aProjectLink',
        url: 'Test.com',
      },
      {
        project: { project: 'CKQ225WSV' },
        label: 'aProjectLink2',
        url: 'Test2.com',
      },
      {
        project: { project: 'CKQ225WSV' },
        label: 'aProjectLink2',
        url: 'Test.com',
      }];

    expect(projectLinkInstances).to.deep.equal(expectedResult);
  });
});
