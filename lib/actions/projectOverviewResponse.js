class ProjectOverviewResponse {
  constructor(links) {
    this.links = links;
  }

  sendToBot(bot, message) {
    hold = {
    "text": "I am a test message http://slack.com",
    "attachments": [
        {
            "text": "And here’s an attachment!"
        }
    ]
};
    const listLinks = this.links.map(({ link, label }, i) => `${i + 1}. ${label} ${link}`).join('\n');
    return bot.reply(message, listLinks);
  }
}

module.exports = ProjectOverviewResponse;
