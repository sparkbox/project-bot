const OverviewResponse = require('./overviewResponse');
const ProjectLink = require('../projectLink');
const MySQLDriver = require('../dbDriver/mysql');

class OverviewAction {
  // eslint-disable-next-line class-methods-use-this
  async execute(params, context) {
    const projectLink = new ProjectLink(context.project);
    const driver = new MySQLDriver();
    const projectLinkList = await projectLink.list(driver);
    console.log(projectLinkList);
    return new OverviewResponse(projectLinkList);
  }
}

module.exports = OverviewAction;
