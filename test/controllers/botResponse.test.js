const botmock = require('botkit-mock');
const { expect } = require('chai');
const commandController = require('../../skills/projectCommand.js');
const SQLDriver = require('../../lib/dbDriver/mysql');

describe('Bot Response', () => {
  beforeEach(() => {
    global.projectBot = {};
    // eslint-disable-next-line no-undef
    projectBot.dbDriver = new SQLDriver();
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
