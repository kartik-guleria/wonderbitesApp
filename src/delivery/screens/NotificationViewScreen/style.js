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
  title: {
    color: COLORS.black,
    fontFamily: FONTS.normal,
    fontSize: SIZES.h,
    fontWeight: SIZES.w7,
    textAlign: 'left',
  },
  image: {
    marginTop: 40,
    height: 154,
    width: 177,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  description: {
    color: COLORS.black,
    fontFamily: FONTS.normal,
    fontSize: SIZES.h,
    width: '100%',
    alignSelf: 'center',
    textAlign: 'left',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
});
