const { expect } = require('chai');
const ProjectOverviewResponse = require('../lib/actions/projectOverviewResponse.js');

describe('Project Overview Response', () => {
  it('returns a formatted list of links', () => {
    const links = [
      { label: 'facebook', link: 'facebook.com' },
      { label: 'google', link: 'google.com' },
    ];
    const expectedResult = '1. facebook facebook.com\n2. google google.com';
    console.log(expectedResult);
    let replyResponse = '';
    function replyMock(message, formattedResponse) {
      replyResponse = formattedResponse;
    }
    console.log(replyResponse);
    const responseInstance = new ProjectOverviewResponse(links);
    responseInstance.sendToBot({ reply: replyMock });
    expect(replyResponse).to.equal(expectedResult);
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
