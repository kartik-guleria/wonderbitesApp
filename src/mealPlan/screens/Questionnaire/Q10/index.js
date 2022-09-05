import {FONTS, SIZES} from 'assets/';
import NavigationHeaderQuestionnaire from 'components/NavigationHeaderQuestionnaire';
import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import NextArrowButton from 'components/NextArrowButton';
import UnderlineView from 'components/underlineView';
import RadioButton from 'components/RadioButton';
import MainStyle from 'styleSheet/MainStyle';
import {useTranslation} from 'react-i18next';
const Q10 = props => {
  const {t, i18n} = useTranslation();
  const ACTIVENESS = [
    {id: 1, title: t('mealPlan:lunch')},
    {id: 2, title: t('mealPlan:dinner')},
    {id: 3, title: t('mealPlan:lunchDinnerSnacks')},
  ];
  const renderOptions = itemData => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 40,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              fontFamily: FONTS.normal,
              fontSize: SIZES.h2,
              fontWeight: SIZES.w5,
              lineHeight: SIZES.l3,
              marginBottom: 8,
            }}>
            1 {t('mealPlan:time')} / {itemData.item.title}
          </Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <RadioButton />
        </View>
      </View>
    );
  };
  const onArrowClick = () => {
    props.navigation.navigate('Q11');
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeaderQuestionnaire
        navigation={props.navigation}
        title="10 / 12"
        redWidth="81.81%"
        greyWidth="18.19%"
      />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <Text
            style={{
              marginTop: 51,
              textAlign: 'center',
              fontFamily: FONTS.normal,
              fontSize: SIZES.h5,
              fontWeight: SIZES.w5,
              lineHeight: SIZES.l6,
            }}>
            {t('mealPlan:howManyMeals')}
          </Text>
          <Text
            style={{
              marginTop: 20,
              textAlign: 'center',
              fontFamily: FONTS.normal,
              fontSize: SIZES.h2,
              fontWeight: SIZES.w3,
              lineHeight: SIZES.l3,
              marginBottom: 20,
            }}>
            {t('mealPlan:weWillAdjustCaloric')}
          </Text>
          <UnderlineView />
          <View style={{marginLeft: 16, marginRight: 16, marginTop: 25}}>
            <FlatList
              bounces={false}
              data={ACTIVENESS}
              showsVerticalScrollIndicator="false"
              renderItem={renderOptions}
              keyExtractor={item => item.id}
            />
          </View>
        </View>

        <View style={{marginBottom: 21}}>
          <NextArrowButton onSelect={() => onArrowClick()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Q10;
