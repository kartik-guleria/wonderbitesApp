import {FONTS, COLORS, SIZES,MealPlanIcons} from 'assets/';
import NavigationHeaderQuestionnaire from 'components/NavigationHeaderQuestionnaire';
import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import NextArrowButton from 'components/NextArrowButton';
import MainStyle from 'styleSheet/MainStyle';
import { useTranslation } from 'react-i18next';

const Q6 = props => {
  const { t, i18n } = useTranslation();
  const [selectedPoint, setSelectedPoint] = useState('1-2');
  const onArrowClick = () => {
    if (selectedPoint === '') {
      null;
    } else {
      props.navigation.navigate('Q7');
    }
  };
  return (
    <SafeAreaView
      style={MainStyle.safeAreaContainerLight}>
      <NavigationHeaderQuestionnaire
        navigation={props.navigation}
        title="6 / 12"
        redWidth="45.45%"
        greyWidth="54.55%"
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
          {t('mealPlan:howOftenWork')}
          </Text>
          <Text
            style={{
              marginTop: 20,
              textAlign: 'center',
              fontFamily: FONTS.normal,
              fontSize: SIZES.h2,
              fontWeight: SIZES.w3,
              lineHeight: SIZES.l3,
            }}>
            {t('mealPlan:onAverage')} {selectedPoint} {t('mealPlan:timesWeek')} 
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginLeft: 33,
              marginRight: 33,
              backgroundColor: 'black',
              height: 3,
              marginTop: 84,
              justifyContent: 'space-between',
            }}>
           {selectedPoint === '1-2' ? <View style={{marginTop: -15,marginLeft:-9}}>{MealPlanIcons.ellipseWhite}</View> : <TouchableOpacity onPress={() => setSelectedPoint('1-2')} style={{marginTop: -3,width:20,height:20,}}>{MealPlanIcons.ellipseBlack}</TouchableOpacity>}
           {selectedPoint === '2-3' ? <View style={{marginTop: -15,marginLeft:-9}}>{MealPlanIcons.ellipseWhite}</View> : <TouchableOpacity onPress={() => setSelectedPoint('2-3')} style={{marginTop: -3,width:20,height:20,}}>{MealPlanIcons.ellipseBlack}</TouchableOpacity>}
           {selectedPoint === '4-5' ? <View style={{marginTop: -15,marginLeft:-9}}>{MealPlanIcons.ellipseWhite}</View> : <TouchableOpacity onPress={() => setSelectedPoint('4-5')} style={{marginTop: -3,width:20,height:20,}}>{MealPlanIcons.ellipseBlack}</TouchableOpacity>}
           {selectedPoint === '5-6' ? <View style={{marginTop: -15,marginLeft:-9}}>{MealPlanIcons.ellipseWhite}</View> : <TouchableOpacity onPress={() => setSelectedPoint('5-6')} style={{marginTop: -3,width:20,height:20,}}>{MealPlanIcons.ellipseBlack}</TouchableOpacity>}
           {selectedPoint === '6-7' ? <View style={{marginTop: -15,marginRight:-9}}>{MealPlanIcons.ellipseWhite}</View> : <TouchableOpacity onPress={() => setSelectedPoint('6-7')}  style={{marginTop: -3,marginRight:-12,width:20,height:20,}}>{MealPlanIcons.ellipseBlack}</TouchableOpacity>}
          </View>
          <View style = {{marginTop:30,marginLeft:32,marginRight:32,flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{
              fontFamily: FONTS.normal,
              fontSize: SIZES.h2,
              fontWeight: SIZES.w3,
              lineHeight: SIZES.l3,
            }}>
            {t('mealPlan:beginner')} 
            </Text>
            <Text style={{
              fontFamily: FONTS.normal,
              fontSize: SIZES.h2,
              fontWeight: SIZES.w3,
              lineHeight: SIZES.l3,
            }}>
            {t('mealPlan:advanced')}
            </Text>
          </View>
        </View>

        <View style={{marginBottom: 21}}>
          <NextArrowButton onSelect={() => onArrowClick()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Q6;
