const commander = require('commander');
const { startConversation } = require('./utils/question');

const program = new commander.Command();

[
  {
    name: 'init',
    desc: 'initialize your project',
  },
].forEach(async ({ name, desc }) => {
  program
    .command(name)
    .description(desc)
    .action(() => {
      startConversation(name);
    });
});

program.parse();
