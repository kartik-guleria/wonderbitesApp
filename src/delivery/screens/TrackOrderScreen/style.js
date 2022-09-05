import {StyleSheet} from 'react-native';
import { COLORS, FONTS, SIZES, ComIcons, DelIcons,NavIcons} from '../../../assets/index';

const styles = StyleSheet.create({
    image: {
      height: '100%',
      width: '100%',
    marginTop: -10,
      alignSelf: 'flex-start',
      resizeMode: 'cover',
    },
    classification: {
      textAlign: 'left',
      marginTop: 5,
      fontSize: SIZES.h,
      color: COLORS.black,
      fontFamily: FONTS.light,
      fontStyle: 'normal',
    },
    foodName: {
      textAlign: 'left',
      fontSize: SIZES.h1,
      color: COLORS.black,
      // marginTop: 15,
      alignSelf: 'flex-start',
      // fontFamily: FONTS.normal,
      fontStyle: 'normal',
      fontWeight: SIZES.w7,
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
    imageIcon: {
      width: 45,
      height: 30,
      resizeMode: 'contain',
    },
    sectionDescription: {
      fontSize: SIZES.h3,
      color: COLORS.black,
      fontWeight: SIZES.w2,
      marginTop: 16,
      marginLeft: 35,
      marginRight: 35,
      // alignItems: 'center',
      // justifyContent: 'center',
      alignSelf: 'center',
      // width: 320,
    },
    screen: {
      flex : SIZES.f1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.white,
      width: '100%',
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