const Project = require('../lib/project.js');
const AddLinkToProjectAction = require('../lib/actions/addLinkToProjectAction.js');
const Actions = require('../lib/actions/actions.js');
const AddLinkToProjectResponse = require('../lib/actions/AddLinkToProjectResponse.js');


module.exports = function(controller) {
  controller.on('slash_command', async function (bot, message) {
    if(message.command === '/project'){
        let findChannel = Project.findByChannel(message.channel_id);
        
        let action = Actions.fromMessageText(message.text);
        let response = await action.execute(message.text);
        response.sendToBot(bot, message);

    }
  });
}
