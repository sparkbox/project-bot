const { expect } = require('chai');
// const { JSON } = require('');
const ProjectOverviewResponse = require('../lib/actions/projectOverviewResponse.js');

describe('Project Overview Response', () => {
  it('returns a formatted list of links', () => {
    const links = [
      { label: 'facebook', link: 'facebook.com' },
      { label: 'google', link: 'google.com' },
    ];
    const expectedResult = '1. facebook facebook.com\n2. google google.com';
    let replyResponse = '';
    function replyMock(message, formattedResponse) {
      replyResponse = formattedResponse.text.text;
    }
    const responseInstance = new ProjectOverviewResponse(links);
    responseInstance.sendToBot({ reply: replyMock });
    console.log(replyResponse);
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
