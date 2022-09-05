import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS} from 'assets/index';
const ErrorText = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      <Text
        style={{
          marginLeft: 10,
          fontSize: 20,
          color: COLORS.red,
          alignSelf: 'center',
        }}>
        {props.message}
      </Text>
    </View>
  );
};
export default ErrorText;
