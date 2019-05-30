const Actions = require('../lib/actions/actions');
const AddLinkToProjectAction = require('../lib/actions/addLinkToProjectAction');
const AddLinkToProjectResponse = require('../lib/actions/AddLinkToProjectResponse');
const Project = require('../lib/project');

module.exports = function(controller) {
  controller.on('slash_command', function (bot, message) {
    if(message.command === '/project'){
      let text = message.text;
      let command = message.command;
      let action = Actions.fromMessageText(text);
      let response = action.execute(text);
      console.log(response.sendToBot(bot, message));
    }
  });
}
