const assert = require('assert');
const AddLinkToProjectResponse = require('./AddLinkToProjectResponse');
const ProjectLink = require('../projectLink');
const MySQLDriver = require('../dbDriver/mysql');

class AddLinkToProjectAction {
  constructor(projectLink = ProjectLink) {
    this.projectLink = projectLink;
  }

  // eslint-disable-next-line class-methods-use-this
  parseParams(userInputString = '') {
    assert(typeof userInputString === 'string');
    const parsedUserInput = userInputString.split(' ');

    if (parsedUserInput.length < 2) {
      throw new TypeError('invalid input');
    }

    const linkParams = {
      label: parsedUserInput[1],
      link: parsedUserInput[2],
    };
    return linkParams;
  }

  async execute(params, context) {
    const paramsObj = this.parseParams(params);
    const project = context;
    // eslint-disable-next-line new-cap
    const projectLink = new this.projectLink(project, paramsObj.label, paramsObj.link);
    const driver = new MySQLDriver();
    await projectLink.save(driver);
    // eslint-disable-next-line new-cap
    const response = new AddLinkToProjectResponse(paramsObj.label, paramsObj.link);
    return response;
  }
}

module.exports = AddLinkToProjectAction;
