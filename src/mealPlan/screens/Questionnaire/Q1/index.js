import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {SIZES, COLORS, FONTS} from 'assets/';
import NavigationHeaderQuestionnaire from 'components/NavigationHeaderQuestionnaire';
import MainStyle from 'styleSheet/MainStyle';
import { useTranslation } from 'react-i18next';
const Q1 = props => {
  const { t, i18n } = useTranslation();
  const GOALOPTIONS = [
    {id: 1, heading: t('mealPlan:maintainWeight'), subHeading: t('mealPlan:toneUp')},
    {id: 2, heading: t('mealPlan:gainWeight'), subHeading: t('mealPlan:buildMass')},
    {id: 3, heading: t('mealPlan:loseWeight'), subHeading: t('mealPlan:getMotivated')},
  ];
  const renderOptions = itemData => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Q2')}
        style={{
          height: 90,
          borderRadius: 5,
          borderWidth: 1,
          justifyContent: 'center',
          marginBottom: 20,
          borderColor: 'rgba(255, 255, 255, 1)',
          shadowColor: '#F4F2F2',
          shadowOffset: {width: 0,height: 2},
          shadowOpacity: 0.8,
          shadowRadius: 0,
          // backgroundColor:COLORS.white

        }}>
        <View style={{marginLeft: 12}}>
          <Text
            style={{
              fontFamily: FONTS.normal,
              fontSize: SIZES.h3,
              fontWeight: SIZES.w5,
              lineHeight: SIZES.l4,
            }}>
            {itemData.item.heading}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.normal,
              fontSize: SIZES.h2,
              fontWeight: SIZES.w5,
              lineHeight: SIZES.l3,
              color: '#626262',
              marginTop: 8,
            }}>
            {itemData.item.subHeading}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeaderQuestionnaire
        navigation={props.navigation}
        title="1 / 12"
        redWidth="0%"
        greyWidth="100%"/>
      <Text
        style={{
          marginTop: 51,
          textAlign: 'center',
          fontFamily: FONTS.normal,
          fontSize: SIZES.h5,
          fontWeight: SIZES.w5,
          lineHeight: SIZES.l6,
        }}>
       {t('mealPlan:whatMainGoal')}
      </Text>
      <View style={{marginLeft: 16, marginRight: 16, marginTop: 24}}>
        <FlatList
          bounces={false}
          data={GOALOPTIONS}
          showsVerticalScrollIndicator="false"
          renderItem={renderOptions}
          keyExtractor={item => item.id}
        />
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default Q1;
