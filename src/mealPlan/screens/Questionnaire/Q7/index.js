import {SIZES} from 'assets/';
import {FONTS} from 'assets/';
import NavigationHeaderQuestionnaire from 'components/NavigationHeaderQuestionnaire';
import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import NextArrowButton from 'components/NextArrowButton';
import UnderlineView from 'components/underlineView';
import RadioButton from 'components/RadioButton';
import MainStyle from 'styleSheet/MainStyle';
import {useTranslation} from 'react-i18next';
const Q7 = props => {
  const {t, i18n} = useTranslation();
  const ACTIVENESS = [
    {
      id: 1,
      title: t('mealPlan:sedentary'),
      subTitle: t('mealPlan:dontExcercise'),
    },
    {
      id: 2,
      title: t('mealPlan:lightActive'),
      subTitle: t('mealPlan:keeyBodyMoving'),
    },
    {
      id: 3,
      title: t('mealPlan:moderatlyActive'),
      subTitle: t('mealPlan:keepMovingDay'),
    },
    {
      id: 4,
      title: t('mealPlan:veryActive'),
      subTitle: t('mealPlan:movingAlmostAllDay'),
    },
    {
      id: 5,
      title: t('mealPlan:extraActive'),
      subTitle: t('mealPlan:neverStop'),
    },
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
            {' '}
            {itemData.item.title}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.normal,
              fontSize: SIZES.h,
              fontWeight: SIZES.w3,
              lineHeight: SIZES.l2,
              marginBottom: 8,
            }}>
            {' '}
            {itemData.item.subTitle}
          </Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <RadioButton />
        </View>
      </View>
    );
  };
  const onArrowClick = () => {
    props.navigation.navigate('Q8');
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeaderQuestionnaire
        navigation={props.navigation}
        title="7 / 12"
        redWidth="54.54%"
        greyWidth="45.46%"
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
            {t('mealPlan:howActive')}
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
            {t('mealPlan:weAdapt')}
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

        <View style={{marginBottom: 30}}>
          <NextArrowButton onSelect={() => onArrowClick()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Q7;
