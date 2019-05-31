const Botmock = require('botkit-mock');
const {expect} = require("chai");
const commandController = require("../../skills/project-command.js");

describe("Add actions", () => {
  beforeEach(()=>{
    this.controller = Botmock({});
    // type can be ‘slack’, facebook’, or null
    this.bot = this.controller.spawn({type: 'slack'});
    commandController(this.controller);
  });
  afterEach(() => {
    //clean up botkit tick interval
    this.controller.shutdown();
  });
  it('should return valid confirmation message on success of user input', () => {
    return this.bot.usersInput([
      {
        type: 'slash_command',
        user: 'someUserId',
        channel: 'someChannel',
        messages: [
          {
            text: 'add google google.com',
            isAssertion: true,
            command: '/project'
          }
        ]

      }
    ]).then((response) => {
        expect(response.text).to.equal('Link stored.')
    })
  })
  it('should fail on invalid user input', () => {
    return this.bot.usersInput([
      {
        type: 'slash_command',
        user: 'someUserId',
        channel: 'someChannel',
        messages: [
          {
            text: 'some invalid input',
            isAssertion: true,
            command: '/project'
          }
        ]

      }
    ]).then((response) => {
        expect(response.text).to.equal(undefined)
    })
  })
})
