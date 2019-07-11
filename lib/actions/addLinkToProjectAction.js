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
    let linkParams;
    if (parsedUserInput.length < 2) {
      throw new TypeError('invalid input');
    }

    if (parsedUserInput.length >= 4) {
      linkParams = {
        label: parsedUserInput.slice(1, 3).join(' '),
        link: parsedUserInput.pop(),
      };
    } else {
      linkParams = { label: parsedUserInput[1], link: parsedUserInput[2] };
    }

    return linkParams;
  }

  async execute(params, context) {
    const paramsObj = this.parseParams(params);
    // eslint-disable-next-line new-cap
    const projectLink = new this.projectLink(context.project, paramsObj.label, paramsObj.link);
    await projectLink.save(context.driver);
    // eslint-disable-next-line new-cap
    return new AddLinkToProjectResponse(paramsObj.label, paramsObj.link);
  }
}

module.exports = AddLinkToProjectAction;
