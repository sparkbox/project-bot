const { expect } = require('chai');
const Project = require('../lib/project.js');




describe('Find Channel Tests', () => {
  it('tests if channel exists', async () => {
    const projectInstance = await Project.findByChannel('c5678g');
    expect(projectInstance.channel_id).to.equal('c5678g');
  });

  it('tests if channel exists again', async () => {
    const projectInstance = await Project.findByChannel('3jkls9');
    expect(projectInstance.channel_id).to.equal('3jkls9');
  });
});
