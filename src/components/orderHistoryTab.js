import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from 'assets/index';
import { useNavigation } from '@react-navigation/native';
const orderHistoryTab = ({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
  selectionColor,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
const navigation = useNavigation();
  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View style={{ flexDirection: 'row', marginTop: 16 }}>
      <View style={{ width: '50%' }}>
        <TouchableOpacity
          style={{ width: '100%' }}
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}>
          <Text
            style={[
              styles.tab,
              { color: getSelectionMode == 1 ? COLORS.black : COLORS.darkGrey },
            ]}>
            {option1}
          </Text>
          <View
            style={[
              styles.line,
              { backgroundColor: getSelectionMode == 1 ? COLORS.red : '#F2F2F2' },
            ]}></View>
        </TouchableOpacity>
      </View>

      <View style={{ width: '50%' }}>
        <TouchableOpacity
          style={{ width: '100%' }}
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}>
          <Text
            style={[
              styles.tab,
              { color: getSelectionMode == 2 ? COLORS.black : COLORS.darkGrey },
            ]}>
            {option2}
          </Text>
          <View
            style={[
              styles.line,
              { backgroundColor: getSelectionMode == 2 ? COLORS.red : '#F2F2F2' },
            ]}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default orderHistoryTab;

const styles = StyleSheet.create({
  tab: {
    fontSize: SIZES.h2,
    fontWeight: SIZES.w5,
    lineHeight: SIZES.l3,
    fontFamily: FONTS.normal,
    alignSelf: 'center',
  },
  line: {
    marginTop: 7,
    height: 3,
    width: '100%',
  },
});
