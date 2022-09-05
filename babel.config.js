module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          assets: './src/assets',
          common: './src/common',
          constants: './src/constants',
          data: './src/data',
          delivery: './src/delivery',
          models: './src/models',
          navigation: './src/navigation',
          reduxStore: './src/reduxStore',
          utils: './src/utils',
          styleSheet: './src/styleSheet',
          mealPlan: '.src/mealPlan',
        },
      },
    ],
  ],
};
