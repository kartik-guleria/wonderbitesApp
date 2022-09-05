import React from 'react';
import { View } from 'react-native';
import { COLORS } from 'assets/index';

const BoxShadow = props => {
  return (
    <View
      style={{
        shadowColor: COLORS.titleBlack,
        shadowOpacity: 0.36,
        shadowRadius: 12,
        // overflow: 'scroll',
        shadowOffset: { width: 0, height: 2 },
        elevation: 1,
      }}></View>
  );
};

export default BoxShadow;
