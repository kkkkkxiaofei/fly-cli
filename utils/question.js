const prompt = require('prompt');
  
const schema = {
  properties: {
    name: {
      description: '[project name]:',
      message: 'project name is required',
      required: true,
      before: value => value.replace('\t', '').trim()
    },
    description: {  
      description: '[description]:',
      message: 'description is required',
      required: true,
      before: value => value.replace('\t', '').trim()
    },
  }
};

const startQuestion = (cb) => {
  prompt.start({ message: ' ', delimiter: ' ' });
  prompt.get(schema, function (err, result) {
    cb(result);
  });
};

module.exports = {
  startQuestion
};
