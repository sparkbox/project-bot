class ProjectOverviewResponse {
  constructor(projectLinks) {
    this.projectLinks = projectLinks;
  }
  sendToBot(bot, message) {
    const listLinks = this.projectLinks.map((projectLink, i) => `${i + 1}. ${projectLink.label} ${projectLink.url}`).join('\n');
    const linkBuilder = [
	{	"type": "section",
    "text": {

           "type": "mrkdwn",
            "text": "1. facebook facebook.com\n2. google google.com"
        }
  }
]
console.log(listLinks);
    return bot.reply(message, listLinks);
  }

}
module.exports = ProjectOverviewResponse;
