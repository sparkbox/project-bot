const { Add } = require('./addClass')

class Actions {
  constructor(){
    this.commandMapper = {
      'add': new Add,
    }
  }

  //private method?
  commandAction(str) {
    let strArray = str.toLowerCase().split(' ');
    let action = strArray[0]; 
    return action;
  }

    //public method
  fromMessageText(input) {
    console.log(this.commandMapper[this.commandAction(input)])
    return this.commandMapper[this.commandAction(input)];
  }
}


module.exports = Actions;