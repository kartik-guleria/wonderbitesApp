import {StyleSheet} from 'react-native';
import { COLORS, FONTS, SIZES, ComIcons, DelIcons,NavIcons} from '../../../assets/index';

const styles = StyleSheet.create({
    image: {
      marginLeft: -20,
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    sectionTitle: {
      fontSize: SIZES.h3,
      color: COLORS.black,
      fontWeight: SIZES.w7,
      marginTop: 49,
      marginLeft: 90,
      marginRight: 90,
      alignSelf: 'center',
      // width: 223,
    },
    sectionDescription: {
      fontSize: SIZES.h3,
      color: COLORS.black,
      height: 200,
      fontWeight: SIZES.w5,
      marginTop: 25,
      marginLeft: 35,
      marginRight: 35,
      fontFamily: FONTS.normal,
      alignSelf: 'center',
    },
    screen: {
      // flex : SIZES.f1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.white,
      width: '100%',
      height: '100%',
      marginTop: -10
    },
    deliveryView: {
      flexDirection: 'row',
      marginTop: 22,
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
  });
  export default styles;