echo "Running build script"

run_publish() {
    moduleName=$1
    moduleVersion=$2

    yarn publish ${moduleName} --new-version ${moduleVersion} --access public
}

moduleVersion=$1

run_publish "dist/micro-dash" ${moduleVersion}
run_publish "dist/micro-dash.string" ${moduleVersion}
run_publish "dist/micro-dash.lowercase" ${moduleVersion}
