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

  it('Saves a link to the Project', () => {
    let hasAdded = false;
    const projectLink = new ProjectLink({id: 'c17183'}, 'google', 'google.com' );
    const db = { 
      addLink(projectId, label, link) {
        if(projectId == 'c17183' && label == 'google' && link == 'google.com') {
          hasAdded = true;
        }
      }
     };

    projectLink.save(db);
    
    expect(hasAdded).to.equal(true);
  }); 
})