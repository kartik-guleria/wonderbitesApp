import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import UnderLiveView from 'components/underlineView';
import { ComIcons, DelIcons } from 'assets/index';
const HeaderCrossWithShare = ({ title, navigation, displayLine, onClick }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.pop()} style={{
          height: 50,
          width: 50,
          justifyContent: 'center',
        }}>
          <View style={{ marginLeft: 17 }}>
            {ComIcons.cross}
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: '75%',
            alignItems: 'center',
          }}>
          <Text style={MainStyle.headerTitle}> {title} </Text>
        </View>
        <TouchableOpacity onPress={onClick}>
        {DelIcons.share}
        </TouchableOpacity>
      </View>
      {displayLine && <UnderLiveView />}
    </View>
  );
};

export default HeaderCrossWithShare;
