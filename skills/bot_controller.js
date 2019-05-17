const Actions = require('../lib/actions/actions-builderClass');
const { Add } = require('../lib/actions/addClass')

module.exports = function (controller) {
  let action = new Actions();
  let add = new Add;
  controller.on('slash_command', async (bot, message) => {

    if(message.command === '/project'){
        action.fromMessageText(message.text)
        await bot.reply(message, action);
    }

  });
};
