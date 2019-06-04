const { expect } = require('chai');
const Project = require('../lib/project');
const ProjectLinks = require('../lib/projectLinks');
const AddLinkToProjectResponse = require('../lib/actions/AddLinkToProjectResponse');

describe('Project Links', () => {
  it('Saves a link to the Project', () => {
    let project = new Project();
    const projectLinks = new ProjectLinks();
    projectLinks.add(project, 'google', 'google.com')
    const projectLinksList = project.links;
    const expectedResult = { google: 'google.com' };
    expect(projectLinksList).to.deep.equal(expectedResult)
  }); 

  it('Returns Error Message on invalid adds link to Project Links', () => {
    const projectLinks = new ProjectLinks();
    const projectLinksList = projectLinks.add({label: 'google', link: 'google.com'});
    const expectedResult = 'Cannot add item.';
    expect(projectLinksList).to.deep.equal(expectedResult)
  }); 

  it('Returns Error Message on invalid adds link to Project', () => {
    const project = new Project();
    const projectLinks = new ProjectLinks();
    projectLinks.add({label: 'google', link: 'google.com'});
    const projectList = project.links;
    const expectedResult = {};
    expect(projectList).to.deep.equal(expectedResult)
  });
})