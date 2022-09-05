import React from 'react';
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import UnderlineView from 'components/underlineView';
import WaterMarkView from 'components/WaterMarkView';
import NavigationHeader from 'components/NavigationHeader';
import { useTranslation } from 'react-i18next';
import { SIZES, ComIcons } from 'assets/index';

const SelectLangScreen = props => {
  const { i18n, t } = useTranslation();
  const selectedLanguageCode = i18n.language;
  const DATA = [
    {
      id: '1',
      title: t('common:English'),
      code: 'en',
    },
    {
      id: '2',
      title: t('common:albanian'),
      code: 'al',
    },
  ];

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  const Item = ({ item: { title, code } }) => (
    <TouchableOpacity
      onPress={() => {
        i18n.changeLanguage(code);
      }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text
          style={[
            MainStyle.descText,
            {
              textAlign: 'left',
              fontWeight: SIZES.w5,
              margin: 10,
              color: selectedLanguageCode === code && 'red',
              width: '50%'
            },
          ]}>
          {title}
        </Text>
        <View style={{ marginRight: 30, alignSelf: 'center' }}>
          {selectedLanguageCode === code ? ComIcons.redTickLang : null}
        </View>
      </View>
      <UnderlineView />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <View style={MainStyle.mainBody}>
        <StatusBar barStyle="dark-content"/>
        <NavigationHeader
          title={t('common:Language')}
          navigation={props.navigation}
        />
        <View
          style={[
            MainStyle.MainContainerLight,
            {
              marginBottom: 100,
              marginLeft: 15,
              marginRight: 15,
            },
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

export default SelectLangScreen;
