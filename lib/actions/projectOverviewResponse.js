class ProjectOverviewResponse {
  constructor(projectLinks) {
    this.projectLinks = projectLinks;
  }

  sendToBot(bot, message) {
    const listLinks = this.projectLinks.map((projectLink, i) => `${i + 1}. ${projectLink[i].label} ${projectLink[i].url}`).join('\n');
    const linkBuilder = {
	type: 'section',
      'text': {
        type: 'mrkdwn',
        'text': listLinks,
      },
    };
    return bot.reply(message, linkBuilder);
  }
}
module.exports = ProjectOverviewResponse;
