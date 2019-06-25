const { expect } = require('chai');
const smb = require('slack-message-builder');
// const { JSON } = require('');
const ProjectOverviewResponse = require('../lib/actions/projectOverviewResponse.js');

describe('Project Overview Response', () => {
  it('returns a formatted list of links', () => {
    const links = [
      { label: 'facebook', url: 'facebook.com' },
      { label: 'google', url: 'google.com' },
    ];
    const expectedResult = smb()
      .attachment()
      .text('1. facebook facebook.com\n2. google google.com')
      .end()
      .json();

    let replyResponse = '';
    function replyMock(message, formattedResponse) {
      replyResponse = formattedResponse;
    }
    const responseInstance = new ProjectOverviewResponse(links);
    responseInstance.sendToBot({ reply: replyMock });
    expect(replyResponse).to.deep.equal(expectedResult);
  });

  it('returns true when list of links is empty', () => {
    const links = [];
    const expectedResult = '';
    let replyResponse = false;
    function replyMock(message) {
      replyResponse = message === expectedResult;
    }
    const responseInstance = new ProjectOverviewResponse(links);
    responseInstance.sendToBot({ reply: replyMock }, expectedResult);
    expect(replyResponse).to.equal(true);
  });
});
