import { COLORS } from 'assets/';
import React from 'react';
import {View, TextInput} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';

const InputField = ({
  placeholder,
  capitalize,
  keyboardType,
  returnKeyType,
  checkVal,
  txtValue,
  errorMsg
}) => {
  return (
    <View style={MainStyle.SectionStyle}>
      <TextInput
        style={[MainStyle.inputStyle, { borderBottomColor: errorMsg == true ? 'red' : '#EFEFEF' }]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.black}
        autoCapitalize={capitalize}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        onChangeText={checkVal}
        defaultValue={txtValue}
        // underlineColorAndroid="#EFEFEF"
        // secureTextEntry={secureText}
        blurOnSubmit={false}
      />

    </View>
  );
};

export default InputField;
