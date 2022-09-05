import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from 'assets/index';
const styles = StyleSheet.create({
  foodPrice: {
    textAlign: 'left',
    marginTop: 8,
    fontSize: SIZES.h,
    color: COLORS.darkGrey,
    // fontFamily: FONTS.normal,
    fontStyle: 'normal',
    fontWeight: SIZES.w5,
  },
  classification: {
    textAlign: 'left',
    marginTop: 8,
    fontSize: SIZES.h,
    color: COLORS.darkGrey,
    fontFamily: FONTS.normal,
    fontWeight: SIZES.w5,
  },
  foodName: {
    textAlign: 'left',
    fontSize: SIZES.h1,
    color: COLORS.black,
    fontFamily: FONTS.normal,
    fontWeight: SIZES.w5,
  },
  totalPrice: {
    textAlign: 'right',
    marginTop: 5,
    marginRight: 5,
    fontSize: SIZES.h1,
    color: COLORS.red,
    fontFamily: FONTS.normal,
    fontWeight: SIZES.w7,
  },
  editTheMeal: {
    flexDirection: 'row',
    textAlign: 'right',
    fontSize: SIZES.h,
    color: COLORS.black,
    fontFamily: FONTS.normal,
    fontWeight: SIZES.w5,
  },
  image: {
    width: 80,
    height: 80,
    backgroundColor: '#F2F3F0',
    borderRadius: SIZES.r1,
  },
  note: {
    textAlign: 'left',
    marginTop: 8,
    marginLeft: 15,
    fontWeight: SIZES.w5,
    fontSize: SIZES.h2,
    color: COLORS.black,
    fontFamily: FONTS.normal,
  },
  totalAmount: {
    flex: SIZES.f1,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: SIZES.h3,
    fontStyle: 'normal',
    color: COLORS.red,
  },
  iconBox: {
    height: 32,
    width: 32,
  },
  swipeView: {justifyContent: 'center', marginRight: 10},
});

export default styles;
