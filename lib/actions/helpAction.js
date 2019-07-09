const HelpResponse = require('../actions/helpResponse');

class HelpAction {
  // eslint-disable-next-line class-methods-use-this
  execute() {
    return new HelpResponse();
  }
}

module.exports = HelpAction;
