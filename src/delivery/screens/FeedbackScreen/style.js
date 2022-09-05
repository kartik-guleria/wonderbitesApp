import {StyleSheet} from 'react-native';
import { COLORS, FONTS, SIZES, ComIcons, DelIcons,NavIcons} from '../../../assets/index';

const styles = StyleSheet.create({
    image: {
      height: 25,
      width: 25,
      margin: 15,
    },
    input: {
      borderColor: '#dddddd',
      borderWidth: 1,
      borderRadius: SIZES.r1,
      color: COLORS.black,
      padding: 10,
      paddingTop: 35,
      marginLeft: -5,
      marginRight: -5,
      height: 300,
    },
  });
    export default styles;