import React from 'react';
import {View, TextInput, Image} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import {
  DelIcons,
  NavIcons,
} from 'assets/index';

const SearchBox = props => {
  return (
    <View style={MainStyle.SearchStyle}>
      <View style={{
          alignSelf: 'center',
          resizeMode: 'contain',
          marginLeft: 10,
          marginRight: 10,
        }}>
        {DelIcons.search}
      </View>
      <TextInput
        style={MainStyle.searchField}
        placeholder={props.placeholder}
        placeholderTextColor="#A2A2A2"
        autoCapitalize={props.capitalize}
        keyboardType={props.keyboardType}
        onChangeText={props.checkVal}
        returnKeyType="search"
        underlineColorAndroid="#EFEFEF"
        blurOnSubmit={false}
      />
    </View>
  );
};

export default SearchBox;
