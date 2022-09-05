import React from 'react';
import { View, SafeAreaView, Text, StatusBar } from 'react-native';
import MainStyles from 'styleSheet/MainStyle';
import WaterMarkView from 'components/WaterMarkView';
import NavigationHeader from 'components/NavigationHeader';
import { useTranslation } from 'react-i18next';
import { COLORS } from 'assets/index';

const ChangeEmailScreen = props => {
  const { t, i18n } = useTranslation();
  return (
    <SafeAreaView style={MainStyles.safeAreaContainerLight}>
       <StatusBar barStyle="dark-content" />
        <NavigationHeader title={t('common:Settings')} navigation={props.navigation} />
        <View style={MainStyles.mainBody}>
        <View style={{ margin: 28 }}>
          <Text style={[MainStyles.descTextLight, { textAlign: 'left' }]}>
            {t('common:ToChange')}
          </Text>
          <Text
            style={[
              MainStyles.descTextLight,
              { color: COLORS.red, textAlign: 'left' },
            ]}>
            https://wonderbites.app/
          </Text>
        </View>
        </View>
        <WaterMarkView />
    </SafeAreaView>
  );
};

export default ChangeEmailScreen;
