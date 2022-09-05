import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StatusBar,
  Linking,
  SafeAreaView,
} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import UnderlineView from 'components/underlineView';
import NavigationHeaderCross from 'components/NavigationHeaderCross';
import {useTranslation} from 'react-i18next';
import {ComIcons} from 'assets/index';
import API from 'constants/api';

const SideMenuScreen = props => {
  const {i18n, t} = useTranslation();
  const selectedLanguageCode = i18n.language;
  const DATA = [
    {
      id: 1,
      icon_image: ComIcons.call,
      title: t('common:callUs'),
      screen: '',
      pageUrl: '',
    },
    {
      id: 2,
      icon_image: ComIcons.terms,
      title: t('common:terms'),
      screen: 'AboutUs',
      pageUrl: API.TERMS_AND_CONDITIONS,
    },
    {
      id: 3,
      icon_image: ComIcons.privacyPolicy,
      title: t('common:privacyPolicy'),
      screen: 'AboutUs',
      pageUrl: API.PRIVACY_POLICY,
    },
    {
      id: 4,
      icon_image: ComIcons.content,
      title: t('common:contentPolicy'),
      screen: 'AboutUs',
      pageUrl: API.CONTENT_POLICY,
    },
    {
      id: 5,
      icon_image:
        selectedLanguageCode === 'en'
          ? ComIcons.usaFlag
          : selectedLanguageCode === 'al'
          ? ComIcons.albanianFlag
          : ComIcons.usaFlag,
      title:
        selectedLanguageCode === 'en'
          ? 'English'
          : selectedLanguageCode === 'al'
          ? 'Albanian'
          : selectedLanguageCode === 'fr'
          ? 'French'
          : selectedLanguageCode === 'il'
          ? 'Italian'
          : selectedLanguageCode === 'gr'
          ? 'Greek'
          : selectedLanguageCode === 'ma'
          ? 'Macedonain'
          : null,
      screen: 'SelectLang',
      pageUrl: '',
    },
  ];
  const getFooter = () => {
    return (
      <View style={{marginBottom: 100}}>
        <Text
          style={[
            MainStyle.descText,
            {
              textAlign: 'left',
              fontWeight: '400',
              marginTop: 30,
              marginBottom: 20,
            },
          ]}>
          {t('common:followUs')}
        </Text>
        <View
          style={[
            MainStyle.ChooseType,
            {justifyContent: 'flex-start', marginLeft: -8},
          ]}>
          <TouchableOpacity style={MainStyle.FollowBox} onPress={() => Linking.openURL('http://facebook.com')}>
            {ComIcons.facebookBlank}
          </TouchableOpacity>
          <TouchableOpacity style={MainStyle.FollowBox} onPress={() => Linking.openURL('http://instagram.com')}>
            {ComIcons.instagram}
          </TouchableOpacity>
          <TouchableOpacity style={MainStyle.FollowBox} onPress={() => Linking.openURL('http://tiktok.com')}>
            {ComIcons.tikTok}
          </TouchableOpacity>
          <TouchableOpacity style={MainStyle.FollowBox} onPress={() => Linking.openURL('http://youtube.com')}>
            {ComIcons.youtube}
          </TouchableOpacity>
        </View>
        <UnderlineView />
      </View>
    );
  };
  const getHeader = () => {
    return (
      <View style={{marginTop: 37}}>
        <Text style={[MainStyle.headingDesc, {textAlign: 'left'}]}>
          {t('common:SignIn')}
        </Text>
        <Text style={[MainStyle.headingDesc, {textAlign: 'left'}]}>
          {t('common:ToWB')}
        </Text>
        <TouchableOpacity
          style={[MainStyle.buttonStyle, {width: 140, marginBottom: 15}]}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('SignJoin')}>
          <Text style={[MainStyle.buttonTextStyle, {fontWeight: '700'}]}>
            {t('common:SignInJoin')}
          </Text>
        </TouchableOpacity>
        <UnderlineView />
      </View>
    );
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <StatusBar barStyle="dark-content" />
      <NavigationHeaderCross navigation={props.navigation} />
      <View
        style={{
          marginLeft: 15,
          marginRight: 15,
          marginBottom: 40,
        }}>
        <FlatList
          bounces={false}
          style={{marginTop: -5}}
          data={DATA}
          showsVerticalScrollIndicator="false"
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                MainStyle.descText,
                {textAlign: 'left', marginTop: 5, marginBottom: 5},
              ]}
              onPress={() => {
                item.id === 1
                  ? Linking.openURL('tel:999990000')
                  : props.navigation.navigate({
                      name: item.screen,
                      params: {
                        paramKey: item.title,
                        pageUrl: item.pageUrl,
                      },
                    });
              }}>
              <View style={MainStyle.row}>
                <View
                  style={{
                    marginRight: 16,
                    resizeMode: 'contain',
                    width: '5%',
                  }}>
                  {item.icon_image}
                </View>
                <Text style={[MainStyle.descText, {textAlign: 'left'}]}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          ListHeaderComponent={getHeader}
          ListFooterComponent={getFooter}
        />
      </View>
    </SafeAreaView>
  );
};

export default SideMenuScreen;
