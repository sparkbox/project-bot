// eslint-disable-next-line import/order
const knexion = require('../knexfile');
const knex = require('knex')(knexion);
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const { expect } = chai;
const { AssertionError } = require('assert');

const AddLinkToProjectAction = require('../lib/actions/addLinkToProjectAction');
const Project = require('../lib/project');
const SQLDriver = require('../lib/dbDriver/mysql');

describe('Add Link to Project Action', () => {
  it('creates a ProjectLink', async () => {
    let projectLinkProjectArg;
    let projectLinkLabelArg;
    let projectLinkLinkArg;

    class ProjectLinkSpy {
      constructor(project, label, link) {
        projectLinkProjectArg = project;
        projectLinkLabelArg = label;
        projectLinkLinkArg = link;
      }

      // eslint-disable-next-line class-methods-use-this
      save() {}
    }

    class NullResponse {}

    const action = new AddLinkToProjectAction(ProjectLinkSpy, NullResponse);
    const context = { project: new Project('ccc') };

    // eslint-disable-next-line no-unused-vars
    const response = await action.execute('add google google.com', context);

    expect(projectLinkProjectArg).to.equal(context.project);
    expect(projectLinkLabelArg).to.equal('google');
    expect(projectLinkLinkArg).to.equal('google.com');
  });

  it('throws a type error if there are not three space delimited params', async () => {
    const addLinkToProjectAction = new AddLinkToProjectAction();
    const missingTwoParameters = 'google';
    const result = addLinkToProjectAction.execute(missingTwoParameters);
    await expect(result).to.be.rejectedWith(TypeError);
  });

  it('throws a type error if no params are passed', async () => {
    const addLinkToProjectAction = new AddLinkToProjectAction();
    const result = addLinkToProjectAction.execute();
    await expect(result).to.be.rejectedWith(TypeError);
  });

  it('throws an assertion error if params not a string', async () => {
    const addLinkToProjectAction = new AddLinkToProjectAction();
    const result = addLinkToProjectAction.execute(['google', 'google.com']);
    await expect(result).to.be.rejectedWith(AssertionError);
  });

  it('@integration: adds link to DB', async () => {
    const addLinkToProjectAction = new AddLinkToProjectAction();
    const context = { project: new Project('n123'), driver: new SQLDriver() };
    await addLinkToProjectAction.execute('add added link.com', context);

    await knex.select('*')
      .from('project_links')
      .where({ project_id: 'n123' })
      .then(rows => expect(rows[0].label).to.equal('added'))
      .then(knex.select('label')
        .from('project_links')
        .where({ project_id: 'n123' })
        .del());
  });

  it('@component: returns an add object containing a response', async () => {
    const action = new AddLinkToProjectAction();
    const context = { project: new Project('ccc'), driver: new SQLDriver() };
    const response = await action.execute('add google google.com', context);
    expect(response.label).to.equal('google');
    expect(response.link).to.equal('google.com');
  });
});
