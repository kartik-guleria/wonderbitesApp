import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../assets/index';

const styles = StyleSheet.create({
  imageButton: {
    borderRadius: 40,
    alignSelf: 'center',
    borderWidth:1,
    borderColor:COLORS.grey
  },
  profileImage: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    resizeMode:'cover',
    borderRadius: 40,

  },
  imageIcon: {
    width: 15,
    height: 14,
    alignSelf: 'center',
    marginTop: -15,
    position: 'relative',
    marginLeft: 35,
    borderRadius: SIZES.r,
    backgroundColor: COLORS.red,
  },
  title: {
    fontSize: SIZES.h2,
    fontFamily: FONTS.normal,
    fontWeight: SIZES.w5,
    color: COLORS.black,
  },
  input: {
    marginLeft: 22,
    fontWeight: SIZES.w3,
    fontSize: SIZES.h2,
    fontFamily: FONTS.light,
    color: COLORS.black,
  },
  button: {
    borderRadius: SIZES.r1,
    backgroundColor: COLORS.red,
    height: SIZES.btnHeight,
    marginLeft: SIZES.mlr1,
    marginRight: SIZES.mlr1,
    marginTop:20,
    marginBottom:20
  },
  buttonText: {
    fontSize: SIZES.h3,
    fontFamily: FONTS.normal,
    fontWeight: SIZES.w5,
    color: COLORS.white,
    marginTop: 14,
    alignSelf: 'center',
  },
  border: {
    marginTop: 15,
    borderColor: '#dddddd',
    height: 45,
    borderWidth: 1,
    borderRadius: SIZES.r1,
    justifyContent: 'center',
  },
  middleContainer: {
    marginLeft: SIZES.mlr1,
    marginRight: SIZES.mlr1,
    marginTop: 22,
  },
});

export default styles;
