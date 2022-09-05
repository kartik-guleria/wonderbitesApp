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

const TableReservationScreen = props => {
  const { t, i18n } = useTranslation();
  return (
    <SafeAreaView style={MainStyles.safeAreaContainerLight}>
      <StatusBar barStyle="dark-content" />
        <NavigationHeader
          title={t('delivery:tableReservation')}
          navigation={props.navigation}
        />
      <View style={[MainStyles.mainBody,{justifyContent:'space-between'}]}>
        

        <View>
          <View style={styles.image}>{DelIcons.tableReservation}</View>
          <Text
            style={[MainStyles.descText, { marginTop: 80, fontSize: SIZES.h3 }]}>
            {t('delivery:noTableBookings')}
          </Text>
        </View>

        <WaterMarkView />
      </View>
    </SafeAreaView>
  );
};

export default TableReservationScreen;
