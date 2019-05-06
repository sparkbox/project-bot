const debug = require('debug')('botkit:channel_join');

module.exports = function (controller) {
  controller.on('bot_channel_join', (bot, message) => {
    bot.reply(message, 'I have arrived! I am a friendly project bot.');
  });
};
