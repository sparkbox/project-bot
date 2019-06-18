class OverviewResponse {
  constructor(project) {
    this.project = project;
  }


  sendToBot(bot, message) {
    return bot.reply(message, `Here is an overview of your project: 
      ${this.project.forEach((project, i) => {
    console.log(this.project[i].url);
  })}
    `);
  }
}

module.exports = OverviewResponse;
