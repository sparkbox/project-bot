module.exports = function(controller) {
  // simple answer
  controller.on('slash_command', function (bot, message) {
    bot.reply(message, 'A link has been added');
  });
}
