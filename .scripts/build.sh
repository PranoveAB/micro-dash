echo "Running build script"

source .scripts/build-core.sh

run_build "micro-dash" "./src" "src/index" "dist/micro-dash"

run_build "micro-dash.string" "./src/string" "src/string/index" "dist/micro-dash.string"
run_build "micro-dash.lowercase" "./src/string/lowerCase" "src/string/lowerCase" "dist/micro-dash.lowercase"
