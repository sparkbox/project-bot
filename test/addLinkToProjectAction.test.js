const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
const AddLinkToProjectAction = require('../lib/actions/addLinkToProjectAction');
const AddLinkToProjectResponse = require('../lib/actions/addLinkToProjectResponse');
const Project = require('../lib/project');
const ProjectLink = require('../lib/projectLink');
const AssertionError = require('assert').AssertionError;


describe('Add Link to Project Action', ()=> {
  it('returns an error message on invalid input', async () => {
    const addLinkToProjectAction = new AddLinkToProjectAction();
    await expect(addLinkToProjectAction.execute('google')).to.be.rejectedWith(TypeError);
  });

  it('returns an error message if parameters are undefined', async () => {
    const addLinkToProjectAction = new AddLinkToProjectAction();
    await expect(addLinkToProjectAction.execute()).to.be.rejectedWith(TypeError);
  });

  it('returns an error message if parameters not a string', async () => {
    const addLinkToProjectAction = new AddLinkToProjectAction();
    await expect(addLinkToProjectAction.execute(['google', 'google.com'])).to.be.rejectedWith(AssertionError);
  });

  xit('@asyncResolves : adds link to DB', async () => {});

  it('@asyncResolves : returns an add object containing a response', async () => {
    const action = new AddLinkToProjectAction();
    const project = new Project();

    const response = await action.execute('add google google.com', project);

    const expectedResult = new AddLinkToProjectResponse('google', 'google.com');
    expect(response).to.deep.equal(expectedResult);
  });
});
