const ProjectOverviewResponse = require('./projectOverviewResponse.js');
const ProjectLink = require('../projectLink');
const MySQLDriver = require('../dbDriver/mysql');

class ProjectOverviewAction {
  // eslint-disable-next-line class-methods-use-this
  //context has project id
  async execute(params, context) {
    // console.log(context);
    const project = context;
    // eslint-disable-next-line new-cap
    const projectLink = new ProjectLink(project);
    const driver = new MySQLDriver();
    await projectLink.listOut(driver);
    // return new ProjectOverviewResponse();
  }
}

module.exports = ProjectOverviewAction;
