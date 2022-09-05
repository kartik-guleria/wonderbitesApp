import NavigationHeaderCross from 'components/NavigationHeaderCross';
import WaterMarkView from 'components/WaterMarkView';
import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import {FONTS, COLORS, SIZES} from '../../../assets/index';
import { useTranslation } from 'react-i18next';

const CallScheduled = props => {
  const { t, i18n } = useTranslation();

  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeaderCross navigation={props.navigation} />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{marginTop: 80}}>
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: FONTS.normal,
              fontSize: SIZES.h5,
              fontWeight: SIZES.w5,
              lineHeight: SIZES.l6,
            }}>
            The call has been scheduled
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: FONTS.normal,
              fontSize: SIZES.h3,
              fontWeight: SIZES.w3,
              lineHeight: SIZES.l5,
              textAlign: 'center',
              marginLeft: 49,
              marginRight: 49,
              marginTop: 16,
            }}>
            One of our representatives will call you back
          </Text>
        </View>
        <Image
          style={{marginTop: -100, height: 272, width: 272}}
          source={require('../../../images/timer.png')}
        />
        <WaterMarkView />
      </View>
    </SafeAreaView>
  );
};

export default CallScheduled;
