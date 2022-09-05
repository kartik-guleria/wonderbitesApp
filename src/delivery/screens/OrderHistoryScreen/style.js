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
  arrowimage: {
    marginTop: 3.5,
    flexDirection: 'row',
  },
  orderTitle: {
    fontFamily: FONTS.normal,
    fontSize: SIZES.h2,
    fontWeight: SIZES.w5,
    lineHeight: SIZES.l3,
    color: COLORS.titleBlack,
    fontStyle: 'normal',
  },
  date: {
    color: '#898989',
    marginTop: 9,
    fontSize: SIZES.h,
    fontFamily: FONTS.normal,
    fontWeight: SIZES.w5,
  },
  orderImages: {
    width: 41,
    height: 41,
    marginLeft: 2,
    marginTop: 7,
    marginRight: 10,
    borderRadius: SIZES.r,
    backgroundColor: '#F2F3F0',
  },
  image: {
    height: 145,
    width: 143,
    marginLeft: -20,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  detailsHeading: {
    fontSize: SIZES.h,
    fontFamily: FONTS.normal,
    fontWeight: SIZES.w5,
    color: '#898989',
    lineHeight: SIZES.l1,
  },
  detailsHeadingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 11,
  },
  orderDetailsView: {
    flexDirection: 'row',
    marginTop: 7,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  orderDetails: {
    fontWeight: SIZES.w7,
    fontFamily: FONTS.normal,
    fontSize: SIZES.h,
    lineHeight: SIZES.l2,
  },

  myStarStyle: {
    height: 13,
    width: 13,
    resizeMode: 'contain',
  },

  monthView: {
    flex: SIZES.f1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 21,
  },
  monthText: {
    fontSize: SIZES.h4,
    color: COLORS.red,
    fontFamily: FONTS.normal,
    fontWeight: SIZES.w5,
    lineHeight: SIZES.l5,
  },
  monthOrders: {
    fontSize: SIZES.h2,
    color: '#626262',
    fontFamily: FONTS.normal,
    fontWeight: SIZES.w5,
    lineHeight: SIZES.l3,
  },
  sectionBox: {
    marginTop: 15,
    borderColor: '#dddddd',
    borderRadius: SIZES.r,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 1,
    // elevation: 1,
    marginLeft: SIZES.mlr1,
    marginRight: SIZES.mlr1,
    borderWidth: 1,
  },
  sectionBoxView: {
    marginTop: 13,
    marginLeft: 10,
    marginRight: 10,
  },
  titleNbuttonView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleText: {
    fontSize: SIZES.h2,
    color: COLORS.titleBlack,
    fontFamily: FONTS.normal,
    fontWeight: SIZES.w5,
    lineHeight: SIZES.l3,
  },
  sectionDescription: {
    fontSize: SIZES.h3,
    color: COLORS.black,
    height: 200,
    fontWeight: SIZES.w5,
    marginTop: 25,
    marginLeft: SIZES.mlr1,
    marginRight: SIZES.mlr1,
    fontFamily: FONTS.normal,
    alignSelf: 'center',
  }
});
export default styles;
