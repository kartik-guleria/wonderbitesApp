import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from 'assets';

const styles = StyleSheet.create({
  arrowImage: {
    marginTop: 4,
  },
  optionsView: {
    flex: SIZES.f1,
    flexDirection: 'row',
    marginLeft: 19,
    justifyContent: 'space-between',
    marginTop: 5,
  },
  profileDetailView: {
    flexDirection: 'row',
    marginLeft: SIZES.mlr1,
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    height: 70,
    width: 70,
    borderRadius:35,
  },
  name: {
    fontSize: SIZES.h3,
    fontFamily: FONTS.normal,
    // fontWeight: SIZES.h7,
  },
  email: {
    marginTop: 3,
    fontSize: SIZES.h2,
    fontWeight: SIZES.w4,
    color: COLORS.black,
    fontFamily: FONTS.normal,
  },
  buttonFeedAndRate: {
    color: COLORS.black,
    fontSize: SIZES.h,
    fontWeight: SIZES.w5,
    fontFamily: FONTS.normal,
  },
  logoutButton: {
    fontSize: SIZES.h2,
    fontWeight: SIZES.w5,
    marginTop: 20,
    fontFamily: FONTS.normal,
    color: COLORS.red,
  },
});
export default styles;
