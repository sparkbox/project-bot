const AddLinkToProjectAction = require('./AddLinkToProjectAction');
const assert = require('assert');

class Actions {
  constructor(commandMap){
    this.commandMap = commandMap
  }
                 
  static parseActionTerm(userInputString) {
    let parsedUserInput = userInputString.toLowerCase().split(' ');
    let actionName = parsedUserInput[0]; 
    
    return actionName
  }

  static fromMessageText(fullMessageText) {
    assert(typeof fullMessageText === 'string');
    const commandMap = {
          'add': new AddLinkToProjectAction()
    }
    if (fullMessageText === ''){
      throw new TypeError('No Term Found');
    }
    
    let actionName = Actions.parseActionTerm(fullMessageText)
    return commandMap[actionName]
  }
}

module.exports = Actions;