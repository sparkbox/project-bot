let project = {
    channel_Name: 'int-project-bot',
    channel_id: 'c9367a',
    links: {}
}

let exampleInput = {
  channel_Name: 'int-project-bot',
  channel_id: 'c9367a',
  command: '/project',
  text: 'add google google.com'
  }; 
let exampleInput2 = {
  channel_Name: 'int-project-bot',
  channel_id: 'c9367a',
  command: '/project',
  text: 'add colby-portfolio colbyallen.co'
}; 

//returns the command action : 'add', 'delete'
function commandAction(str){
  let lowerCaseStr = str.toLowerCase()
  let strArray = lowerCaseStr.split(' ')
  let action = strArray[0] 
  // if(action === 'add' || action === 'delete'){
      return action
  // }
    // return 'Incorrect Command Action Entry'
}

//returns the label/url arguments in this format: ['label', 'url']
class CommandParser {
    constructor(messageText) {
      this.messageText = messageText;
    }

    getParams() {
      return this.messageText.split(' ').slice(1);
    }
}

//Add Action: Validates and adds argument to main object
class Add {

  validate(arg) {}

  action(arg){
   project.links[arg[0]] = arg[1];
   return project
  }
// ^ wondering if this should return true or false to send success message to user on add.

}

//Delete Action: Deletes an item from the current channel
class Delete {

  validate(){}

  action(){}
}

//Command Mapper
let command = {
  'add': new Add,
  'delete': new Delete
  //overview, help, etc.
}

function controller(commandInput){
  // if(channelValidation){
    let currentArguments = new CommandParser(commandInput.text).getParams() 
    return command[commandAction(commandInput.text)].action(currentArguments)
  // }
}

controller(exampleInput)
controller(exampleInput2)
// controller(exampleInput3)
// controller(exampleInput4)

//I;d like to use promises within this code in order to throw Errors when invalid entries occur
//I'm trying to come up with a way to create a promise that executes this function and sends a success message

