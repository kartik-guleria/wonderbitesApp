import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONTS,
  SIZES,
  ComIcons,
  DelIcons,
  NavIcons,
} from '../../../assets/index';

const styles = StyleSheet.create({
  screen: {
    flex: SIZES.f1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },

  headingDesc: {
    color: COLORS.black,
    fontFamily: FONTS.normal,
    fontWeight: SIZES.w5,
    fontSize: SIZES.h3,
    width: '100%',
    alignSelf: 'flex-start',
    marginLeft: 18,
    marginTop: 15,
  },

  container: {
    marginLeft: SIZES.mlr1,
    marginBottom: -5,
    marginTop: 10,
  },
});
export default styles;
