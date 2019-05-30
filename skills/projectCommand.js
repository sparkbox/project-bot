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
      console.log(message.text)
      if(message.channel_id === 'CK5B7E5FZ') {
        // bot.reply(message,"Channel ID")
        console.log(message.text)
        let find = Project.findByChannel(message.channel_id);
        // this just takes text arguments (add goog google.com)
        let action = Actions.fromMessageText(message.text);
        let links = AddLinkToProjectAction.parseParams(action);
        // will just return promise (call sendToBot in then or use await )
        let response = await AddLinkToProjectResponse()
        // let response = action.execute(message.text).then(console.log);
        response.sendToBot(bot, message);
      }
    }
  });
}
