const { copy, replace, createDir } = require('../utils/shell');
const { logger } = require('../utils/log');

const generateLocalProject = async (projectName, projectDesc, templatePath) => {
  const projectPath = `${process.cwd()}/${projectName}`;
  createDir(projectPath);
  copy([`${templatePath}/*`, `${templatePath}/.*`], projectPath);
  replace(
    {
      name: projectName,
      desc: projectDesc,
    },
    projectPath
  );
};

const init = async (name, description, templatePath) => {
  logger.info('starting to initialize local project ...');
  await generateLocalProject(name, description, templatePath);
  logger.success(`Your project ${name} has been initialized locally.`);
};

module.exports = {
  init,
};
