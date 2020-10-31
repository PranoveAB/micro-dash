
run_webpack_build(){
  moduleName=$1
  entryPath=$2
  outputPath=$3
  echo "running webpack for ${moduleName}"
  NODE_ENV=production webpack --entry ${entryPath} --output-path ${outputPath} --config .webpack/webpack.config.js
}

run_tsc_declarationOnly(){
  moduleName=$1
  entryPath=$2
  outputFilePath=$3
  echo "generating type declarations for ${moduleName}"
  tsc --baseUrl "./" --outFile ${outputFilePath} --declaration --emitDeclarationOnly --listEmittedFiles ${entryPath}
}

run_copyPackageJson() {
  moduleName=$1
  outputPath=$2
  echo "copying package.json for ${moduleName}"
  cat ./package.json | grep -v '\"private\":' > ${outputPath}/package.json
}

run_updatePackageName() {
  moduleName=$1
  outputPath=$2
  echo "updating package.json for ${moduleName}"
  sed -i '' "s/@micro-ux\/micro-dash/@micro-ux\/${moduleName}/g" ${outputPath}/package.json
}

run_build() {
  moduleName=$1
  entryPath=$2
  tsEntryPath=$3
  outputPath=$4

  run_webpack_build ${moduleName} ${entryPath} ${outputPath}
  run_tsc_declarationOnly ${moduleName} ${tsEntryPath} "${outputPath}/index.d.ts"
  run_copyPackageJson ${moduleName} ${outputPath}
  run_updatePackageName ${moduleName} ${outputPath}
}
