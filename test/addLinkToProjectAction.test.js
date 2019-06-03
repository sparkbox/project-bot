const { expect } = require('chai');
const AddLinkToProjectAction = require('../lib/actions/addLinkToProjectAction');
const AddLinkToProjectResponse = require('../lib/actions/addLinkToProjectResponse');
const Project = require('../lib/project')
const ProjectLinks = require('../lib/projectLinks')
const AssertionError = require('assert').AssertionError;

describe('Add Link to Project Action', ()=> {

    it('returns a string as an object', () => {
        const addLinkToProjectAction = new AddLinkToProjectAction();
        const expectedResult = { label: 'google', link: 'google.com' }; 
        expect(addLinkToProjectAction.parseParams('add google google.com')).to.deep.equal(expectedResult);
    })

    it('returns an error message on invalid input', () => {
        const addLinkToProjectAction = new AddLinkToProjectAction();
        const parseParamsThatThrows = () => addLinkToProjectAction.parseParams('google')
        expect(parseParamsThatThrows).to.throw(TypeError, /invalid/);
    })

    it('returns an error message if parameters are undefined', () => {
        const addLinkToProjectAction = new AddLinkToProjectAction(); 
        const parseParamsThatThrows = () => addLinkToProjectAction.parseParams()
        expect(parseParamsThatThrows).to.throw(TypeError, /invalid/);
    })

    it('returns an error message if parameters not a string', () => {
        const addLinkToProjectAction = new AddLinkToProjectAction();
        const parseParamsThatThrows = () => addLinkToProjectAction.parseParams(['google', 'google.com'])
        expect(parseParamsThatThrows).to.throw(AssertionError);
    })

    xit('@asyncResolves : adds link to DB', async () => {});

    it('@asyncResolves : returns an add object containing a response', async () => {
        const action = new AddLinkToProjectAction();
        const response = await action.execute('add google google.com')
        const expectedResult = new AddLinkToProjectResponse('google', 'google.com')
        expect(response).to.deep.equal(expectedResult);
    });
});