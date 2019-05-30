// import the class , and call it with the function
const Project = require('../lib/project.js');
// const AddLinkToProjectAction = require('../lib/actions/addLinkToProjectAction.js');
const Actions = require('../lib/actions/actions.js');
// const AddLinkToProjectResponse = require('../lib/actions/AddLinkToProjectResponse.js');


module.exports = function(controller) {
  controller.on('slash_command', function (bot, message) {
    if(message.command === '/project'){
      // "find channel and excute action"
      console.log(message.channel_id)
      if(message.channel_id === 'DK3H5J1B7'){
        bot.reply("Channel ID")
        console.log(message.text)
        // let find = Project.findByChannel(message.channel_id);
      }
      // let action = Actions.fromMessageText(message.text);
      // let response = action.execute(message.text).then(console.log);
      // response.sendToBot(bot, message);
    }
  });
}


// sendToBot(bot, "Test") {
//   return bot.reply( message, 'Link added');
//
// }
