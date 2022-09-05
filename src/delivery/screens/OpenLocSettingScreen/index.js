import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import MyButton from 'components/MyButton';
import MainStyles from 'styleSheet/MainStyle';
import NavigationHeader from 'components/NavigationHeader';
import {useTranslation} from 'react-i18next';
import styles from './style';
import {
  DelIcons
} from 'assets/index';

const OpenLocSettingScreen = props => {
  const {t, i18n} = useTranslation();
  return (
    <SafeAreaView style={MainStyles.safeAreaContainerLight}>
      <View style={{height: '100%'}}>
        <StatusBar barStyle="dark-content" />
        <NavigationHeader navigation={props.navigation} displayLine={false} />
        <ScrollView bounces={false}>
          <View style={styles.screen}>
            <View style={styles.image}>{DelIcons.askLocation}</View>

            <Text style={styles.sectionTitle}>{t('delivery:whereAreYou')}</Text>
            <View style={{width: '100%', justifyContent: 'center'}}>
              <Text style={styles.sectionDescription}>
                {t('delivery:youNeedToEnable')}
              </Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            bottom: 10,
            width: '100%',
          }}>
          <View style={{marginLeft: 10, marginRight: 10}}>
            <MyButton
              title={t('delivery:openSettings')}
              //   onSelect={() => {
              //     props.navigation.navigate('TrackOrder');
              //   }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OpenLocSettingScreen;
