class OverviewResponse {
  constructor(project) {
    this.project = project;
  }

  // eslint-disable-next-line class-methods-use-this
  getProjectLinks(project) {
    let projectLinks = [];
    for (let i = 0; i < project.length; i += 1) {
      projectLinks += `( ${(i + 1)} ) ${project[i].label} : ${project[i].url} \n`;
    }
    return projectLinks;
  }

  sendToBot(bot, message) {
    return bot.reply(message, `Here is a list of your links \n ${this.getProjectLinks(this.project)}`);
  }
}


module.exports = OverviewResponse;
