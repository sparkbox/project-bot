const Botmock = require('botkit-mock');
const {expect} = require("chai");
const commandController = require("../../skills/projectCommand.js");

describe("Bot Response", () => {
  beforeEach(()=>{
    this.controller = Botmock({});

    this.bot = this.controller.spawn({type: 'slack'});
    commandController(this.controller);
  });
  afterEach(() => {
    
    this.controller.shutdown();
  });
  it('should test for response, Link added', () => {
    return this.bot.usersInput([
      {
        type: 'slash_command',
        user: 'someUserId',
        channel: 'someChannel',
        messages: [
          {
            text: 'add jira jira.com',
            isAssertion: true,
            command: '/project'
          }
        ]

      }
    ]).then((message) => {
      console.log(message.text)
        expect(message.text).to.equal("Link added")
    })
  })

  it('should test for failure', () => {
    return this.bot.usersInput([
      {
        type: 'slash_command',
        user: 'someUserId',
        channel: 'someChannel',
        messages: [
          {
            text: 'add jira jira.com',
            isAssertion: true,
            command: '/project'
          }
        ]

      }
    ]).then((message) => {
        expect(message.text).to.equal("Eggs")
    })
  })

  it('should test for message to be undefined', () => {
    return this.bot.usersInput([
      {
        type: 'slash_command',
        user: 'someUserId',
        channel: 'someChannel',
        messages: [
          {
            text: 'add facebook facebook.com',
            isAssertion: true,
            command: '/project'
          }
        ]

      }
    ]).then((message) => {
      message.text = undefined;
        expect(message.text).to.equal(undefined)
    })
  })
})
