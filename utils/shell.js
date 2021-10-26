const { sed, find, mv, mkdir, cp } = require('shelljs');
const fs = require('fs');

const isFile = (path) => {
  try {
    const stat = fs.statSync(path);
    return stat.isFile();
  } catch {
    return false;
  }
};

const isKeyPath = (path) => {
  const pieces = path.split('/');
  return /__name__/g.test(pieces.slice(-1)[0]);
};

const renameDir = (src, des) => {
  if (!fs.existsSync(des)) {
    mkdir(des);
  }
  try {
    fs.renameSync(src, des);
  } catch (e) {}
};

const copy = (source, target = '.') => cp('-R', source, target);

const createDir = (dir) => mkdir('-p', dir);

const replace = (replaceMap, inputDir) => {
  const keyFolders = [];
  const { name, desc } = replaceMap;
  find(inputDir).forEach((path) => {
    const isKeyDirOrFile = isKeyPath(path.replace(inputDir, ''));
    if (isFile(path) && !path.includes('node_modules')) {
      sed('-i', /__name__/g, name, path);
      sed('-i', /__desc__/g, desc, path);
      isKeyDirOrFile && mv(path, path.replace(/__name__/g, name));
    } else {
      // folder with __name__
      isKeyDirOrFile && keyFolders.push(path);
    }
  });
  keyFolders.forEach((folderPath) => {
    const des = folderPath.replace(/__name__/g, name);
    renameDir(folderPath, des);
  });
};

module.exports = {
  copy,
  replace,
  createDir,
};
