const assert = require('assert');
const AddLinkToProjectResponse = require('./AddLinkToProjectResponse');
const ProjectLink = require('../projectLink');

class AddLinkToProjectAction {

  parseParams(userInputString = '') {
    assert(typeof userInputString === 'string');
    let parsedUserInput = userInputString.split(' ');

    if (parsedUserInput.length < 2){
      throw new TypeError('invalid input');
    }
    
    let linkParams = { 
      label: parsedUserInput[1],
      link: parsedUserInput[2]
    }
    return linkParams
  }

  async execute(params, context){ 
    let paramsObj = this.parseParams(params)
    const project = context;
    let projectLink = new ProjectLink(project, paramsObj.label, paramsObj.link);

    await projectLink.save();
    
    return new AddLinkToProjectResponse(paramsObj.label, paramsObj.link);  
  }
}

module.exports = AddLinkToProjectAction;
