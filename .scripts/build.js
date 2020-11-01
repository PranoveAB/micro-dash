const shell = require('shelljs');
var argv = require('yargs/yargs')(process.argv.slice(2)).argv;

const packageVersion = argv.packageVersion;
if (!packageVersion) {
  throw new Error('define --packageVersion');
}

const NODE_ENV = 'NODE_ENV=production';
const generateTypescriptDeclarations = () => {
  return shell.exec('tsc --declaration --emitDeclarationOnly --project tsconfig.build.json');
};

// TODO: handle errors
const runWebpackForModule = (moduleConfig) => {
  const {
    webpack: { entryPath, outputPath, target },
  } = moduleConfig;

  shell.exec(`${NODE_ENV} webpack --target ${target.primary || 'web'} --entry ${entryPath} --output-path ${outputPath} --config .webpack/webpack.config.js`);
  if (target.others && Array.isArray(target.others) && target.others.length > 0) {
    target.others.forEach((otherTarget) => {
      shell.exec(`${NODE_ENV} webpack --target ${otherTarget || 'node'} --entry ${entryPath} --output-path ${outputPath}/${otherTarget} --config .webpack/webpack.config.js`);
    });
  }
};

// TODO: handle errors
const copyReadMeForModule = (moduleConfig) => {
  const { outputPath } = moduleConfig;
  shell.exec(`cp README.md ${outputPath}`);
};

// TODO: handle errors
const copyNpmIgnoreForModule = (moduleConfig) => {
  const { outputPath } = moduleConfig;
  shell.exec(`cp ./.scripts/templates/.npmignore.template ${outputPath}/.npmignore`);
};

// TODO: handle errors
const copyPackageJsonForModule = (moduleConfig) => {
  const { moduleName, packageVersion, outputPath } = moduleConfig;
  shell.exec(`sed -e "s/__PACKAGE_NAME__/${moduleName}/g" -e "s/__PACKAGE_VERSION__/${packageVersion}/g" ./.scripts/templates/package.json.template > ${outputPath}/package.json`);
};

const runBuildForModule = (moduleConfig) => {
  runWebpackForModule(moduleConfig);
  copyPackageJsonForModule(moduleConfig);
  copyNpmIgnoreForModule(moduleConfig);
  copyReadMeForModule(moduleConfig);
};

const runBuild = (modulesForBuild) => {
  modulesForBuild.forEach((moduleConfig) => {
    runBuildForModule(moduleConfig);
  });
};

const getModules = () => {
  const packageVersion = argv.packageVersion;
  return [
    {
      moduleName: 'micro-dash',
      packageVersion,
      outputPath: 'dist/micro-dash',
      webpack: {
        entryPath: './src',
        outputPath: 'dist/micro-dash',
        target: {
          primary: 'node',
        },
      },
    },
    {
      moduleName: 'micro-dash.lowercase',
      packageVersion,
      outputPath: 'dist/micro-dash/lowerCase',
      webpack: {
        entryPath: './src/lowerCase',
        outputPath: 'dist/micro-dash/lowerCase',
        target: {
          primary: 'web',
        },
      },
    },
  ];
};

runBuild(getModules());
generateTypescriptDeclarations();
