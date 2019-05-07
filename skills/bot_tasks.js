/* eslint-disable func-names */
module.exports = function (controller) {
  controller.on('slash_command', (bot, message) => {
    const currentChannel = message.channel_id;
    console.log(message);
    switch (message.command) {
      case '/project':
        controller.storage.users.get(message.user, (err, user) => {
        // user object can contain arbitary keys. we will store tasks in .tasks
          if (!user || !user.tasks || user.tasks.length == 0) {
            bot.reply(message, 'There are no project links on your list. Say `add _project_` to add something.');
          } else {
            const text = `Here are your current links: \n${
              generateTaskList(user)
            }Reply with \`delete _number_\` to delete a task from the list.`;

            bot.reply(message, text);
          }
        });

        break;
      default:
        bot.replyPrivate(message, "Sorry, I'm not sure what that command is");
    }
  });

  // listen for someone saying 'tasks' to the bot
  // reply with a list of current tasks loaded from the storage system
  // based on this user's id

  // listen for a user saying "add <something>", and then add it to the user's list
  // store the new list in the storage system
  controller.hears(['add (.*)'], 'direct_message,direct_mention,mention', (bot, message) => {
    const newtask = message.match[1];
    controller.storage.users.get(message.user, (err, user) => {
      if (!user) {
        user = {};
        user.id = message.user;
        user.tasks = [];
      }

      user.tasks.push(newtask);

      controller.storage.users.save(user, (err, saved) => {
        if (err) {
          bot.reply(message, `I experienced an error adding your task: ${err}`);
        } else {
          bot.api.reactions.add({
            name: 'thumbsup',
            channel: message.channel,
            timestamp: message.ts,
          });
        }
      });
    });
  });

  // listen for a user saying "delete <number>" and delete that item.
  controller.hears(['delete (.*)'], 'direct_message', (bot, message) => {
    let number = message.match[1];

    if (isNaN(number)) {
      bot.reply(message, 'Please specify a number.');
    } else {
      // adjust for 0-based array index
      number = parseInt(number) - 1;

      controller.storage.users.get(message.user, (err, user) => {
        if (!user) {
          user = {};
          user.id = message.user;
          user.tasks = [];
        }

        if (number < 0 || number >= user.tasks.length) {
          bot.reply(message, `Sorry, your input is out of range. Right now there are ${user.tasks.length} items on your list.`);
        } else {
          const item = user.tasks.splice(number, 1);

          // reply with a strikethrough message...
          bot.reply(message, `~${item}~`);

          if (user.tasks.length > 0) {
            bot.reply(message, `Here are our remaining tasks:\n${generateTaskList(user)}`);
          } else {
            bot.reply(message, 'Your list is now empty!');
          }
        }
      });
    }
  });

  // simple function to generate the text of the task list so that
  // it can be used in various places
  function generateTaskList(user) {
    let text = '';

    for (let t = 0; t < user.tasks.length; t++) {
      text = `${text}> \`${t + 1}\`) ${user.tasks[t]}\n`;
    }

    return text;
  }
};
