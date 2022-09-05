import React,{useEffect} from 'react';
import {View, Text, SafeAreaView, StatusBar, Alert} from 'react-native';
import MainStyles from 'styleSheet/MainStyle';
import WaterMarkView from 'components/WaterMarkView';
import NavigationHeader from 'components/NavigationHeader';
import {useTranslation} from 'react-i18next';
import WebPage from 'components/WebPage';
import Loader from 'components/Loader';

const AboutUsScreen = ({
  route: {
    params: {paramKey, pageUrl},
  },
  navigation,
}) => {
  const {t, i18n} = useTranslation();
  return (
    <SafeAreaView style={MainStyles.safeAreaContainerLight}>
      <StatusBar barStyle="dark-content" />
      <NavigationHeader title={paramKey} navigation={navigation} />
      <View style={MainStyles.mainBody}>
        <WebPage source={{uri: pageUrl}} />
      </View>
      <WaterMarkView />
    </SafeAreaView>
  );
};

export default AboutUsScreen;
