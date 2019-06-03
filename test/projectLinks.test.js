const { expect } = require('chai');
const Project = require('../lib/project');
const ProjectLinks = require('../lib/projectLinks');
const AddLinkToProjectResponse = require('../lib/actions/AddLinkToProjectResponse');

describe('Project Links', () => {
  it('Adds links to Project Links', () => {
    const projectLinks = new ProjectLinks();
    projectLinks.add('google', 'google.com')
    const projectLinksList = projectLinks.projectLinksList;
    const expectedResult = { google: 'google.com' };
    expect(projectLinksList).to.deep.equal(expectedResult)
  }); 
  
  it('Saves a link to the Project', () => {
    const project = new Project();
    project.links.add('google', 'google.com');
    const projectList = project.links.projectLinksList;
    const expectedResult = { google: 'google.com' };
    expect(projectList).to.deep.equal(expectedResult)
  });
})