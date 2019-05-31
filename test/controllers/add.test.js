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
  it('should return valid confirmation message on user input', () => {
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
    ]).then((message) => {
        expect(message.text).to.equal('Link stored.')
    })
  })
})
