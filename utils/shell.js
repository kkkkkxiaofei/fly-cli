const { execSync } = require('child_process');

const cp = (source, target = '.') => execSync(`cp -rf ${source} ${target}`);

const replace = (replaceMap, inputFile) => {
  const replaceStr = Object.entries(replaceMap).map(([key, value]) => `s/\\$${key}/${value}/g`).join(';  ');
  // $old -> new
  return execSync(`sed -i '' '${replaceStr}' ${inputFile}/*`);
}

module.exports = {
  cp,
  replace
};