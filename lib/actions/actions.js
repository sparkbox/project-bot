const assert = require('assert');
const AddLinkToProjectAction = require('./addLinkToProjectAction');
const ProjectOverviewAction = require('./projectOverviewAction');
const HelpAction = require('./helpAction');
const DeleteLinkFromProjectAction = require('./deleteLinkFromProjectAction');

class Actions {
  constructor(commandMap) {
    this.commandMap = commandMap;
  }

  static parseActionTerm(userInputString) {
    const parsedUserInput = userInputString.toLowerCase().split(' ');
    const actionName = parsedUserInput[0];
    return actionName === '' ? 'overview' : actionName;
  }

  static fromMessageText(fullMessageText) {
    assert(typeof fullMessageText === 'string');
    const commandMap = {
      add: new AddLinkToProjectAction(),
      overview: new ProjectOverviewAction(),
      help: new HelpAction(),
      delete: new DeleteLinkFromProjectAction(),
    };

    const actionName = Actions.parseActionTerm(fullMessageText);
    return commandMap[actionName];
  }
}

module.exports = Actions;
