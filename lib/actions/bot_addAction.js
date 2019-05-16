/* eslint-disable func-names */
module.exports = function (controller) {
    controller.on('slash_command', (bot, message) => {

      switch (message.command) {
        case '/project':  

          class Add {
              constructor(){
                this.success = false;
              }
            validate(arg) {}
          
            async action(arg, currentProject, db = {store(){}}){ 
              this.success = false;
              currentProject.links[arg[0]] = arg[1];
              try {
                await db.store(currentProject)
                this.success = true;
                console.log(db)
              } catch(err) {
                this.success = false;
                console.log(err);
              }
            }

            response(){
                if(this.success){
                    // returns an object
                } else {
                    // returns an object 
                }
            }
          }
  
          let add = new Add();
          add.action(['label', 'url'], {links: {}})
          .then(() => {
              bot.replyPublic(message, add.response())
          })
                
      }
    });
  };