const commander = require('commander');
const program = new commander.Command();

program
  .arguments('[type]', 'type of tech set: node | lambda')
  .arguments('[project]', 'project name')
  .option('-d, --deploy', 'deploy to the certain cloud(aws)')
  .option('-i, --init', 'initialize your project')
  .option('-f, --force', `this option will initilize your project and automatically depoy the scaffold to cloud, hence please make sure you need this indeed
   `);


program.parse(process.argv);

const options = program.opts();

console.log(program.args, options);
