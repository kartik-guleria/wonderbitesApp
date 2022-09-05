import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from 'assets/index';

const MyCustomSwitch = ({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
  selectionColor,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View style={styles.switchContainer}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updatedSwitchData(1)}
        style={[
          styles.switch1,
          { backgroundColor: getSelectionMode == 1 ? selectionColor : COLORS.white },
        ]}>
        <Text
          style={{
            fontSize: SIZES.h,
            color: getSelectionMode == 1 ? COLORS.white : COLORS.black,
          }}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        TouchableOpacity
        activeOpacity={1}
        onPress={() => updatedSwitchData(2)}
        style={[
          styles.switch2,
          { backgroundColor: getSelectionMode == 2 ? selectionColor : COLORS.white },
        ]}>
        <Text
          style={{
            fontSize: SIZES.h,
            color: getSelectionMode == 2 ? COLORS.white : COLORS.black,
          }}>
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default MyCustomSwitch;
const styles = StyleSheet.create({
  switchContainer: {
    height: 32,
    width: 164,
    backgroundColor: 'white',
    borderRadius: SIZES.r2,
    borderWidth: 1,
    borderColor: '#F2F3F0',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  switch1: {
    flex: SIZES.f1,
    borderRadius: SIZES.r2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switch2: {
    flex: SIZES.f1,
    borderRadius: SIZES.r2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
