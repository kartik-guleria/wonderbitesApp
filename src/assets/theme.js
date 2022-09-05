import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // Colors
  background1: '#E5E5E5',
  background2: '#E91E05',
  lineColor: '#EFEFEF',
  titleBlack: '#000000',
  black: '#2B2C2D',
  white: '#FFFFFF',
  grey: '#DDDDDD',
  darkGrey: '#C4C4C4',
  red: '#E1251B',
  blue: '#007AFF',
  successColor: '#199401',
};

export const SIZES = {
  // Text Sizes
  h: 12,
  h1: 14,
  h2: 16,
  h3: 18,
  h4: 20,
  h5: 22,
  h6: 24,
  h7: 30,
  h8: 32,
  h9: 35,

  // Border Radius
  r: 5,
  r1: 12,
  r2: 16,
  r3: 20,

  // Line Height
  l1: 11.48,
  l2: 13.33,
  l3: 15.31,
  l4: 17.23,
  l5: 19.89,
  l6: 21.48,

  // Font Weight
  w1: '100',
  w2: '200',
  w3: '300',
  w4: '400',
  w5: '500',
  w6: '600',
  w7: '700',
  w8: '800',
  w9: '900',

  // Margins Left and Right
  mlr1: 16,
  mlr2: 18,
  mlr3: 20,

  mlr4: 40,

  // Flex
  f1: 1,

  // Height
  btnHeight: 49,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  light: 'Gotham-Light',
  bold: 'Gotham-Bold',
  normal: 'Gotham',
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
