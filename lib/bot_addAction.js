/* eslint-disable func-names */
module.exports = function (controller) {
    controller.on('slash_command', (bot, message) => {

      switch (message.command) {
        case '/project':  
          class Add {
            validate(arg) {}
          
            async action(arg, currentProject, db = {store(){}}){ 
              this.success = false;
              currentProject.links[arg[0]] = arg[1];
              try {
                await db.store(currentProject)
                this.success = true;
              } catch(err) {
                this.success = false;
                console.log(err);
              }
            }
          }
  
          let add = new Add();
          add.action(['label', 'url'], {links: {}})
          .then(() => {
            if(add.success){
              bot.reply(message, 'I added the link.')
            } else {
              bot.reply(message, 'ehhh... bad chickens in the house');
            }
          })
                
      }
    });
  };