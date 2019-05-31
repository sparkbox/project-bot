class AddLinkToProjectResponse {
  constructor(label, link){
    this.label = label;
    this.link = link;
  }

  sendToBot(bot) {
    return bot.reply('Link stored.')
  }
}

module.exports = AddLinkToProjectResponse;