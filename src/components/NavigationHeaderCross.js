import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import UnderLiveView from 'components/underlineView';
import { ComIcons } from 'assets/index';
import SkipButton from './SkipButton';
const NavigationHeaderCross = ({ title, navigation, displayLine, displayLineSkip,btnName,btnBorderDisplay,onSelect}) => {

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
        {/* <Button
          onPress={guestLogin}
          title="Skip"
          color="#841584"
        /> */}
        {displayLineSkip && <SkipButton btnName={btnName} btnBorderDisplay={btnBorderDisplay} onSelect={onSelect} />}
      </View>
      {displayLine && <UnderLiveView />}
    </View>
  );
};

export default NavigationHeaderCross;
