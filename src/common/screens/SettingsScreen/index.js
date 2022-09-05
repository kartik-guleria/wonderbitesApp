import React from 'react';
import {
  View,
  FlatList,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import UnderlineView from 'components/underlineView';
import WaterMarkView from 'components/WaterMarkView';
import NavigationHeader from 'components/NavigationHeader';
import { useTranslation } from 'react-i18next';
import {SIZES} from 'assets/index';

const SettingsScreen = props => {
  const { i18n, t } = useTranslation();
  const selectedLanguageCode = i18n.language;
  const DATA = [
    {
      id: '1',
      detailDesc: t('common:openPhone'),
      title: t('common:appPermission'),
      nextView: 'AccountSetting',
    },
    {
      id: '2',
      detailDesc: t('common:changeEmailOrDelete'),
      title: t('common:accountSettings'),
      nextView: 'AccountSetting',
    },
    {
      id: '3',
      detailDesc: t('common:editAddress'),
      title: t('common:myAddresses'),
      nextView: 'AddressList',
    },
    {
      id: '4',
      detailDesc: t('common:editPayment'),
      title: t('common:paymentDetails'),
      nextView: 'PaymentDetail',
    },
    {
      id: '5',
      detailDesc: selectedLanguageCode === 'en' ? 'English'
      :selectedLanguageCode === 'al' ? 'Albanian'
      :selectedLanguageCode === 'fr' ? 'French'
      :selectedLanguageCode === 'il' ? 'Italian'
      :selectedLanguageCode === 'gr' ? 'Greek'
      :selectedLanguageCode === 'ma' ? 'Macedonain':null,
      title: t('common:language'),
      nextView: 'SelectLang',
    },
    {
      id: '6',
      detailDesc: 'v1.0',
      title: t('common:appVersion'),
      nextView: '',
    },
  ];
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      detailDesc={item.detailDesc}
      nextScreen={item.nextView}
    />
  );
  const Item = ({title, detailDesc, nextScreen}) => (
    <TouchableOpacity
      onPress={() => {
        if (nextScreen != '') {
          props.navigation.navigate(nextScreen);
        }
      }}>
      <View style={{marginLeft: 25, margin:5,marginRight: 25}}>
        <Text
          style={[
            MainStyle.descText,
            {
              textAlign: 'left',
              fontWeight: SIZES.w5,
              marginTop: 5,
              marginBottom: 5,
            },
          ]}>
          {title}
        </Text>
      </View>
      <View
        style={{
          marginLeft: 25,
          marginRight: 25,
          marginTop: 6,
          marginBottom: 3,
        }}>
        <Text
          style={[
            MainStyle.descTextLight,
            {textAlign: 'left', fontSize: SIZES.h1},
          ]}>
          {detailDesc}
        </Text>
      </View>
      <UnderlineView />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <View style={MainStyle.mainBody}>
        <StatusBar barStyle="dark-content" />
        <NavigationHeader
          title={t('common:Settings')}
          navigation={props.navigation}
        />
        <View
          style={[
            MainStyle.MainContainerLight,
            {marginBottom: 100, paddingTop: 10},
          ]}>
          <FlatList
            bounces={false}
            data={DATA}
            showsVerticalScrollIndicator="false"
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <WaterMarkView />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
