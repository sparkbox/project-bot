const Project = require('../lib/project.js');
const Actions = require('../lib/actions/actions.js');

module.exports = (controller) => {
  controller.on('slash_command', async (bot, message) => {
    console.log('bot', bot);
    console.log('message', message);
    if (message.command === '/project') {
      /* eslint-disable-next-line no-unused-vars */
      const project = await Project.findByChannel(message.channel_id);
      const action = Actions.fromMessageText(message.text);
      // eslint-disable-next-line no-undef
      const response = await action.execute(message.text, { project, driver: projectBot.dbDriver });
      await response.sendToBot(bot, message);
    }
  });
};
