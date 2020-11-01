const pakageVersionUtil = require('./pakageVersionUtil');

module.exports = (inputPackageVersion) => {
  const packageVersion = inputPackageVersion || pakageVersionUtil.currentVersion;
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
      moduleName: 'micro-dash.tolowercase',
      packageVersion,
      outputPath: 'dist/micro-dash.tolowercase/toLowerCase',
      webpack: {
        entryPath: './src/toLowerCase',
        target: {
          primary: 'web',
        },
      },
      typescript: {
        outputDir: 'dist/micro-dash.tolowercase',
      },
    },
    {
      moduleName: 'micro-dash.touppercase',
      packageVersion,
      outputPath: 'dist/micro-dash.touppercase/toUpperCase',
      webpack: {
        entryPath: './src/toUpperCase',
        target: {
          primary: 'web',
        },
      },
      typescript: {
        outputDir: 'dist/micro-dash.touppercase',
      },
    },
  ];
};
