const assert = require('assert')
const AddLinkToProjectResponse = require('./AddLinkToProjectResponse')

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

  async execute(params, currentProject){ 
    let paramsObj = this.parseParams(params)

    const project = await currentProject;
    project.links.add(paramsObj.label, paramsObj.link);

    // throw new Error('uh oh.. something went wrong');
    // return new AddLinkToProjectResponse(paramsObj.label, paramsObj.link);  
  }
}


module.exports = AddLinkToProjectAction