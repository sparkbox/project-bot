const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const { expect } = chai;
const { AssertionError } = require('assert');

const AddLinkToProjectAction = require('../lib/actions/addLinkToProjectAction');
const Project = require('../lib/project');

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

  xit('@asyncResolves : adds link to DB', async () => {});

  // Component Level Test
  it('@component: returns an add object containing a response', async () => {
    const action = new AddLinkToProjectAction();
    const context = { project: new Project('ccc') };
    const response = await action.execute('add google google.com', context);
    expect(response.label).to.equal('google');
    expect(response.link).to.equal('google.com');
  });
});
