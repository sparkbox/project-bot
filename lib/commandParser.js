class CommandParser {
    // Constructor will received a string of text, then execute logic to
    // parse out the command string into logical pieces so it can return the
    // action and parameters. Feel free to use private methods to help
    // execute this logic.
    constructor(messageText) {
      this.messageText = messageText;
      this.paramArray = null;
    }
  
    // Return a specific parameter
    getParam(number) {
      this.paramArray = this.messageText.split(' ');
      this.param = this.paramArray[number];
      return this.param;
    }
  
    // Public method to determine the command action (ie. add, edit, delete)
    getAction() {
      return this.getParam(0);
    }
  
    // Public method to determine the parameters for the action
    getParams() {
        this.paramArray = this.messageText.split(' ');
        return this.paramArray.slice(1).join(' ');
    }
  
    // Private method that will validate that the command is a valid one,
    // and that includes all the parameters required to complete the command task
    validate() {
    //   if (this.paramArray.length < 3) {
    //     return false;
    //   }
  
      if (this.getParam(0) !== 'add' || this.getParam(0) !== 'delete') {
        throw new Error('Invalid Action');
      }
  
      return true;
    }
  }
  
  module.exports = CommandParser;
