const { expect } = require('chai');
const CommandParser = require('../lib/commandParser');

describe('Command Parser', ()=> {
    it('should return a valid action', () => {
        const commandStr = 'add google google.com'
        const command = new CommandParser(commandStr);
        expect(command.getAction()).to.equal('add');
    });
    it('should return parameters', () => {
        const commandStr = 'add one two three'
        const command = new CommandParser(commandStr);
        expect(command.getParams()).to.equal('one two three');
    })
    it('should return error on invalid input', () => {
        const commandStr = 'bogus one'
        const command = new CommandParser(commandStr);
        expect(command.validate.bind(command,commandStr)).to.throw('Invalid Action');
    })

});