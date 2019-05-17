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
      label: parsedUserInput[0],
      link: parsedUserInput[1]
    }
      
    return linkParams
  }

  async execute(params){ 
    let paramsObj = this.parseParams(params)
    // project.links[label] = link;     
    // store data -- > await db.store() if it is async
    // throw new Error('uh oh.. something went wrong');
    return new AddLinkToProjectResponse(paramsObj.label, paramsObj.link)  
  }
}


module.exports = AddLinkToProjectAction