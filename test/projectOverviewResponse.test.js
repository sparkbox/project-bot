const { expect } = require('chai');
const ProjectOverviewResponse = require('../lib/actions/projectOverviewResponse.js');

describe('Project Overview Response', () => {
  it('returns a formatted list of links', () => {
    const arrayOfLinks = [
      { label: 'facebook', link: 'facebook.com' },
      { label: 'google', link: 'google.com' },
    ];
    const expectedResult = '1. facebook facebook.com\n2. google google.com';
    let replyResponse = '';
    function replyMock(message, formattedResponse) {
      replyResponse = formattedResponse;
    }
    const responseInstance = new ProjectOverviewResponse(arrayOfLinks);
    responseInstance.sendToBot({ reply: replyMock });
    expect(replyResponse).to.equal(expectedResult);
  });
});
