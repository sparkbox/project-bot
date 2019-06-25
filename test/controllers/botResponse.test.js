const botmock = require('botkit-mock');
const { expect } = require('chai');
const commandController = require('../../skills/projectCommand.js');

describe('Bot Response', () => {
  beforeEach(() => {
    this.controller = botmock({});

    this.bot = this.controller.spawn({ type: 'slack' });
    commandController(this.controller);
  });
  afterEach(() => {
    this.controller.shutdown();
  });
  it('should test for response, Link added', () => this.bot.usersInput([
    {
      type: 'slash_command',
      user: 'someUserId',
      channel: 'someChannel',
      messages: [
        {
          text: 'add jira jira.com',
          isAssertion: true,
          command: '/project',
        },
      ],

    },
  ]).then((message) => {
    expect(message.text).to.equal('Link stored.');
  }));
});
