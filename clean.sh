#!/bin/sh

echo "Removing ios build folder:"

rm -rf ios/build

echo "✅  Finished removing ios build folder."

echo "Removing android build folder:"

rm -rf android/build

echo "✅  Finished removing android build folder."

echo "Clearing watchman watches:"

watchman watch-del-all

echo "✅  Finished clearing watchman watches."

echo "Resetting react bundler cache:"

rm -rf $TMPDIR/react-*

echo "✅  Finished resetting react bundler cache."

echo "Resetting metro bundler cache:"

rm -rf $TMPDIR/metro-*

echo "✅  Finished resetting metro bundler cache."

echo "Removing haste cache:"

rm -rf $TMPDIR/haste-map-react-native-packager-*

echo "✅  Finished removing haste cache."

echo "Cleaning npm cache:"

npm cache clean --force

echo "✅  Finished cleaning npm cache."

echo "Removing node modules:"

rm -rf node_modules

echo "✅  Finished removing node modules."

echo "Cleaning yarn cache:"

yarn cache clean

echo "✅  Finished cleaning yarn cache."

echo "Installing yarn modules:"

yarn

echo "✅  Finished installing yarn modules."

echo "Restarting react-native:"
react-native start --reset-cache
