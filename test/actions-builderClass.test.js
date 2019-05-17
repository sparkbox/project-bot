const { expect } = require('chai');
const Actions  = require('../lib/actions/actions-builderClass');
const { Add } = require('../lib/actions/addClass')

describe('Action Builder', ()=> {
    it('should return an action as a string', () => {  
        let action = new Actions;
        let result = 'add'
    expect(action.commandAction('add example example.com')).to.equal(result);
    });

    it('should new up Action Class', () => {  
        let action = new Actions;
    expect(action.fromMessageText('add example example.com')).to.be.an('object');
    });

});

    
    
