const ProjectOverviewResponse = require('./projectOverviewResponse.js');
const ProjectLink = require('../projectLink');
const MySQLDriver = require('../dbDriver/mysql');

class ProjectOverviewAction {
  // eslint-disable-next-line class-methods-use-this
  async execute(params, context) {
    // eslint-disable-next-line new-cap
    const driver = new MySQLDriver();
    const projectLinks = await ProjectLink.findByProject(context.project, driver);
    return new ProjectOverviewResponse(projectLinks);
  }
}

module.exports = ProjectOverviewAction;
