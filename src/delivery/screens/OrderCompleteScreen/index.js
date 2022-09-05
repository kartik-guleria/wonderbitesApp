import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import MyButton from 'components/MyButton';
import NavigationHeaderCross from 'components/NavigationHeaderCross';
import {useTranslation} from 'react-i18next';
import styles from './style';
import {COLORS} from 'assets/index';
import MainStyle from 'styleSheet/MainStyle';
import { replace } from 'navigation/RootNaviagtion';

const OrderCompleteScreen = props => {
  const {t, i18n} = useTranslation();
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <StatusBar barStyle="dark-content" />
      <View style={{backgroundColor: COLORS.white, height: '100%'}}>
        <NavigationHeaderCross navigation={props.navigation} />
        <ScrollView bounces={false}>
          <View style={styles.screen}>
            <Image
              source={require('/images/track.png')}
              style={styles.image}
            />

            <Text style={styles.sectionTitle}>{t('delivery:onTheWay')}</Text>
            <View style={{width: '100%', justifyContent: 'center'}}>
              <Text style={styles.sectionDescription}>
                {t('delivery:thankYou')}
              </Text>
            </View>

            <View style={styles.deliveryView}>
              <Text style={styles.deliveryTime}>
                {t('delivery:estimatedDeliveryTime')}{' '}
              </Text>
              <Text style={styles.deliveryTime}>20 {t('delivery:min')}</Text>
            </View>
            <View
              style={{
                bottom: 0,
                width: '100%',
                paddingTop: 140,
              }}>
              <View
                style={{
                  marginBottom: 0,
                  width: '100%',
                }}>
                <View style={{marginLeft: 10, marginRight: 10}}>
                  <MyButton
                    title={t('delivery:trackMyOrder')}
                    onSelect={() => {
                      props.navigation.navigate('TrackOrder');
                    }}
                  />
                </View>
                <TouchableOpacity onPress={()=> replace('BottomTabs')}>
                  <View>
                    <Text style={styles.text_color}>
                      {t('delivery:orderAgain')}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleteScreen;
