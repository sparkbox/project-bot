class AddLinkToProjectResponse {
  constructor(label, link) {
    this.label = label;
    this.link = link;
  }

  /* eslint-disable-next-line class-methods-use-this */
  sendToBot(bot) {
    return bot.reply('Link stored.');
  }
}

module.exports = AddLinkToProjectResponse;
