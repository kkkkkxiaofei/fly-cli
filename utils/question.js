const inquirer = require('inquirer');
const path = require('path');
const { init } = require('../jobs');

const QUESTIONS_OF_INIT_PROJECT = [{
    type: 'rawlist',
    name: 'template',
    message: 'Select a template:',
    choices: [
      //TODO:
      {
        key: 'node',
        name: 'nodejs web server based on express',
        value: 'node-web',
      },
      {
        key: 'react',
        name: 'react start-kit',
        value: 'react',
      },
      {
        key: 'npm',
        name: 'npm repo for publishing',
        value: 'npm',
      },
    ]
  },
  {
    type: 'input',
    name: 'name',
    message: "What's your project name?",
    validate(value) {
      const result = value.replace('\t', '').trim();
      if (!!result) {
        return true;
      }
      return 'Please enter a valid project name';
    },
  },
  {
    type: 'input',
    name: 'description',
    message: "What's your project description?",
    validate(value) {
      const result = value.replace('\t', '').trim();
      if (!!result) {
        return true;
      }
      return 'Please enter a valid project description';
    },
  }
];

const questionMap = {
  init: {
    questions: QUESTIONS_OF_INIT_PROJECT,
    cb: ({ name, description, template }) => {
      const templatePath = path.resolve(__dirname, '..', `templates/${template}`);
      init(name, description, templatePath);
    }
  },
};

const startConversation = type => {
  const {
    questions,
    cb
  } = questionMap[type];
  return inquirer.prompt(questions).then((answers) => {
    cb(answers);
  });
}

module.exports = {
  startConversation
};