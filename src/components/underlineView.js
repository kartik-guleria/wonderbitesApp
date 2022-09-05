import { COLORS } from 'assets/';
import React from 'react';
import {View} from 'react-native';

const UnderlineView = props => {
  return (
    <View
      style={{
       width: '100%',
        height: 1,
        backgroundColor: '#F3F3F3',
        marginTop: 5,
        marginBottom: 5,
      }}></View>
  );
};

export default UnderlineView;
