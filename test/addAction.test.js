const { expect } = require('chai');
const { Add } = require('../lib/actions/addClass');

describe('Add Action', ()=> {
    it('@asyncResolves : should return an add object containing a response', (done) => {
        let add = new Add();
        add.execute('label url', {links: {}})

        const resolvingPromise = new Promise( (resolve) => {
          resolve(add);
        });

        resolvingPromise.then( (result) => {
          expect(result).to.eql({ success:true });
          done();
        });
    });
});

    
    
