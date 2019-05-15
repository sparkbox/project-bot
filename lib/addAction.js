let project = {};
let exampleInput = 'add google google.com';
let exampleInput2 = 'add jira jira.com';

//returns the command action : 'add', 'delete'
function commandAction(str){
  let strArray = str.split(' ')
  return strArray[0] 
}

//returns the arguments : ['label', 'url']
class CommandParser {
    constructor(messageText) {
      this.messageText = messageText;
    }

    getParams() {
      this.paramArray = this.messageText.split(' ').slice(1);
      return this.paramArray;
    }
}

//Add Action: Validates and adds argument to main object
class Add {

  validate(arg) {}

  action(arg){
    project[arg[0]] = arg[1];
    return project
    // wondering if this should return true or false to send success message to user on add.
  }
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

function controller(str){
  let currentArguments = new CommandParser(str).getParams() 
  return command[commandAction(str)].action(currentArguments)
}

controller(exampleInput)
controller(exampleInput2)
// console.log(project)

//Id like for this controller function to return true or false based on if it was succesfully added to projects object.
//I'm trying to come up with a way to create a promise that executes this function and sends a success message

module.exports = { 
    controller,
    commandAction,
    CommandParser,
    Add,
    Delete
}
