import {StyleSheet} from 'react-native';
import { COLORS, FONTS, SIZES, ComIcons, DelIcons,NavIcons} from '../../../assets/index';

const styles = StyleSheet.create({
    image: {
      marginTop: 110,
      height: 96,
      width: 96,
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    screen: {
      flex : SIZES.f1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.white,
  
      // width: Dimensions.get('window').width,
    },
    sectionTitle: {
      fontSize: SIZES.h3,
      color: COLORS.black,
      fontWeight: SIZES.w7,
      marginTop: 40,
      marginLeft: 20,
      marginRight: 20,
      alignSelf: 'center',
      fontFamily: FONTS.normal,
      letterSpacing: 0.87,
    },
    sectionDescription: {
      fontSize: SIZES.h2,
      color: '#8E8E93',
      marginTop: 16,
      fontFamily: FONTS.light,
      marginLeft: 47,
      marginRight: 47,
      textAlign: 'center',
      letterSpacing: 0.24,
      lineHeight: SIZES.l5,
    },
  
    deliveryView: {
      flexDirection: 'row',
      marginTop: 18,
      marginLeft: 105,
      marginRight: 90,
      alignSelf: 'center',
    },
  
    deliveryTime: {
      fontSize: SIZES.h,
      color: COLORS.black,
      fontWeight: SIZES.w4,
      alignSelf: 'center',
    },
    button1: {
      backgroundColor: 'red',
      height: SIZES.btnHeight ,
      alignItems: 'center',
      borderRadius: SIZES.r1,
      marginTop: 140,
      marginLeft: SIZES.mlr1,
      marginRight: SIZES.mlr1,
      color: COLORS.white,
      justifyContent: 'center',
    },
    buttonText1: {
      fontStyle: 'normal',
      fontWeight: SIZES.w5,
      fontSize: SIZES.h3,
      color: COLORS.white,
    },
    button2: {
      marginTop: 27,
      marginLeft: 133,
      marginRight: 134,
      marginBottom: 53,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText2: {
      color: COLORS.black,
      fontStyle: 'normal',
      fontWeight: SIZES.w5,
      fontSize: SIZES.h3,
    },
    text_color: {
      color: COLORS.black,
      fontFamily: FONTS.normal,
      fontWeight: SIZES.w5,
      fontSize: SIZES.h3,
      lineHeight: SIZES.l4,
      alignSelf: 'center',
    },
  });
    export default styles;