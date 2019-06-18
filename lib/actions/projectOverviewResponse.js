class ProjectOverviewResponse {
  constructor(links) {
    this.links = links;
  }

  sendToBot(bot, message) {
    const listLinks = this.links.map(({ link, label }, i) => `${i + 1}. ${label} ${link}`).join('\n');
    return bot.reply(message, listLinks);
  }
}

module.exports = ProjectOverviewResponse;
