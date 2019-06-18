const assert = require('assert');
const DeleteLinkFromProjectResponse = require('./deleteLinkFromProjectResponse');
const ProjectLink = require('../projectLink');

class DeleteLinkFromProjectAction {
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
    const labelParam = { label: parsedUserInput[1] };
    return labelParam;
  }

  // eslint-disable-next-line class-methods-use-this
  async execute(param, context) {
    const paramObj = this.parseParams(param);
    // eslint-disable-next-line new-cap
    const projectLink = await ProjectLink
      .findByProjectAndLabel(context.project, context.driver, paramObj.label);
    await projectLink.delete(context.driver);
    return new DeleteLinkFromProjectResponse(paramObj.label);
  }
}

module.exports = DeleteLinkFromProjectAction;
