// import the class , and call it with the function
const { Actions } = require('../lib/actions/actions.js');

module.exports = function (controller) {
  controller.on('slash_command',function(bot,message){
    // message checks for channel ID
    // takes 'text' from message
    if (message.command === '/project') {
      let slashMessage = new Actions;
      slashMessage.fromMessageText;
    }
    else{
      console.log("Sorry, that command does not exist");
    }
  });
};

// "find channel and excute action"
