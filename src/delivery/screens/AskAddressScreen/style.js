import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONTS,
  SIZES,
  ComIcons,
  DelIcons,
  NavIcons,
} from 'assets/index';

import {Dimensions} from 'react-native';
const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  cardStyle: {
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
});
export default styles;
