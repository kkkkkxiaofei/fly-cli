#!/usr/bin/env node

const commander = require('commander');
const { exists } = require('./utils/fs');
const { cp, replace } = require('./utils/shell');
const { startQuestion } = require('./utils/question');

const program = new commander.Command();

program
  .arguments('[service]', 'select one service from: node-web | lambda')
  .option('-i, --init', 'initialize your project')
  .option('-d, --deploy', 'deploy to the certain cloud')
  .option('-f, --force', `this option will initilize your project and automatically depoy the scaffold to cloud, hence please make sure you need this indeed
   `);


program.parse(process.argv);

const { init } = program.opts();

const [service] = program.args;

if (init) {
  const templatePath = `${__dirname}/templates/${service}`;
  const templateExisted = exists(templatePath);
  if (!templateExisted) {
    throw new Error(`Invalid service type: ${service}, select one service from: node-web | lambda`)
  }
  startQuestion(({ name, description }) => {
    const cpResult = cp(`${templatePath}/`, `./${name}`);
    console.log('=====finish cp====', cpResult);

    const replaceResult = replace({ name, desc: description }, `${process.cwd()}/${name}`);

    console.log('=====finish replace====', replaceResult);
  });
  
} 