import {StyleSheet} from 'react-native';
import { COLORS, FONTS, SIZES, ComIcons, DelIcons,NavIcons} from 'assets/index';

const styles = StyleSheet.create({

    title: {
      fontWeight: SIZES.w5,
      fontSize: SIZES.h3,
      fontFamily: Platform.OS === 'ios' ? 'Gotham' : 'GothamMedium',
      color: "#2B2C2D",
      marginTop: Platform.OS === 'ios' ? -20 : 20
    },
    searchBar: {
      marginTop: 9,
      borderRadius: SIZES.r1,
      borderColor: COLORS.grey
    },
    line1: {
      marginTop: 16,
      height: 1,
      backgroundColor: '#F4F2F2'
    },
    sectionHeader1: {
      marginTop: 24,
      fontSize: SIZES.h3,
      fontFamily: Platform.OS === 'ios' ? 'Gotham' : 'GothamMedium',
      fontWeight: SIZES.w5,
      color: COLORS.black
    },
    blankItems1: {
      fontFamily: FONTS.normal,
      fontWeight: SIZES.w4,
      fontSize: SIZES.h3,
      marginTop: -30
    },
    cuisinesData: {
      fontFamily: FONTS.normal,
      fontWeight: SIZES.w4,
      fontSize: SIZES.h3,
      marginBottom: 15
    },
    sectionHeader2: {
      marginTop: 24,
      fontSize: SIZES.h3,
      fontFamily: Platform.OS === 'ios' ? 'Gotham' : 'GothamMedium',
      fontWeight: SIZES.w5,
      color: COLORS.black
    },
    blankItems2: {
      fontFamily: FONTS.normal,
      fontWeight: SIZES.w4,
      fontSize: SIZES.h3,
      marginTop: -30
    },
    everythingData: {
      fontFamily: FONTS.normal,
      fontWeight: SIZES.w4,
      fontSize: SIZES.h3,
      marginBottom: 15
    },
    line2: {
      marginTop: 16,
      height: 1,
      backgroundColor: '#F4F2F2'
    },
    clearButton: {
      fontSize: Platform.OS === 'ios' ? 18 : 17,
      fontFamily: FONTS.normal,
      fontWeight: SIZES.w4,
      color: COLORS.black
    },
    applyButton: {
      marginLeft: 77,
      width: 148,
      height: Platform.OS === 'ios' ? 45 : 40,
      borderRadius: SIZES.r1,
      backgroundColor: COLORS.red
    },
    applyText: {
      alignSelf: 'center',
      marginTop: Platform.OS === 'ios' ? 11 : 9,
      fontSize: Platform.OS === 'ios' ? 18 : 17,
      fontFamily: Platform.OS === 'ios' ? 'Gotham' : 'GothamBold',
      fontWeight: SIZES.w6,
      color: COLORS.white
    },
    applyView: {
      marginTop: 31,
    },
    clearView: {
      marginTop: Platform.OS === 'ios' ? 43 : 40,
    },
    bottomSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: -5
    },
    section2: {
      marginTop: 24,
      flexDirection: 'row'
    },
    section1: {
      marginTop: 22,
      flexDirection: 'row'
    },
    middleSection: {
      marginTop: -10,
    },
    checkBoxView: {
      flexDirection: 'column',
      marginTop: -1,
      height: 128,
      justifyContent: 'space-evenly'
    },
    bottomSheet: {
      marginRight: 0,
      marginLeft: 0,
      marginTop: Platform.OS === 'ios' ? -10 : -20
    },
    bottomSheetView: {
      marginLeft: SIZES.mlr1,
      marginRight: SIZES.mlr1,
      marginTop: Platform.OS === 'ios' ? 250 : 0
    },
  
  })