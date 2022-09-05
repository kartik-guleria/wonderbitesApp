import {StyleSheet} from 'react-native';
import { COLORS, FONTS, SIZES, ComIcons, DelIcons,NavIcons} from 'assets/index';

const styles = StyleSheet.create({
    screen: {
      flex : SIZES.f1,
      backgroundColor: COLORS.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
    classification: {
      textAlign: 'left',
      marginTop: 15,
      fontSize: SIZES.h3,
      color: COLORS.black,
      fontFamily: FONTS.light,
      fontStyle: 'normal',
    },
    textInput: {
      textAlign: 'left',
      fontSize: SIZES.h,
      color: COLORS.black,
      marginTop: 15,
      alignSelf: 'flex-start',
      fontFamily: FONTS.normal,
      fontStyle: 'normal',
      fontWeight: SIZES.w4,
    },
  });
  