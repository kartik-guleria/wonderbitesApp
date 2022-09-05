import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS} from 'assets/index';
const SuccessModel = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 20,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        borderRadius: 12,
        alignSelf: 'center',
      }}>
      <Image
        source={
          props.type == 'Success'
            ? require('images/success.gif')
            : require('images/errorIcon.png')
        }
        style={{margin: 10, height: 50, width: 50}}
      />
      <Text
        style={{
          marginLeft: 10,
          fontSize: 16,
          width: '65%',
          color: props.type == 'Success' ? COLORS.successColor : COLORS.red,
          alignSelf: 'center',
        }}>
        {props.successTitle}
      </Text>
      <TouchableOpacity onPress={props.onSelect}>
        <Image
          source={require('images/cross-black.png')}
          style={{margin: 10, height: 20, width: 20}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default SuccessModel;
