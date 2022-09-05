import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import MainStyle from 'styleSheet/MainStyle';
import NavigationHeader from 'components/NavigationHeader';
import WaterMarkView from 'components/WaterMarkView';
import UnderlineView from 'components/underlineView';
import API from 'constants/api';
import { SIZES, ComIcons } from 'assets/index';
import { useTranslation } from 'react-i18next';
const AccountSettingScreen = props => {
  const { t, i18n } = useTranslation();
  const DATA = [
    { 
      id: '1',
      title: t('common:changeEmail'),
      screen: API.SETTINGS,
    },
    {
      id: '2',
      title: t('common:deleteAccount'),
      screen: API.SETTINGS,
    },
  ];
  const Item = ({title}) => (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => {
            // Pass and merge params back to home screen
            props.navigation.navigate({
              name: 'AboutUs',
              params: {
                paramKey: title,
                pageUrl: API.SETTINGS
              },
            });
          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={[
                MainStyle.descText,
                {
                  textAlign: 'left',
                  fontWeight: SIZES.w5,
                  padding: 7,
                  width: '90%',
                },
              ]}>
              {title}
            </Text>
            <View style={{alignSelf: 'center' }}>
              {ComIcons.arrowRight}
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <UnderlineView />
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (

    <SafeAreaView style = {MainStyle.safeAreaContainerLight}>
      <StatusBar barStyle="dark-content" />
      <NavigationHeader
        title={t('common:AccountSettings')}
        navigation={props.navigation}
      />
      <View style={MainStyle.mainBody}>
        <View
          style={[
            MainStyle.MainContainerLight,
            { marginLeft: SIZES.mlr1, marginRight: SIZES.mlr1, marginTop: 5 },
          ]}>
          <FlatList
            bounces={false}
            data={DATA}
            showsVerticalScrollIndicator="false"
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      <WaterMarkView />
    </SafeAreaView>
    



  );
};

export default AccountSettingScreen;
