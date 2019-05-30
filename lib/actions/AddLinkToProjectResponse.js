class AddLinkToProjectResponse {
    constructor(label, link){
      this.label = label;
      this.link = link;
    }

    sendToBot(bot, message) {
      return bot.reply(message, 'added');
    }
  } 

module.exports = AddLinkToProjectResponse;