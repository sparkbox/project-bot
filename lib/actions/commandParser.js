class CommandParser {
    constructor(messageText) {
      this.messageText = messageText;
    }
      //returns a str of params
    getParams() {
      return this.messageText.split(' ').slice(1).join(' ');
    }
}


module.exports = CommandParser;