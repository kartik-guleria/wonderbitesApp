import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from 'assets/index';

const wonderPointTab = ({
  selectionMode,
  option1,
  option2,
  option3,
  onSelectSwitch,
  selectionColor,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View style={{ flexDirection: 'row', marginTop: 20 }}>
      <View style={{ width: '33%' }}>
        <TouchableOpacity
          style={{ width: '100%' }}
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}>
          <Text
            style={[
              styles.tab,
              { color: selectionMode == 1 ? COLORS.black : COLORS.darkGrey },
            ]}>
            {option1}
          </Text>
          <View
            style={[
              styles.line,
              { backgroundColor: selectionMode == 1 ? COLORS.red : '#F2F2F2' },
            ]}></View>
        </TouchableOpacity>
      </View>

      <View style={{ width: '33%' }}>
        <TouchableOpacity
          style={{ width: '100%' }}
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}>
          <Text
            style={[
              styles.tab,
              { color: selectionMode == 2 ? COLORS.black : COLORS.darkGrey },
            ]}>
            {option2}
          </Text>
          <View
            style={[
              styles.line,
              { backgroundColor: selectionMode == 2 ? COLORS.red : '#F2F2F2' },
            ]}></View>
        </TouchableOpacity>
      </View>
      <View style={{ width: '33%' }}>
        <TouchableOpacity
          style={{ width: '100%' }}
          activeOpacity={1}
          onPress={() => updatedSwitchData(3)}>
          <Text
            style={[
              styles.tab,
              { color: selectionMode == 3 ? COLORS.black : COLORS.darkGrey },
            ]}>
            {option3}
          </Text>
          <View
            style={[
              styles.line,
              { backgroundColor: selectionMode == 3 ? COLORS.red : '#F2F2F2' },
            ]}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default wonderPointTab;

const styles = StyleSheet.create({
  tab: {
    fontSize: SIZES.h1,
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
