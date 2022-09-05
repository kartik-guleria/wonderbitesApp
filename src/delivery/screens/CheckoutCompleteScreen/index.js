import React from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import MyButton from 'components/MyButton';
import MyGrayButton from 'components/MyGrayButton';
import NavigationHeaderCross from 'components/NavigationHeaderCross';
import { useTranslation } from 'react-i18next';
import styles from './style';
import { COLORS } from 'assets/index';
import MainStyle from 'styleSheet/MainStyle';
// import { replace } from 'lodash';
import { replace } from 'navigation/RootNaviagtion';

const CheckoutCompleteScreen = props => {
  const { t, i18n } = useTranslation();
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <View style={{ backgroundColor: COLORS.white, height: '100%' }}>
        <StatusBar barStyle="dark-content" />
        <NavigationHeaderCross title={t('delivery:orderCompleted')} navigation={props.navigation} />
        <ScrollView bounces={false}>
          <View style={styles.screen}>
            <Image
              source={require('../../../images/orderComp.gif')}
              style={styles.image}
            />

            <Text style={styles.sectionDescription}>{t('delivery:orderPlaced')}</Text>

            <View
              style={{
                marginBottom: 0,
                width: '100%',
                paddingTop: 150,
              }}>
              <View
                style={{
                  marginBottom: 0,
                  width: '100%',
                }}>
                <MyGrayButton
                  title={t('delivery:continueShopping')}
                  onSelect={() => {
                    replace('BottomTabs');
                  }}
                />
                <View style={{ marginTop: -20 }}>
                  <MyButton
                    title={t('delivery:trackMyOrder')}
                    onSelect={() => {
                      props.navigation.navigate('OrderComplete');
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutCompleteScreen;
