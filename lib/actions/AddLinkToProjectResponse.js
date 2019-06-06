class AddLinkToProjectResponse {
  constructor(label, link) {
    this.label = label;
    this.link = link;
  }

  /* eslint-disable-next-line class-methods-use-this */
  sendToBot(bot, message) {
    return bot.reply(message, 'Link stored.');
  }
}

module.exports = AddLinkToProjectResponse;
