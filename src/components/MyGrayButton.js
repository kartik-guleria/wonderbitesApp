import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from 'assets/index';

const MyGrayButton = props => {
  return (
    <View
      style={{
        shadowColor: 'black',
        shadowOpacity: 0.12,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 2,
        // elevation: 2,
        paddingTop: 10,
        // overflow: 'hidden',
      }}>
      <TouchableOpacity style={styles.buttonStyleRed} onPress={props.onSelect}>
        <View>
          <Text style={styles.text_color}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MyGrayButton;

const styles = StyleSheet.create({
  buttonStyleRed: {
    backgroundColor: COLORS.white,
    height: SIZES.btnHeight,
    alignItems: 'center',
    borderRadius: SIZES.r1,
    borderColor: COLORS.grey,
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 25,
    justifyContent: 'center',
  },
  text_color: {
    color: COLORS.black,
    fontFamily: FONTS.light,
    fontWeight: SIZES.w7,
    fontSize: SIZES.h3,
    lineHeight: SIZES.l4,
  },
});
