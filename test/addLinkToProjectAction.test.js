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
  it('returns an add object containing a response', async () => {
    const action = new AddLinkToProjectAction();
    const project = new Project();

    const response = await action.execute('add google google.com', project);

    const expectedResult = new AddLinkToProjectResponse('google', 'google.com');
    expect(response).to.deep.equal(expectedResult);
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

  xit('@asyncResolves : adds link to DB', async () => {});
});
