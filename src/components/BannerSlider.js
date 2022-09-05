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

const { width } = Dimensions.get('window');
const height = (width * 38) / 60;

export default class BannerSlider extends React.Component {
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
        {/* <View style={style.pagination}>
          {this.props.images.map((i, k) => (
            <Text
              key={k}
              style={
                k == this.state.active
                  ? style.pagingActiveText
                  : style.pagingText
              }>
              ⬤
            </Text>
          ))}
        </View> */}
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height,
    alignSelf: 'center',
  },
  scroll: {
    width,
    height,
  },
  image: {
    // width,
    // height,
    marginRight: 20,
    resizeMode: 'cover',
    borderRadius: SIZES.r1,
    height: 230,
    width: 289,
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
