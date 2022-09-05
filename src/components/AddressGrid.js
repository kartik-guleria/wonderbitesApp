import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import {COLORS} from 'assets/index';

const AddressGrid = props => {
  let TouchableCmp = TouchableOpacity;
  var iconForTile = props.menuImage;
  var iconForTileInActive = props.menuImageInActive;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp onPress={props.onSelect}>
      <View style={{marginLeft: 38, marginRight: 38}}>
        <View style={{marginLeft: 6.5}}>
          {props.menuIndex === props.selectedItem
            ? iconForTile
            : iconForTileInActive}
        </View>
        <Text
          style={{
            marginTop: 15.74,
            fontSize: 16,
            fontFamily: 'gotham',
            fontWeight: '500',
            lineHeight: 15.31,
            color:
              props.menuIndex == props.selectedItem ? COLORS.red : COLORS.black,
          }}>
          {props.title}
        </Text>
      </View>
    </TouchableCmp>
  );
};

export default AddressGrid;
