import {StyleSheet} from 'react-native';
import {exp} from 'react-native-reanimated';
import {
  COLORS,
  FONTS,
  SIZES,
  ComIcons,
  DelIcons,
  NavIcons,
} from '../../../assets/index';

const styles = StyleSheet.create({
  totalPriceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deliveryChargeView: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  itemTotalView: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  personDetailsView: {
    // flexDirection: 'row',
    marginTop: 15,
  },

  viewContainer: {
    // marginTop: 10,
    marginLeft: SIZES.mlr1,
    marginRight: SIZES.mlr1,
  },
  nameView: {
    flexDirection: 'column',
    // marginLeft: SIZES.mlr1,
  },
  image: {
    width: 44,
    height: 44,
    borderRadius:22,
  },
  address: {
    fontSize: SIZES.h1,
    fontFamily: FONTS.normal,
    color: COLORS.black,
  },
  icon_Payment1: {
    height: 13.5,
    width: 18,
  },
  icon_Payment2: {
    height: 3.29,
    width: 3.856,
    marginLeft: -8,
    marginTop: 7,
  },
  payment: {
    textAlign: 'right',
    marginLeft: 41,
    fontSize: SIZES.h1,
    fontWeight: SIZES.w7,
    color: COLORS.black,
  },
  icon_time1: {
    height: 17,
    width: 20,
    resizeMode: 'contain',
  },
  itemTotal: {
    textAlign: 'left',
    fontSize: SIZES.h2,
    fontWeight: SIZES.w5,
    color: COLORS.black,
    fontFamily: FONTS.normal,
  },

  totalPrice: {
    fontSize: SIZES.h5,
    fontWeight: SIZES.w7,
    color: COLORS.red,
  },
  totalItems: {
    marginTop: 5,
    fontSize: SIZES.h1,
    fontWeight: SIZES.w4,
    color: COLORS.black,
    fontFamily: FONTS.normal,
  },
  button: {
    marginTop: 26,
    backgroundColor: COLORS.red,
    borderRadius: SIZES.r1,
    justifyContent:'center',
    marginLeft:5
  },
  buttonText: {
    marginLeft:20,
    marginRight:20,
    color: COLORS.white,
    fontSize: SIZES.h3,
    fontWeight: SIZES.w5,
    fontFamily: FONTS.normal,
    alignSelf: 'center',
  },
  line: {
    marginTop: 14,
    height: 1,
    backgroundColor: '#F5F5F5',
  },
});
export default styles;
