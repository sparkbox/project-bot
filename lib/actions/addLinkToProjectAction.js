const assert = require('assert');
const AddLinkToProjectResponse = require('./AddLinkToProjectResponse');

class AddLinkToProjectAction {
  /* eslint-disable-next-line class-methods-use-this */
  parseParams(userInputString = '') {
    assert(typeof userInputString === 'string');
    const parsedUserInput = userInputString.split(' ');

    if (parsedUserInput.length < 2) {
      throw new TypeError('invalid input');
    }
    const linkParams = { label: parsedUserInput[0], link: parsedUserInput[1] };
    return linkParams;
  }

  async execute(params) {
    const paramsObj = this.parseParams(params);
    // project.links[label] = link;
    // store data -- > await db.store() if it is async
    // throw new Error('uh oh.. something went wrong');
    return new AddLinkToProjectResponse(paramsObj.label, paramsObj.link);
  }
}

module.exports = AddLinkToProjectAction;
