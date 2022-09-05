import {StyleSheet} from 'react-native';
import { COLORS, FONTS, SIZES, ComIcons, DelIcons,NavIcons} from '../../../assets/index';

const styles = StyleSheet.create({
    image: {
      marginTop: 60,
      height: 300,
      width: 300,
      alignSelf: 'center',
      justifyContent: 'center',
    },
    screen: {
      flex : SIZES.f1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: COLORS.white,
      // width: Dimensions.get('window').width,
    },
    sectionDescription: {
      fontSize: SIZES.h3,
      color: COLORS.black,
      fontWeight: SIZES.w5,
      fontFamily:FONTS.normal,
      marginTop: 20,
      alignSelf: 'center',
      lineHeight:17.23
      // width: 223,
    },
  });
  export default styles;