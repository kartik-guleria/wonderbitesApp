import React from 'react';
import { Image } from 'react-native';

const ImageComponent = props => {
  return <Image source={props.data.image} style={{ height: 20, width: 20 }} />;
};

export default ImageComponent;
