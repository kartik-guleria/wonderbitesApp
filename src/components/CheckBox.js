import React, { useState } from "react"
import { TouchableOpacity, View, } from "react-native";
import { ComIcons } from 'assets/index';

const CheckBox = props => {
  const [isChecked, setChecked] = useState(false);
  const onCheckboxPress = () => {
    setChecked(!isChecked);
  }
  const selectedBox = () => {
    return (
      <View>
        {isChecked ? ComIcons.redTickBox : ComIcons.redEmptyBox}
      </View>
    );
  };
  return (
    <View style={props.style}>
      <TouchableOpacity
        style={{
          marginLeft: 12,
          marginRight: 6,
          alignSelf: 'center',
          justifyContent: 'center',
          resizeMode: 'contain',
        }}
        onPress={onCheckboxPress}
      >
        {selectedBox()}

      </TouchableOpacity>
    </View>
  );
}
export default CheckBox;