import {StyleSheet} from 'react-native';
import { COLORS, FONTS, SIZES, ComIcons, DelIcons,NavIcons} from 'assets/index';
import { exp } from 'react-native-reanimated';

const styles = StyleSheet.create({
    image: {
      marginTop: 50,
      height: 300,
      width: 300,
      alignSelf: 'center',
    },
    sectionDescription: {
      fontSize: SIZES.h5,
      color: COLORS.black,
      fontWeight: SIZES.w2,
      fontFamily:FONTS.normal,
      // marginTop: -4,
      marginLeft: 35,
      marginRight: 35,
  
      alignSelf: 'center',
    },
    screen: {
      flex : SIZES.f1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.white,
      width: '100%',
    },
  });

  export default styles;