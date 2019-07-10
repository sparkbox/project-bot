// eslint-disable-next-line import/order
const knexion = require('../knexfile');
const knex = require('knex')(knexion);
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const { expect } = chai;
const { AssertionError } = require('assert');

const DeleteLinkFromProjectAction = require('../lib/actions/deleteLinkFromProjectAction');
const AddLinkToProjectAction = require('../lib/actions/addLinkToProjectAction');
const Project = require('../lib/project');
const SQLDriver = require('../lib/dbDriver/mysql');

describe('Delete Link From Project Action', () => {
  it('throws a type error if no params are passed', async () => {
    const deleteLinkFromProjectAction = new DeleteLinkFromProjectAction();
    const result = deleteLinkFromProjectAction.execute('delete');
    await expect(result).to.be.rejectedWith(TypeError);
  });

  it('throws an assertion error if params not a string', async () => {
    const deleteLinkFromProjectAction = new DeleteLinkFromProjectAction();
    const result = deleteLinkFromProjectAction.execute(['google', 'google.com']);
    await expect(result).to.be.rejectedWith(AssertionError);
  });

  it('@integration: deletes link from DB', async () => {
    const addLinkToProjectAction = new AddLinkToProjectAction();
    const deleteLinkFromProjectAction = new DeleteLinkFromProjectAction();
    const context = { project: new Project('b123'), driver: new SQLDriver() };
    await addLinkToProjectAction.execute('add addLink link.com', context);
    await deleteLinkFromProjectAction.execute('delete addlink', context);
    const result = await knex.select('*')
      .from('project_links')
      .where({ project_id: 'b123' });
    expect(result[0]).to.equal(undefined);
  });

  it('@component: returns an delete object containing a response', async () => {
    const addLinkToProjectAction = new AddLinkToProjectAction();
    const deleteLinkFromProjectAction = new DeleteLinkFromProjectAction();
    const context = { project: new Project('ccc'), driver: new SQLDriver() };
    await addLinkToProjectAction.execute('add google google.com', context);
    const response = await deleteLinkFromProjectAction.execute('delete google', context);
    expect(response.label).to.equal('google');
  });
});
