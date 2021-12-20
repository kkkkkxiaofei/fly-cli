#!/usr/bin/env node

const commander = require('commander');
const { exists } = require('./utils/fs');
const { cp, replace } = require('./utils/shell');

const program = new commander.Command();

program
  .arguments('[project]', 'project with tech set: node-web | lambda')
  .arguments('[name]', 'project name')
  .option('-d, --deploy', 'deploy to the certain cloud(aws)')
  .option('-i, --init', 'initialize your project')
  .option('-f, --force', `this option will initilize your project and automatically depoy the scaffold to cloud, hence please make sure you need this indeed
   `);


program.parse(process.argv);

const { init } = program.opts();

const [project, name] = program.args;

if (init) {
  const templatePath = `${__dirname}/templates/${project}`;
  const templateExisted = exists(templatePath);
  if (!templateExisted) {
    throw new Error(`Invalid project type: ${project}, please selecte one of "node-web | lamdba"`)
  }

  const cpResult = cp(`${templatePath}/`, `./${name}`);
  console.log('=====finish cp====', cpResult);

  const replaceResult = replace({ name, desc: `This is the description of ${name}` }, `${process.cwd()}/${name}`);

  console.log('=====finish replace====', replaceResult);
} 