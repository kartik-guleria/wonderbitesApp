import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import ImageSlider from 'components/ImageSlider';
import { COLORS, FONTS, SIZES } from 'assets/index';
import { useTranslation } from 'react-i18next';
import { teal900 } from 'react-native-paper/lib/typescript/styles/colors';

const ProductGridTile = props => {
  const { t, i18n } = useTranslation();

  const images = [
    { uri: props.image },
  ];
    return (
    <View style={styles.productItem}>
      <View style={{ backgroundColor: '#F2F3F0', borderRadius: SIZES.r1 }}>
        <View style={styles.productRow}>
          <ImageSlider images={images}>
            {/* <ImageBackground source={{uri: props.image}} style={styles.bgImge}> */}

            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </View>
          </ImageSlider>
          {/* </ImageBackground> */}
        </View>
        <View style={styles.gridItem}>
          <View style={{ ...styles.productRow, ...styles.productDescription }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.rateText}>{props.rating}</Text>

              <Image
                style={{ height: 10, width: 10 }}
                source={require('../images/star.png')}
              />
            </View>
              <TouchableOpacity style={styles.circleView} onPress={()=>props.onAddWishlist()} >
              <Image
                style={{ height: 16, width: 18 }}
                source={require('../images/heart.png')}
              />
              </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={props.onSelect}
          style={{
            backgroundColor: COLORS.white,
            borderBottomEndRadius: 12,
            borderBottomStartRadius: 12,
          }}>
            <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
          <View
            style={{
              flexDirection: 'row',
              flex: 2,
              justifyContent: 'space-between',
            }}>
                <Text style={[styles.textTitle, { marginLeft: 0 }]}>{props.title}</Text>
            <Text style={[styles.textTitle, { color: COLORS.red }]}>
                  {props.price}L
            </Text>
              </View>
            </TouchableOpacity>
          <Text style={styles.descText}>
            {props.shortDesc}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flex: 2,
              justifyContent: 'space-between',
            }}>
              <Text style={[styles.textTitle, { fontWeight: SIZES.w5, marginLeft: 10 }]}>
              {t('delivery:mostSold')}
            </Text>
            <TouchableOpacity style={styles.buttonStyleRed} onPress = {props.onAddPress}>
              <View>
                <Text
                  style={{
                    color: COLORS.white,
                    fontFamily: FONTS.normal,
                    fontWeight: SIZES.w5,
                    fontSize: SIZES.h,
                  }}>
                  {t('delivery:add')}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    borderRadius: SIZES.r1,
    marginLeft: SIZES.mlr1,
    marginRight: SIZES.mlr1,
    marginTop: 8,
    marginBottom: 8,
    borderColor: COLORS.red,
    shadowColor: COLORS.titleBlack,
    shadowOpacity: 0.15,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 0 },
  },
  buttonStyleRed: {
    backgroundColor: COLORS.red,
    height: 30,
    alignItems: 'center',
    width: 75,
    borderRadius: SIZES.r,
    marginLeft: 10,
    marginRight: 8,
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    // marginBottom: 10,
    justifyContent: 'center',
    color: COLORS.white,
    fontSize: SIZES.h,
    fontFamily: FONTS.normal,
  },
  textTitle: {
    fontWeight: SIZES.w7,
    color: COLORS.black,
    fontFamily: FONTS.normal,
    fontSize: SIZES.h3,
    alignSelf: 'flex-start',
    textAlign: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginTop: 15,
    marginBottom: 15,
  },
  descText: {
    color: COLORS.black,
    marginLeft: 10,
    marginRight: 6,
    fontSize: SIZES.h,
    fontFamily: FONTS.normal,
  },
  rateText: {
    color: COLORS.black,
    fontSize: SIZES.h3,
    fontFamily: FONTS.normal,
    fontWeight: SIZES.w5,
  },

  circleView: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.white,
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: SIZES.r2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    flex: SIZES.f1,
    marginLeft: 10,
    marginRight: 10,
  },
  productRow: {
    flexDirection: 'row',
    borderRadius: SIZES.r1,
    marginBottom: 8,
    marginLeft: 10,
    marginRight: 10,
  },

  productDescription: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -40,
  },
  bgImge: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: SIZES.h4,
    color: 'white',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});

export default ProductGridTile;
