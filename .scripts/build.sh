echo "Running build script"

# source .scripts/build-core.sh

# run_build "micro-dash" "./src" "src/index" "dist/micro-dash"

# run_build "micro-dash.string" "./src/string" "src/string/index" "dist/micro-dash.string"
# run_build "micro-dash.lowercase" "./src/string/lowerCase" "src/string/lowerCase" "dist/micro-dash.lowercase"


run_tsc_declarationOnly(){
#   moduleName=$1
#   entryPath=$2
#   outputFilePath=$3
#   echo "generating type declarations for ${moduleName}"
  tsc --emitDeclarationOnly
}

run_tsc_declarationOnly
