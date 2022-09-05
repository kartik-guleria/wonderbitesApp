import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  SafeAreaView,
} from 'react-native';
import MainStyles from 'styleSheet/MainStyle';
import WaterMarkView from 'components/WaterMarkView';
import UnderlineView from 'components/underlineView';
import NavigationHeader from 'components/NavigationHeader';
import {useTranslation} from 'react-i18next';

import styles from './style';
import {
  SIZES,
  DelIcons,
} from 'assets/index';

const NotificationViewScreen = props => {
  const {t, i18n} = useTranslation();
  const DATA = [
    {
      id: '1',
      detailDesc: ' this is an offer for you',
      title: 'Friday Sale',
      time: '2min ago',
    },
    {
      id: '2',
      detailDesc: ' this is an offer for you',
      title: 'Friday Sale',
      time: '2min ago',
    },
    {
      id: '3',
      detailDesc: ' this is an offer for you',
      title: 'Friday Sale',
      time: '2min ago',
    },
    {
      id: '4',
      detailDesc: ' this is an offer for you',
      title: 'Friday Sale',
      time: '2min ago',
    },
    {
      id: '5',
      detailDesc: ' this is an offer for you',
      title: 'Friday Sale',
      time: '2min ago',
    },
  ];
  const Item = ({title, detailDesc}) => (
    <View style={{marginLeft: 20, marginRight: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('/images/menuItem.png')}
          style={{
            width: 45,
            height: 45,
            marginRight: 10,
            resizeMode: 'contain',
          }}
        />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '83%',
          }}>
          <Text style={styles.title}>
            {title}
            <Text style={[styles.description, {fontWeight: SIZES.w1}]}>
              {detailDesc}
            </Text>
          </Text>
          <Text style={[styles.description]}> 2min ago </Text>
        </View>
        <View
          style={{marginRight: 10, resizeMode: 'contain', alignSelf: 'center'}}>
          {DelIcons.blackDot}
          {DelIcons.blackDot}
          {DelIcons.blackDot}
        </View>
      </View>
      <UnderlineView />
    </View>
  );
  const renderItem = ({item}) => (
    <Item title={item.title} detailDesc={item.detailDesc} />
  );
  return (
    <SafeAreaView style={MainStyles.safeAreaContainerLight}>
      <View style={MainStyles.mainBody}>
        <StatusBar barStyle="dark-content" />
        <NavigationHeader
          title={t('delivery:notifications')}
          displayLine={true}
          navigation={props.navigation}
        />
        <View style={[MainStyles.MainContainerLight, {marginBottom: 100}]}>
          <FlatList
            bounces={false}
            data={DATA}
            showsVerticalScrollIndicator="false"
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>

        {/* <View>
        <Image
          source={require('../../images/notification.png')}
          style={styles.image}
        />
        <Text style={[MainStyles.descText, {marginTop: 80, fontSize: SIZES.h3}]}>
          No new notifications.
        </Text>
      </View>*/}
        <WaterMarkView />
      </View>
    </SafeAreaView>
  );
};

export default NotificationViewScreen;
