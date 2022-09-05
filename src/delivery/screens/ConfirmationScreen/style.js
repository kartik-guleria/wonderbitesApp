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
  text: {
    // marginTop: 19,
    fontSize: SIZES.h3,
    fontWeight: SIZES.w5,
    color: COLORS.titleBlack,
  },
  buttonStyleRed: {
    backgroundColor: COLORS.red,
    height: 45,
    alignItems: 'center',
    borderRadius: SIZES.r1,
    // marginLeft: 15,
    marginRight: 15,
    marginBottom: 25,
    justifyContent: 'center',
    color: COLORS.white,
    fontSize: SIZES.h3,
    padding: 10,
    fontFamily: FONTS.normal,
  },
  text_color: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: SIZES.h3,
    fontFamily: FONTS.normal,
  },
  buttonStyleGray: {
    backgroundColor: COLORS.white,
    height: 45,
    alignItems: 'center',
    borderRadius: SIZES.r1,
    borderColor: COLORS.grey,
    borderWidth: 1,
    marginLeft: 15,
    // marginRight: 15,
    marginBottom: -25,
    justifyContent: 'center',
    color: COLORS.titleBlack,
    fontSize: SIZES.h2,
    fontFamily: FONTS.bold,
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconBox: {
    height: 32,
    width: 32,
  },

  bottomContainer: {
    marginLeft: SIZES.mlr1,
    marginRight: SIZES.mlr1,
    marginTop: 20,
  },

  breadSwitch: {
    marginRight: 5,
    margin:16
  },
  viewContainer: {
    marginLeft: SIZES.mlr1,
    marginRight: 13,
  },
});
export default styles;
