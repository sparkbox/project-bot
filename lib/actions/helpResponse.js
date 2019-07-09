class HelpResponse {
  /* eslint-disable-next-line class-methods-use-this */
  sendToBot(bot, message) {
    return bot.reply(message,
      'To add a link: /project add [label] [url] \n To Delete a Link: /project delete [label] \n To view all links: /project \n For help: /project help');
  }
}

module.exports = HelpResponse;
