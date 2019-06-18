class OverviewResponse {
  constructor(project) {
    this.project = project;
  }

  // eslint-disable-next-line class-methods-use-this
  getProjectLinks(project) {
    let projectLinks = [];

    for (let i = 0; i < project.length; i++) {
      projectLinks += project[i].url;
    }

    return projectLinks;
  }

  sendToBot(bot, message) {
    return bot.reply(message, `Here is a list of your links ${this.getProjectLinks(this.project)}`);
  }
}


module.exports = OverviewResponse;
