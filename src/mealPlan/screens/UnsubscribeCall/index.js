import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import NavigationHeaderCross from 'components/NavigationHeaderCross';
import {COLORS, FONTS, SIZES} from '../../../assets/index';
import MyButton from 'components/MyButton';
import {useTranslation} from 'react-i18next';

const UnsubscribeCall = props => {
  const {t, i18n} = useTranslation();
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <NavigationHeaderCross navigation={props.navigation} />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <Text
            style={{
              marginTop: 20,
              textAlign: 'center',
              fontFamily: FONTS.normal,
              fontSize: 35,
              fontWeight: SIZES.w7,
            }}>
            Unsubscribe
          </Text>
          <Text
            style={{
              marginTop: 14,
              textAlign: 'center',
              fontFamily: FONTS.normal,
              fontSize: SIZES.h1,
              fontWeight: SIZES.w5,
            }}>
            We are very sorry to see you go !
          </Text>
        </View>
        <View
          style={{
            marginTop: -55,
            alignItems: 'center',
            marginLeft: 58,
            marginRight: 58,
          }}>
          <Image
            style={{width: 350, height: 350}}
            source={require('../../../images/unsubscribe.png')}
          />
          <Text
            style={{
              marginTop: -30,
              textAlign: 'center',
              fontFamily: FONTS.normal,
              fontSize: SIZES.h3,
              fontWeight: SIZES.w5,
            }}>
            Give us a call so we can stop the meal plan subscripion
          </Text>
        </View>
        <View>
          <View
            style={{
              shadowColor: COLORS.titleBlack,
              shadowOpacity: 0.24,
              shadowOffset: {width: 0, height: 0},
              shadowRadius: 3,
              marginBottom: -20,
            }}>
            <TouchableOpacity
              style={styles.buttonStyleRed}
              onPress={() => props.navigation.navigate.pop()}>
              <View>
                <Text style={styles.text_color}>Stay Subscribed</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 23}}>
            <MyButton title="Call Us" onSelect={null} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UnsubscribeCall;
const styles = StyleSheet.create({
  buttonStyleRed: {
    backgroundColor: 'transparent',
    height: SIZES.btnHeight,
    alignItems: 'center',
    borderRadius: SIZES.r1,
    borderColor: COLORS.red,
    borderWidth: 1,
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
    fontSize: SIZES.h3,
    fontWeight: SIZES.w5,
    fontFamily: FONTS.normal,
    lineHeight: 17,
  },
});
