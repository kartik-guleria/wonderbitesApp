import React, { useState } from "react"
import { TouchableOpacity, View, } from "react-native";
import { ComIcons, MealPlanIcons } from 'assets/index';

const RadioButton = props => {
  const [isChecked, setChecked] = useState(false);
  const onCheckboxPress = () => {
    setChecked(!isChecked);
  }
  const selectedBox = () => {
    return (
      <View>
        {isChecked ? MealPlanIcons.radioButtonRed : MealPlanIcons.radioButtonRedEmpty}
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
export default RadioButton;