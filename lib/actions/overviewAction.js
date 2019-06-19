const OverviewResponse = require('./overviewResponse');
const ProjectLink = require('../projectLink');
const MySQLDriver = require('../dbDriver/mysql');

class OverviewAction {
  // eslint-disable-next-line class-methods-use-this
  async execute(params, context) {
    const projectLink = new ProjectLink(context.project);
    const driver = new MySQLDriver();
    return new OverviewResponse(await projectLink.list(driver));
  }
}

module.exports = OverviewAction;
