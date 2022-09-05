import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import {COLORS, ComIcons} from 'assets/index';
import SkipButton from './SkipButton';
const NavigationHeaderQuestionnaire = ({
  title,
  navigation,
  redWidth,
  greyWidth,
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{
            height: 50,
            width: 50,
            justifyContent: 'center',
          }}>
          <View style={{marginLeft: 17}}>{ComIcons.back}</View>
        </TouchableOpacity>
        <View
          style={{
            width: '75%',
            alignItems: 'center',
          }}>
          <Text style={MainStyle.headerTitle}> {title} </Text>
        </View>
      </View>

      <View style = {{flexDirection:'row'}}>
      <View
          style={{
            width: redWidth,
            height: 4,
            backgroundColor: COLORS.red,
            marginTop: 5,
            marginBottom: 5,
            borderRadius:2,
          }}></View>
        <View
          style={{
            width: greyWidth,
            height: 4,
            backgroundColor: '#F3F3F3',
            marginTop: 5,
            marginBottom: 5,
            borderTopRightRadius:2,
            borderBottomRightRadius:2
          }}></View>
      </View>
    </View>
  );
};

export default NavigationHeaderQuestionnaire;
