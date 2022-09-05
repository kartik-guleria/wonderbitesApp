import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from 'assets/index';
const styles = StyleSheet.create({
  buttonStyleRed: {
    height: SIZES.btnHeight,
    alignItems: 'center',
    borderRadius: SIZES.r1,
    marginLeft: SIZES.mlr1,
    marginRight: SIZES.mlr1,
    marginBottom: 20,
    justifyContent: 'center',
  },
  image: {
    flex: SIZES.f1,
    justifyContent: 'center',
  },
  text_color: {
    color: COLORS.white,
    fontFamily: FONTS.normal,
    fontWeight: SIZES.w7,
    fontSize: SIZES.h4,
  },
});
export default styles;
