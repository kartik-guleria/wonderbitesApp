import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import UnderLiveView from 'components/underlineView';

const NavigationHeader = ({
  title,
  navigation,
  displayBtn,
  displayLine = true,
}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 0.1,
          }}
          onPress={() => navigation.pop()}>
          <View
            style={{
              height: 50,
              width: 50,
              justifyContent: 'center',
            }}>
            {displayBtn || (
              <Image
                source={require('../images/back.png')}
                style={MainStyle.navBackButton}
              />
            )}
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: '75%',
            alignItems: 'center',
            marginLeft: 45,
          }}>
          <Text style={MainStyle.headerTitle}> {title} </Text>
        </View>
      </View>

      {displayLine && <UnderLiveView />}
    </>
  );
};

export default NavigationHeader;
