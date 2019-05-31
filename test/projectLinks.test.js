const { expect } = require('chai');
const ProjectLinks = require('../lib/projectLinks');

describe('Add Link To Project Response Mock', () => {
  it('returns true if bot response link is stored', () => {
    const expectedMessage = 'Link stored.'
    let hasReplied = false;
    function replyMock(message) {
      hasReplied = message === expectedMessage;
    }
    
    const response = new AddLinkToProjectResponse();
    response.sendToBot( {reply: replyMock} );
    
    expect(hasReplied).to.be.true;
  })
})