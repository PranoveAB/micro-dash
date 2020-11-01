const shell = require('shelljs');
const pakageVersionUtil = require('./pakageVersionUtil');

const packageVersion = pakageVersionUtil.currentVersion;

const NODE_ENV = 'NODE_ENV=production';

// TODO: handle errors
const runWebpackForModule = (moduleConfig) => {
  const {
    webpack: { entryPath, target },
    outputPath,
  } = moduleConfig;

  shell.exec(`${NODE_ENV} webpack --target ${target.primary || 'web'} --entry ${entryPath} --output-path ${outputPath} --config .webpack/webpack.config.js`);
  if (target.others && Array.isArray(target.others) && target.others.length > 0) {
    target.others.forEach((otherTarget) => {
      shell.exec(`${NODE_ENV} webpack --target ${otherTarget || 'node'} --entry ${entryPath} --output-path ${outputPath}/${otherTarget} --config .webpack/webpack.config.js`);
    });
  }
};

// TODO: handle errors
const generateTypescriptDeclarationsForModule = (moduleConfig) => {
  const {
    typescript: { outputDir },
  } = moduleConfig;
  return shell.exec(`tsc --outDir ${outputDir} --declaration --emitDeclarationOnly --project tsconfig.build.json`);
};

// TODO: handle errors
const copyReadMeForModule = (moduleConfig) => {
  const { outputPath } = moduleConfig;
  shell.exec(`cp README.md ${outputPath}`);
};

// TODO: handle errors
const copyPackageJsonForModule = (moduleConfig) => {
  const { moduleName, packageVersion, outputPath } = moduleConfig;
  shell.exec(`sed -e "s/__PACKAGE_NAME__/${moduleName}/g" -e "s/__PACKAGE_VERSION__/${packageVersion}/g" ./.scripts/templates/package.json.template > ${outputPath}/package.json`);
};

const runBuildForModule = (moduleConfig) => {
  runWebpackForModule(moduleConfig);
  generateTypescriptDeclarationsForModule(moduleConfig);
  copyPackageJsonForModule(moduleConfig);
  copyReadMeForModule(moduleConfig);
};

const runBuild = (modulesForBuild) => {
  modulesForBuild.forEach((moduleConfig) => {
    runBuildForModule(moduleConfig);
  });
};

const getModules = () => {
  return [
    {
      moduleName: 'micro-dash',
      packageVersion,
      outputPath: 'dist/micro-dash',
      webpack: {
        entryPath: './src',
        target: {
          primary: 'node',
        },
      },
      typescript: {
        outputDir: 'dist/micro-dash',
      },
    },
    {
      moduleName: 'micro-dash.lowercase',
      packageVersion,
      outputPath: 'dist/micro-dash.lowercase/lowerCase',
      webpack: {
        entryPath: './src/lowerCase',
        target: {
          primary: 'web',
        },
      },
      typescript: {
        outputDir: 'dist/micro-dash.lowercase',
      },
    },
  ];
};

runBuild(getModules());
