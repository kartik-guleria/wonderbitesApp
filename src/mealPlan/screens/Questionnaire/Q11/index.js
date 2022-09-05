import React from 'react';
import {SIZES, FONTS} from 'assets/';
import NavigationHeaderQuestionnaire from 'components/NavigationHeaderQuestionnaire';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import UnderlineView from 'components/underlineView';
import NextArrowButton from 'components/NextArrowButton';
import {Calendar} from 'react-native-calendars';
import { useTranslation } from 'react-i18next';
import MainStyle from 'styleSheet/MainStyle';

const Q11 = props => {
  const { t, i18n } = useTranslation();
  const onArrowClick = () => {
    props.navigation.navigate('Q12');
  };
  return (
    <SafeAreaView
      style= {MainStyle.safeAreaContainerLight}>
      <NavigationHeaderQuestionnaire
        navigation={props.navigation}
        title="11 / 12"
        redWidth="90.9%"
        greyWidth="9.1%"
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
            {t('mealPlan:whenToStartMealPlan')}
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
             {t('mealPlan:weDeliverOnMonday')}
          </Text>
          <UnderlineView />
        </View>
        <Calendar
        markedDates={{
          '2022-04-27': {selected: true, marked: false, selectedColor: 'red'}
        }}
        // Initially visible month. Default = now
        current={'2022-04-04'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2012-05-10'}
        // Maximum dte that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2050-05-30'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={day => {
          console.warn('selected day', day);
          selectedColor='red'
        }}
        day={{color:'red'}}
/>
        <View style={{marginBottom: 21}}>
          <NextArrowButton onSelect={() => onArrowClick()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Q11;
