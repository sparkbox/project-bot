const assert = require('assert');
const AddLinkToProjectResponse = require('./AddLinkToProjectResponse');
const ProjectLink = require('../projectLink');

class AddLinkToProjectAction {
  constructor(projectLink = ProjectLink,
             projectResponse = AddLinkToProjectResponse) {
    this.projectLink = projectLink;
    this.projectResponse = projectResponse;
  }

  parseParams(userInputString = '') {
    assert(typeof userInputString === 'string');
    let parsedUserInput = userInputString.split(' ');

    if (parsedUserInput.length < 2){
      throw new TypeError('invalid input');
    }

    let linkParams = {
      label: parsedUserInput[1],
      link: parsedUserInput[2]
    };
    return linkParams;
  }

  async execute(params, context){
    let paramsObj = this.parseParams(params);
    const project = context;
    let projectLink = new this.projectLink(project, paramsObj.label, paramsObj.link);
    await projectLink.save();

    const response = new this.projectResponse(paramsObj.label, paramsObj.link);
    return response;
  }
}

module.exports = AddLinkToProjectAction;
