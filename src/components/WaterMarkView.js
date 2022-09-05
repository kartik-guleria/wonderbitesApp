import React from 'react';
import {Image, View} from 'react-native';

const WaterMarkView = props => {
  return (
    <View
      style={{
        width: '100%',
        marginTop: 15,
        bottom: 0,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../images/waterMark-logo.png')}
        style={{width: 100, height: 20, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default WaterMarkView;
