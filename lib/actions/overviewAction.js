const OverviewResponse = require('./overviewResponse');

class OverviewAction {
  // eslint-disable-next-line class-methods-use-this
  async execute() {
    return new OverviewResponse();
  }
}

module.exports = OverviewAction;
