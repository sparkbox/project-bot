class OverviewResponse {
  constructor(project) {
    this.project = project;
  }

  sendToBot(bot, message) {
    return bot.reply(message, `Here is an overview of your project: ${this.project}`);
  }
}

module.exports = OverviewResponse;
