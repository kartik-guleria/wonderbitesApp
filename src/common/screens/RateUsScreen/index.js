import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import MainStyles from 'styleSheet/MainStyle';
import MyButton from 'components/MyButton';
import NavigationHeader from 'components/NavigationHeader';
import { useTranslation } from 'react-i18next';
import { SIZES, ComIcons } from 'assets/index';
import styles from './style';

const RateUsScreen = props => {
  const {t, i18n} = useTranslation();
  return (
    <SafeAreaView style={MainStyles.safeAreaContainerLight}>
      <View style={MainStyles.mainBody}>
        <StatusBar barStyle="dark-content" />
        <NavigationHeader
          title={t('common:RateUs')}
          navigation={props.navigation}
        />
        <View style={{margin: 20}}>
          <View style={styles.image}>
            {ComIcons.rateUs}
          </View>
          <Text
            style={[
              MainStyles.headerTitle,
              {marginTop: 30, textAlign: 'center'},
            ]}></Text>
          <View
            style={[
              MainStyles.descText,
              {
                marginTop: 20,
                marginLeft: 35,
                marginRight: 35,
                fontSize: SIZES.h,
              },
            ]}>
            <Text
              style={[MainStyles.descText, {fontSize: SIZES.h, width: '80%'}]}>
              {t('common:OpinionDesc')}
            </Text>
            <Text style={[MainStyles.descText, {fontSize: SIZES.h}]}>
              {t('common:HowWould')}
            </Text>
          </View>
          <Image
            source={require('../../../images/ratings.png')}
            style={styles.rateImage}
          />
        </View>
        <View
          style={{
            bottom: 0,
            position: 'absolute',
            width: '100%',
            marginBottom: 50,
          }}>
          <View style={{marginLeft: 10, marginRight: 10}}>
            <MyButton
              title={t('common:Submit')}
              onSelect={() => {
                props.navigation.navigate('OrderComplete');
              }}
            />
          </View>
          <View>
            <TouchableOpacity onPress={() => props.navigation.pop()}>
                <Text style={[
                MainStyles.rateText,
                {fontWeight: SIZES.w4, marginTop: -5, textAlign: 'center'},
              ]}>
              {t('common:NoThanks')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RateUsScreen;
