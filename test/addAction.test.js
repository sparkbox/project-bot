const { expect } = require('chai');
const { 
    controller,
    commandAction,
    CommandParser,
    Add, 
    Delete
} = require('../lib/addAction');

describe.only('Feat', () => {

    describe('Command Parser', ()=> {
        it('should return parameters', () => {
            const commandStr = 'add one two'
            const command = new CommandParser(commandStr).getParams();
            expect(command).to.deep.equal([ 'one', 'two' ]);
        })
        xit('should return error on invalid input', () => {
            const commandStr = 'bogus one'
            const command = new CommandParser(commandStr);
            expect(command.validate.bind(command,commandStr)).to.throw('Invalid Action');
        })
    
    });
    
    describe('Command Action', ()=> {
        it('should return a valid action', () => {
            const commandStr = 'add google google.com'
            const action = commandAction(commandStr);
            expect(action).to.equal('add');
        });

        it('should return a valid action', () => {
            const commandStr = 'add google google.com'
            const action = commandAction(commandStr);
            expect(action).to.equal('add');
        });
        
    });

    
    describe('Add Action', ()=> {
        it('should return a valid action', () => {
            const commandStr = 'add google google.com'
            const action = commandAction(commandStr);
            expect(action).to.equal('add');
        });

        xit('should add a valid action to object', () => {
            //having trouble implementing this test
            let project = {}
            const commandStr = 'add google google.com'
            controller(commandStr);
            expect(project).to.equal({google: 'google.com'});
        });
    
        xit('should return error on invalid arguments', () => {
            const commandStr = 'added one two'
            const action = new Add().validate(commandStr);
            expect(action.bind(action, commandStr)).to.throw('Invalid Action');
        })
    
    });


})