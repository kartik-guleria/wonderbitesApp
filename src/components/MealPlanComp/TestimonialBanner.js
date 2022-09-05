import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  COLORS,
  SIZES
} from 'assets/index';


const { width } = Dimensions.get('window');
const height = (width * 35) / 60;

export default class TestimonialBanner extends React.Component {
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
            <View style={style.containerSml}>
              <Text style={{ fontSize: 60, color: COLORS.red, alignSelf: 'center' }}> "  </Text>
              <Text style={{ fontSize: 12, fontWeight: SIZES.w5, alignSelf: 'center', textAlign: 'center', marginTop: -30, marginLeft: 15, marginRight: 15 }}> Lorem ipsum dolor sit amet, purus adipiscing elit ut aliquam, purus sit amet luctus venenatis dolor sit amet, purus  </Text>
              <View style={{ alignSelf: 'center', height: 1.5, width: 30, backgroundColor: '#dddddd', marginTop: 8 }}></View>
              <Image key={index} source={image} style={style.image} />
              <Text style={{ alignSelf: 'center' }}>Ana Kuno</Text>
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
    alignSelf: 'flex-start',
  },
  containerSml: {
    width: width - 100,
    height,
    borderRadius: 12,
    marginRight: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
  scroll: {
    width: width,
    height,
  },
  image: {
    margin: 8,
    resizeMode: 'cover',
    borderRadius: 32,
    height: 63,
    width: 63,
    alignSelf: 'center',
  },

});
