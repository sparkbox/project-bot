const { expect } = require('chai');
const Project = require('../lib/project');
const ProjectLink = require('../lib/projectLink');
const AddLinkToProjectResponse = require('../lib/actions/AddLinkToProjectResponse');

describe('Project Link', () => {
  it('Has a Project, Label, and Link', () => {
    const projectLink = { project: {}, label: 'google', link: 'google.com' }
    const expectedResult = new ProjectLink({}, 'google', 'google.com' );
    expect(projectLink).to.deep.equal(expectedResult)
  }); 

  xit('Saves a link to the Project', () => {}); 
})