import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import {COLORS, FONTS, SIZES} from 'assets/index';

const ServiceGridTile = props => {
  let TouchableCmp = TouchableOpacity;

  var iconForTile = props.menuImage;
  var iconForTileInActive = props.menuImageInActive;

  var iconForTile = props.menuImage;
  var iconForTileInActive = props.menuImageInActive;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp style={styles.productItem} onPress={props.onSelect}>
      <View
        style={{
          ...styles.container,
          ...{
            backgroundColor: props.menuIndex == 1 ? COLORS.red : COLORS.white,
          },
        }}>
        <View>{props.menuIndex == 1 ? iconForTile : iconForTileInActive}</View>
        <Text
          style={[
            styles.itemText,

            {color: props.menuIndex == 1 ? COLORS.white : COLORS.red},
          ]}>
          {props.title}
        </Text>
      </View>
    </TouchableCmp>
  );
};

const styles = StyleSheet.create({
  productItem: {
    flex: SIZES.f1,
    marginTop: 16,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 170,
  },
  itemImage: {
    justifyContent: 'flex-end',
    width: 85,
    height: 85,
    alignSelf: 'center',
    resizeMode: 'contain',
    margin: 10,
  },
  itemText: {
    alignContent: 'center',
    fontSize: SIZES.h4,
    color: COLORS.background2,
    fontFamily: FONTS.normal,
    fontStyle: 'normal',
    fontWeight: SIZES.w5,
    paddingBottom: 15,
    marginTop: 15,
  },
  container: {
    // flex : SIZES.f1,
    borderRadius: SIZES.r1,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    elevation: 8,
    marginBottom: Platform.OS === 'android' ? 20 : 0,
    marginLeft: Platform.OS === 'android' ? 16 : 0,
    marginRight: Platform.OS === 'android' ? 16 : 0,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
export default ServiceGridTile;
