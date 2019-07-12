const ProjectOverviewResponse = require('./projectOverviewResponse.js');
const ProjectLink = require('../projectLink');

class ProjectOverviewAction {
  // eslint-disable-next-line class-methods-use-this
  async execute(params, context) {
    // eslint-disable-next-line new-cap
    const projectLinks = 'overview';
    // await ProjectLink.findByProject(context.project, context.driver);
    return projectLinks;
    // new ProjectOverviewResponse(projectLinks);
  }
}

module.exports = ProjectOverviewAction;
