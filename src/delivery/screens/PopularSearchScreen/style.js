import {StyleSheet} from 'react-native';
import { COLORS, FONTS, SIZES} from '../../../assets/index';

const styles = StyleSheet.create({
    screen: {
      backgroundColor: COLORS.white,
      flex:1
    },
    headingDesc: {
      color: COLORS.black,
      fontFamily: FONTS.normal,
      fontWeight: SIZES.w5,
      fontSize: SIZES.h3,
      width: '100%',
      alignSelf: 'flex-start',
      marginTop: 15,
    },
  
    container: {
      marginBottom: -5,
      marginTop: 10,
    },
  });
    export default styles;