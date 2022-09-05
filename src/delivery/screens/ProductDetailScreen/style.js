import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONTS,
  SIZES,
  ComIcons,
  DelIcons,
  NavIcons,
} from '../../../assets/index';

const styles = StyleSheet.create({
  screen: {
    flex: SIZES.f1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  menuItem: {},

  productItem: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.r1,
    borderColor: COLORS.red,
    shadowColor: COLORS.titleBlack,
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  descText: {
    color: COLORS.titleBlack,
    fontSize: SIZES.h2,
  },
  buttonStyleRed: {
    backgroundColor: COLORS.red,
    height: SIZES.btnHeight,
    alignItems: 'center',
    borderRadius: SIZES.r1,
    marginBottom: 25,
    justifyContent: 'center',
    color: COLORS.white,
    fontSize: SIZES.h3,
    padding: 10,
    fontFamily: FONTS.bold,
  },
  buttonStyleGray: {
    backgroundColor: COLORS.white,
    height: SIZES.btnHeight,
    alignItems: 'center',
    borderRadius: SIZES.r1,
    borderColor: COLORS.grey,
    borderWidth: 1,
    marginBottom: -25,
    justifyContent: 'center',
    color: COLORS.titleBlack,
    fontSize: SIZES.h2,
    fontFamily: FONTS.bold,
  },
  text_color: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: SIZES.h3,
  },
});
export default styles;
