const { execSync } = require('child_process');

const cp = (source, target = '.') => execSync(`cp -rf ${source} ${target}`);

module.exports = {
  cp
};