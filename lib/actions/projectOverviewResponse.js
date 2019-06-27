const smb = require('slack-message-builder');

class ProjectOverviewResponse {
  constructor(projectLinks) {
    this.projectLinks = projectLinks;
  }

  sendToBot(bot, message) {
    const listLinks = this.projectLinks.map((projectLink, i) => `*  *${projectLink.label}* ${projectLink.url}`).join('\n');

    return bot.replyPrivate(message, smb()
      .attachment()
      .text(`${listLinks}`)
      .end()
      .json());
  }
}

module.exports = ProjectOverviewResponse;
