const { expect } = require('chai');
const { AssertionError } = require('assert');
const Actions = require('../lib/actions/actions');
const AddLinkToProjectAction = require('../lib/actions/addLinkToProjectAction');

describe('Actions Builder', () => {
  it('returns an error message if parameters not a string', () => {
    const messageText = ['add google google.com'];
    const expectedInput = () => Actions.fromMessageText(messageText);
    expect(expectedInput).to.throw(AssertionError);
  });

  it('returns an error message if input is undefined', () => {
    const expectedInput = () => Actions.fromMessageText('');
    expect(expectedInput).to.throw(TypeError, /No Term Found/);
  });

  it('returns an new instance of action term', async () => {
    const messageText = 'add google google.com';
    const actionInstance = Actions.fromMessageText(messageText);
    const expectedResult = new AddLinkToProjectAction();
    expect(actionInstance).to.deep.equal(expectedResult);
  });
});
