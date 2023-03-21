// @ts-nocheck
const APP_INFO = require('./app.json');
module.exports = function (api) {
  api.cache(false);
  return {
    env: {
      production: {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: [
          'react-native-reanimated/plugin',
          // remove console.log in production so that it doesn't slow down the app and make bottlenecks
          'transform-remove-console',
          'nativewind/babel',
          [
            // modele-resolver use for ability of using absloute paths
            'module-resolver',
            {
              extensions: [
                '.js',
                '.jsx',
                '.ts',
                '.tsx',
                '.android.js',
                '.android.tsx',
                '.ios.js',
                '.ios.tsx',
              ],
              root: ['./app'],
            },
          ],
        ],
      },
      development: {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: [
          'react-native-reanimated/plugin',
          'nativewind/babel',
          [
            'module-resolver',
            {
              extensions: [
                '.js',
                '.jsx',
                '.ts',
                '.tsx',
                '.android.js',
                '.android.tsx',
                '.ios.js',
                '.ios.tsx',
              ],
              root: ['./app'],
            },
          ],
        ],
      },
    },
  };
};
