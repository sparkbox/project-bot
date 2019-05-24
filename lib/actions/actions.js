const assert = require('assert');
const AddLinkToProjectAction = require('./addLinkToProjectAction');

class Actions {
  constructor(commandMap) {
    this.commandMap = commandMap;
  }

  static parseActionTerm(userInputString) {
    const parsedUserInput = userInputString.toLowerCase().split(' ');
    const actionName = parsedUserInput[0];

    return actionName;
  }

  static fromMessageText(fullMessageText) {
    assert(typeof fullMessageText === 'string');
    const commandMap = {
      add: new AddLinkToProjectAction(),
    };
    if (fullMessageText === '') {
      throw new TypeError('No Term Found');
    }

    const actionName = Actions.parseActionTerm(fullMessageText);
    return commandMap[actionName];
  }
}

module.exports = Actions;
