import {StyleSheet} from 'react-native';
import { COLORS, FONTS, SIZES, ComIcons, DelIcons,NavIcons} from '../../../assets/index';

const styles = StyleSheet.create({
    flatlistBox: {
      flexDirection: 'column',
      borderColor: '#F2F3F0',
      borderRadius: SIZES.r,
      borderWidth: 1,
      marginBottom: 16,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowColor: '#171717',
      shadowOpacity: 0.2,
    },
  
    orderTitle: {
      lineHeight: SIZES.l3,
      fontSize: SIZES.h2,
      fontWeight: SIZES.w5,
      fontFamily: FONTS.normal,
    },
    price: {
      fontSize: SIZES.h,
      fontWeight: SIZES.w7,
      fontFamily: FONTS.normal,
      lineHeight: SIZES.l2,
      marginTop: 8,
      // marginBottom: 4,
      color: COLORS.red,
    },
    priceView: {
      flexDirection: 'row',
      marginTop: 10,
    },
    image: {
      width: 60,
      height: 60,
    },
  
    shortLine: {
      backgroundColor: COLORS.darkGrey,
      height: 1,
      marginLeft: SIZES.mlr1,
      marginRight: SIZES.mlr1,
    },
    fullLine: {
      backgroundColor: COLORS.darkGrey,
      height: 1,
      marginTop: 23,
    },
    subtotalView: {
      flexDirection: 'row',
      marginTop: 20,
      justifyContent: 'space-between',
    },
    subNdelivText: {
      fontFamily: FONTS.normal,
      fontWeight: SIZES.w5,
      lineHeight: SIZES.l3,
      width: '45%',
      fontSize: SIZES.h2,
    },
    totalText: {
      fontFamily: FONTS.normal,
      fontWeight: SIZES.w7,
      lineHeight: SIZES.l5,
      fontSize: SIZES.h3,
    },
    shortLine2: {
      backgroundColor: COLORS.darkGrey,
      height: 1,
      marginTop: 16,
    },
    bottomSectionView: {
      marginTop: 23,
      marginLeft: 6,
      marginRight: 6,
    },
    sendText: {
      fontSize: SIZES.h3,
      lineHeight: SIZES.l4,
      fontWeight: SIZES.w5,
      fontFamily: FONTS.normal,
    },
    questionText: {
      fontSize: SIZES.h,
      lineHeight: SIZES.l2,
      fontWeight: SIZES.w3,
      fontFamily: FONTS.normal,
      marginTop: 19,
    },
    howText: {
      fontSize: SIZES.h2,
      lineHeight: SIZES.l3,
      fontWeight: SIZES.w5,
      fontFamily: FONTS.normal,
      marginTop: 16,
    },
    boxView: {
      marginTop: 10,
      borderRadius: SIZES.r1,
      borderColor: COLORS.darkGrey,
      borderWidth: 1,
      height: 202,
    },
    feedbackText: {
      marginLeft: 11,
      marginRight: 26,
      fontSize: SIZES.h1,
      lineHeight: SIZES.l3,
      fontWeight: SIZES.w3,
      fontFamily: FONTS.normal,
      marginTop: 16,
    },
    buttonView: {
      flexDirection: 'row',
      backgroundColor: COLORS.red,
      height: SIZES.btnHeight ,
      borderRadius: SIZES.r1,
      marginTop: 60,
      // marginBottom: 60,
      textAlign: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: SIZES.h3,
      lineHeight: SIZES.l4,
      fontWeight: SIZES.w5,
      fontFamily: FONTS.normal,
      color: COLORS.white,
      alignSelf: 'center',
      textAlign: 'center',
    },
    myStarStyle: {
      color: '#FFDD6E',
      backgroundColor: 'transparent',
      height: 24,
      width: 24,
    },
    myEmptyStarStyle: {
      color: COLORS.darkGrey,
    },
  });
    export default styles;