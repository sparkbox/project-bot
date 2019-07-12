const assert = require('assert');
const AddLinkToProjectResponse = require('./AddLinkToProjectResponse');
const ProjectLink = require('../projectLink');

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
    // eslint-disable-next-line new-cap
    const projectLink = new this.projectLink(context.project, paramsObj.label, paramsObj.link);
    // await projectLink.save(context.driver);
    // eslint-disable-next-line new-cap
    return new AddLinkToProjectResponse(paramsObj.label, paramsObj.link);
  }
}

module.exports = AddLinkToProjectAction;
