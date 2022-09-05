import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import MainStyles from 'styleSheet/MainStyle';
import WaterMarkView from 'components/WaterMarkView';
import NavigationHeader from 'components/NavigationHeader';
import { useTranslation } from 'react-i18next';
import styles from './style';
import {
  SIZES,
  DelIcons,
} from 'assets/index';

const MyBookingScreen = props => {
  const { t, i18n } = useTranslation();
  return (
    <SafeAreaView style={MainStyles.safeAreaContainerLight}>
       <StatusBar barStyle="dark-content" />
        <NavigationHeader title={t('delivery:yourBookings')} navigation={props.navigation} />
      <View style={[MainStyles.mainBody,{justifyContent:'space-between'}]}>
       <View>
          <View>{ }</View>
          <View style={styles.image}>{DelIcons.yourBooking}</View>
          <Text
            style={[MainStyles.descText, { marginTop: 60, fontSize: SIZES.h3 }]}>
           {t('delivery:noBookingsYet')}
          </Text>
        </View>

        <WaterMarkView />
      </View>
    </SafeAreaView>
  );
};

export default MyBookingScreen;
