const { expect } = require('chai');
const { AssertionError } = require('assert');
const AddLinkToProjectAction = require('../lib/actions/addLinkToProjectAction');
const AddLinkToProjectResponse = require('../lib/actions/AddLinkToProjectResponse');

describe('Add Link to Project Action', () => {
  it('returns a string as an object', () => {
    const addLinkToProjectAction = new AddLinkToProjectAction();
    const expectedResult = { label: 'google', link: 'google.com' };
    expect(addLinkToProjectAction.parseParams('google google.com')).to.deep.equal(expectedResult);
  });

  it('returns an error message on invalid input', () => {
    const addLinkToProjectAction = new AddLinkToProjectAction();
    const parseParamsThatThrows = () => addLinkToProjectAction.parseParams('google');
    expect(parseParamsThatThrows).to.throw(TypeError, /invalid/);
  });

  it('returns an error message if parameters are undefined', () => {
    const addLinkToProjectAction = new AddLinkToProjectAction();
    const parseParamsThatThrows = () => addLinkToProjectAction.parseParams();
    expect(parseParamsThatThrows).to.throw(TypeError, /invalid/);
  });

  it('returns an error message if parameters not a string', () => {
    const addLinkToProjectAction = new AddLinkToProjectAction();
    const parseParamsThatThrows = () => addLinkToProjectAction.parseParams(['google', 'google.com']);
    expect(parseParamsThatThrows).to.throw(AssertionError);
  });

  xit('@asyncResolves : adds link to DB', async () => {});

  it('@asyncResolves : returns an add object containing a response', async () => {
    const addLinkToProjectAction = new AddLinkToProjectAction();
    const response = await addLinkToProjectAction.execute('google google.com');
    const expectedResult = new AddLinkToProjectResponse('google', 'google.com');
    expect(response).to.deep.equal(expectedResult);
  });
});
