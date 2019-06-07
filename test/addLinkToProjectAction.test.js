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
      save() {}
    };

    class NullResponse {
      constructor() {}
    }

    const action = new AddLinkToProjectAction(ProjectLinkSpy,
                                              NullResponse);

    const project = new Project();
    const response = await action.execute('add google google.com', project);

    expect(projectLinkProjectArg).to.equal(project);
    expect(projectLinkLabelArg).to.equal('google');
    expect(projectLinkLinkArg).to.equal('google.com');
  });

  it('creates a project reponse', async () => {
    let projectResponseLabelArg;
    let projectResponseLinkArg;

    class NullLink {
      constructor() {}
      save() {}
    }

    class ProjectResponseSpy {
      constructor(label, link) {
        projectResponseLabelArg = label;
        projectResponseLinkArg = link;
      }
    }

    const action = new AddLinkToProjectAction(NullLink,
                                              ProjectResponseSpy);

    const project = new Project();
    const response = await action.execute('add google google.com', project);

    expect(projectResponseLabelArg).to.equal('google');
    expect(projectResponseLinkArg).to.equal('google.com');

//    expect(response.constructor.name).to.equal('ProjectResponseSpy');
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
    const project = new Project();

    const response = await action.execute('add google google.com', project);

    expect(response.label).to.equal('google');
    expect(response.link).to.equal('google.com');
  });
});
