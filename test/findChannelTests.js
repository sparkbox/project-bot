const { expect } = require('chai');
const Project = require('../lib/project.js');


describe('Find Channel Tests', () => {
  it('tests if channel exists', async () => {
    const projectInstance = await Project.findByChannel('c5678g');
    const expectedResult = new Project('c5678g');
    expect(projectInstance).to.deep.equal(expectedResult);
  });

  it('tests if channel exists again', async () => {
    const projectInstance = await Project.findByChannel('3jkls9');
    const expectedResult = new Project('3jkls9');
    expect(projectInstance).to.deep.equal(expectedResult);
  });
});
