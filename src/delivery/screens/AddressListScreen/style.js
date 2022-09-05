import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from 'assets/index';

const styles = StyleSheet.create({
  classification: {
    textAlign: 'left',
    marginTop: 5,
    fontSize: SIZES.h,
    color: COLORS.darkGrey,
    fontFamily: FONTS.normal,
    fontStyle: 'normal',
    fontWeight: SIZES.w5,
  },
  buttonStyleRed: {
    backgroundColor: COLORS.red,
    height: 30,
    width: 75,
    alignItems: 'center',
    borderRadius: SIZES.r,
    color: COLORS.white,
    alignSelf: 'center',
    fontSize: SIZES.h,
    justifyContent: 'center',
    fontFamily: FONTS.normal,
    fontWeight: 'bold',
  },
  text_color: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: SIZES.h,
    fontFamily: FONTS.normal,
  },
  image: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;
