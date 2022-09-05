import React from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import {FONTS, COLORS, SIZES} from 'assets/';
import WaterMarkView from 'components/WaterMarkView';
import NextArrowButton from 'components/NextArrowButton';
import { useTranslation } from 'react-i18next';

const CreatingMealPlan = props => {
  const { t, i18n } = useTranslation();
  const onArrowClick = () => {
    props.navigation.navigate('MealPlanReady');
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{marginTop: 60, marginLeft: 16, marginRight: 16}}>
          <Text
            style={{
              marginTop: 51,
              textAlign: 'center',
              fontFamily: FONTS.normal,
              fontSize: SIZES.h5,
              fontWeight: SIZES.w5,
              lineHeight: SIZES.l6,
            }}>
           {t('mealPlan:weCreatingMealPlan')}
          </Text>
        </View>
        <Image
          style={{
            height: 266,
            width: 266,
            alignSelf: 'center',
            marginBottom: 150,
          }}
          source={require('../../../images/creatingMeal.png')}
        />
        <View>
          <WaterMarkView />
        </View>

        <View style={{marginBottom: 21}}>
          <NextArrowButton onSelect={() => onArrowClick()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreatingMealPlan;
