import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  SIZES
} from 'assets/index';

const { width } = 120
const height = 100

export default class HighlightsBanner extends React.Component {
  state = {
    active: 0,
  };
  change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  };

  render() {
    return (
      <View style={style.container}>
        <ScrollView
          bounces={false}
          pagingEnabled
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={style.container}>
          {this.props.images.map((image, index) => (
            <View>
              <Image key={index} source={image} style={style.image} />
            </View>
          ))}
        </ScrollView>

      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    width: width,
    height,
    alignSelf: 'center',
  },
  scroll: {
    width,
    height,
  },
  image: {
    marginRight: 20,
    resizeMode: 'cover',
    borderRadius: SIZES.r1,
    height: 100,
    width: 120,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  pagingText: {
    color: '#888',
    fontSize: width / 50,
    margin: 2,
  },
  pagingActiveText: {
    color: '#000',
    fontSize: width / 50,
    margin: 2,
  },
});
