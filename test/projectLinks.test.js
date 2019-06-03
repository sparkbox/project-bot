const { expect } = require('chai');
const Project = require('../lib/project');
const ProjectLinks = require('../lib/projectLinks');
const AddLinkToProjectResponse = require('../lib/actions/AddLinkToProjectResponse');

describe('Saves Links To Project', () => {
  it('Adds links to Project Links', () => {
    const projectLinks = new ProjectLinks();
    projectLinks.add('google', 'google.com')
    const projectLinksList = projectLinks.projectLinksList;
    const expectedResult = { google: 'google.com' };
    expect(projectLinksList).to.deep.equal(expectedResult)
  });  
})