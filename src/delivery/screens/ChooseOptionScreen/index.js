import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView
} from 'react-native';
import MyButton from 'components/MyButton';
import MyGrayButton from 'components/MyGrayButton';
import MainStyles from 'styleSheet/MainStyle';
import NavigationHeader from 'components/NavigationHeaderCross';
import { useTranslation } from 'react-i18next';
import { replace } from 'navigation/RootNaviagtion';
import styles from './style';

const ChooseOptionScreen = props => {
  const {t, i18n} = useTranslation();
  return (
    <SafeAreaView style={MainStyles.safeAreaContainerLight}>
        <NavigationHeader navigation={props.navigation} />
        <StatusBar barStyle="dark-content" />
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.screen}>
          <Image
            source={require('images/checkComp.gif')}
            style={styles.image}
          />

          <Text style={styles.sectionDescription}>
            {t('delivery:productAdded')}
          </Text>
          
          <View
            style={{
              marginBottom:0,
              width: '100%',
              paddingTop: 130,
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
              <View
                style={{
                  marginTop: -20,
                }}>
                <MyButton
                  title={t('delivery:proceedToCheckout')}
                  onSelect={() => {
                    props.navigation.navigate('Cart');
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseOptionScreen;
