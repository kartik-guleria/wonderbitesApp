import {StyleSheet} from 'react-native';
import { COLORS, FONTS, SIZES, ComIcons, DelIcons,NavIcons} from 'assets/index';

const styles = StyleSheet.create({
    textTitle: {
      textAlign: 'center',
      fontWeight: SIZES.w7,
      color: COLORS.black,
      fontFamily: FONTS.normal,
      fontSize: SIZES.h3,
      alignSelf: 'flex-start',
      justifyContent: 'center',
      marginBottom: 10,
      lineHeight: SIZES.l5,
    },
    descText: {
      color: COLORS.black,
      fontWeight: SIZES.w5,
      fontSize: SIZES.h1,
      fontFamily: FONTS.normal,
    },
    buttonStyleRed: {
      backgroundColor: COLORS.red,
      height: SIZES.btnHeight ,
      alignItems: 'center',
      borderRadius: SIZES.r1,
      marginBottom: 25,
      justifyContent: 'center',
      color: COLORS.white,
      fontSize: SIZES.h3,
      padding: 10,
      lineHeight: SIZES.l4,
      fontFamily: FONTS.normal,
      fontWeight: SIZES.w5,
    },
    buttonStyleGray: {
      backgroundColor: COLORS.white,
      height: SIZES.btnHeight ,
      alignItems: 'center',
      borderRadius: SIZES.r1,
      borderColor: COLORS.grey,
      borderWidth: 1,
      color: COLORS.titleBlack,
      marginBottom: -25,
      justifyContent: 'center',
      fontFamily: FONTS.normal,
      fontWeight: SIZES.w5,
    },
    text_color: {
      color: COLORS.white,
      fontFamily: FONTS.normal,
      fontWeight: SIZES.w5,
      fontSize: SIZES.h3,
  },

  crossImage: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    width: '12%',
    height: '12%',
    alignSelf: 'flex-end',
    marginTop: 12,
  },
  plusImage: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    width: '15%',
    height: '15%',
    alignSelf: 'flex-end',
    marginTop: 12,
  }
  });
  export default styles;
