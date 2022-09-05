import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from 'assets/index';

const MyButton = props => {
  return (
    <View
      style={{
        shadowColor: COLORS.titleBlack,
        shadowOpacity: 0.24,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 3,
        paddingTop: 10,
      }}>
      <TouchableOpacity style={styles.buttonStyleRed} onPress={props.onSelect}>
        <View>
          <Text style={styles.text_color}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  buttonStyleRed: {
    backgroundColor: COLORS.red,
    height: SIZES.btnHeight,
    alignItems: 'center',
    borderRadius: SIZES.r1,
    marginLeft: SIZES.mlr1,
    marginRight: SIZES.mlr1,
    marginBottom: 25,
    justifyContent: 'center',
    color: COLORS.white,
    fontSize: SIZES.h3,
    padding: 10,
    fontWeight: SIZES.w5,
    fontFamily: FONTS.normal,
  },
  text_color: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: SIZES.h3,
  },
});
