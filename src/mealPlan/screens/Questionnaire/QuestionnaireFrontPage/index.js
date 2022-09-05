import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import NavigationHeaderCross from 'components/NavigationHeaderCross';
import {SIZES, FONTS} from 'assets/';
import MyButton from 'components/MyButton';
import { COLORS } from 'assets/';
import MainStyle from 'styleSheet/MainStyle';
import { useTranslation } from 'react-i18next';
const QuestionnaireFrontPage = props => {
  const { t, i18n } = useTranslation();
  return (
    <SafeAreaView
      style={MainStyle.safeAreaContainerLight}>
      <NavigationHeaderCross navigation={props.navigation} />
      <View style={{justifyContent: 'space-between', flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{height: 255, width: 293}}
            source={require('../../../../images/dishQuestionnaire.png')}
          />
          <Text
            style={{
              fontSize: SIZES.h5,
              fontFamily: FONTS.normal,
              fontWeight: SIZES.w5,
              marginTop: 37,
              lineHeight: 26.4,
            }}>
            {t('mealPlan:makeItWork')}
          </Text>
          <Text
            style={{
              fontSize: SIZES.h1,
              fontFamily: 'Gotham-light',
              fontWeight: SIZES.w3,
              marginTop: 37,
              marginLeft: 17,
              marginRight: 15,
              lineHeight: 17.92,
              textAlign: 'center',
              letterSpacing:0.5
            }}>
            {t('mealPlan:peopleThatFollow')}
          </Text>
        </View>
        <View style={{marginBottom:-10}}>
          <MyButton title={t('mealPlan:getStarted')} onSelect={() => props.navigation.navigate('Q1')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default QuestionnaireFrontPage;
