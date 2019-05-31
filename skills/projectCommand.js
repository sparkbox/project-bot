const Project = require('../lib/project.js');
const AddLinkToProjectAction = require('../lib/actions/addLinkToProjectAction.js');
const Actions = require('../lib/actions/actions.js');
const AddLinkToProjectResponse = require('../lib/actions/AddLinkToProjectResponse.js');


module.exports = function(controller) {
  controller.on('slash_command', async function (bot, message) {
    if(message.command === '/project'){
        let channel = Project.findByChannel(message.channel_id);
        // this just takes text arguments (add goog google.com)
        let action = Actions.fromMessageText(message.text);
        let response = await action.execute(message.text);
        response.sendToBot(bot, message.channel);

    }
  });
}
