const shell = require('shelljs');
const getModulesConfig = require('./getModulesConfig');
var argv = require('yargs/yargs')(process.argv.slice(2)).argv;

const packageVersion = argv.packageVersion;
if (!packageVersion) {
  throw new Error('define --packageVersion');
}

// TODO: handle errors
const runPublishForModule = (moduleConfig) => {
  const { moduleName, packageVersion, outputPath } = moduleConfig;
  shell.exec(`yarn publish ${outputPath} --new-version ${packageVersion} --access public`);
};

const runPublish = (modulesForBuild) => {
  modulesForBuild.forEach((moduleConfig) => {
    runPublishForModule(moduleConfig);
  });
};

runPublish(getModulesConfig(packageVersion));
