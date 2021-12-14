#!/usr/bin/env node

const commander = require('commander');
const program = new commander.Command();
const { startConversation } = require('./utils/question');
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
