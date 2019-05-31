const Actions = require('../lib/actions/actions');
const AddLinkToProjectAction = require('../lib/actions/addLinkToProjectAction');
const AddLinkToProjectResponse = require('../lib/actions/AddLinkToProjectResponse');
const Project = require('../lib/project');

module.exports = function(controller) {
  controller.on('slash_command', async function (bot, message) {
    if(message.command === '/project'){
      let channel = message.channel;
      let fullMessageText = message.text;
      let command = message.command;
      let project = await Project.findByChannel(channel);
      let action = Actions.fromMessageText(fullMessageText);
      let response = await action.execute(fullMessageText);
     response.sendToBot(bot, message);
    }
  });
}
