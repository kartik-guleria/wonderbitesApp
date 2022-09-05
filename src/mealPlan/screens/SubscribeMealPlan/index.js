import {COLORS} from 'assets/';
import {MealPlanIcons} from 'assets/';
import {FONTS} from 'assets/';
import {SIZES} from 'assets/';
import MyButton from 'components/MyButton';
import NavigationHeaderCross from 'components/NavigationHeaderCross';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import {useTranslation} from 'react-i18next';

const SubscribeMealPlan = props => {
  const {t, i18n} = useTranslation();
  const PROPERTIES = [
    {
      id: 1,
      icon: MealPlanIcons.subscribeIcon1,
      title: t('mealPlan:curatedByNutritionists'),
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      icon: MealPlanIcons.subscribeIcon2,
      title: t('mealPlan:OpportunityPersonalizeMeals'),
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      icon: MealPlanIcons.subscribeIcon3,
      title: t('mealPlan:simplifiedWay'),
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];
  const PLANS = [
    {id: 1, days: '7 ', price: '35, 99 US$', time: t('mealPlan:annually')},
    {id: 2, days: '3 ', price: '55, 99 US$', time: t('mealPlan:monthly')},
    {id: 3, days: '1 ', price: '45, 99 US$', time: t('mealPlan:weekly')},
  ];
  const renderOptions = itemData => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 38,
          flex: 1,
        }}>
        <View style={{alignSelf: 'center'}}>{itemData.item.icon}</View>
        <View style={{marginLeft: 19}}>
          <Text
            style={{
              fontFamily: FONTS.normal,
              fontSize: SIZES.h2,
              fontWeight: SIZES.w5,
              lineHeight: SIZES.l3,
              marginTop: 3,
              marginBottom: 4,
            }}>
            {itemData.item.title}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.normal,
              fontSize: SIZES.h,
              fontWeight: SIZES.w3,
              lineHeight: SIZES.l2,
            }}>
            {itemData.item.subtitle}
          </Text>
        </View>
      </View>
    );
  };
  const renderPlans = plansData => {
    return (
      <TouchableOpacity
        style={{
          height: 89,
          width: 107,
          borderColor: COLORS.red,
          borderWidth: 2,
          borderRadius: 12,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: FONTS.normal,
            fontSize: 10,
            fontWeight: SIZES.w3,
            lineHeight: SIZES.l3,
          }}>
          {plansData.item.days}
          {t('mealPlan:daysFree')}
        </Text>
        <Text
          style={{
            marginTop: 2,
            fontFamily: FONTS.normal,
            fontSize: SIZES.h1,
            fontWeight: SIZES.w7,
            lineHeight: SIZES.l5,
          }}>
          {plansData.item.price}
        </Text>
        <Text
          style={{
            marginTop: 6,
            fontFamily: FONTS.normal,
            fontSize: SIZES.h,
            fontWeight: SIZES.w5,
            lineHeight: SIZES.l3,
          }}>
          {plansData.item.time}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <ScrollView bounces={false}>
        <View style={{marginRight: 16}}>
          <NavigationHeaderCross
            navigation={props.navigation}
            btnName={t('mealPlan:restore')}
            displayLineSkip={true}
            onSelect={() => /*props.navigation.navigate(')*/ null}
          />
        </View>
        <View style={{marginRight: 16, marginLeft: 16, marginBottom: 25}}>
          <View>
            <Text
              style={{
                flexDirection: 'row',
                fontSize: SIZES.h6,
                fontWeight: SIZES.w7,
                fontFamily: FONTS.normal,
                lineHeight: 38,
              }}>
              {t('mealPlan:try')}
              <Text
                style={{
                  color: COLORS.red,
                  fontSize: 35,
                  fontWeight: SIZES.w7,
                  fontFamily: FONTS.normal,
                  lineHeight: 30,
                }}>
                {' '}
                {t('mealPlan:mealPlan')}
              </Text>
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: SIZES.h1,
                fontWeight: SIZES.w3,
                fontFamily: FONTS.normal,
                lineHeight: 12,
              }}>
              {t('mealPlan:subscribeMealPlanning')}
            </Text>
          </View>
          <View style={{marginTop: 27}}>
            <FlatList
              bounces={false}
              data={PROPERTIES}
              showsVerticalScrollIndicator="false"
              renderItem={renderOptions}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={{marginTop: 0, marginBottom: -10}}>
            <FlatList
              horizontal
              contentContainerStyle={{justifyContent: 'space-between', flex: 1}}
              bounces={false}
              data={PLANS}
              showsVerticalScrollIndicator="false"
              renderItem={renderPlans}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
        <MyButton title={t('mealPlan:subscribe')} />
        <View
          style={{
            shadowColor: COLORS.titleBlack,
            shadowOpacity: 0.24,
            shadowOffset: {width: 0, height: 0},
            shadowRadius: 3,
          }}>
          <TouchableOpacity
            style={styles.buttonStyleRed}
            onPress={() => props.navigation.navigate('ScheduleCall')}>
            <View>
              <Text style={styles.text_color}>
                {' '}
                {t('mealPlan:scheduleCall')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 10,
            fontWeight: SIZES.w3,
            fontFamily: FONTS.normal,
            lineHeight: 10,
            marginLeft: 16,
            marginRight: 16,
            textAlign: 'left',
          }}>
          {t('mealPlan:subscriptionWillRenew')}{' '}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontWeight: SIZES.w5,
            fontFamily: FONTS.normal,
            lineHeight: 9,
            margin: 16,
            textAlign: 'center',
          }}>
          {t('mealPlan:termsServicePrivacyPolicy')}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubscribeMealPlan;

const styles = StyleSheet.create({
  buttonStyleRed: {
    backgroundColor: 'transparent',
    height: SIZES.btnHeight,
    alignItems: 'center',
    borderRadius: SIZES.r1,
    borderColor: COLORS.red,
    borderWidth: 1,
    marginLeft: SIZES.mlr1,
    marginRight: SIZES.mlr1,
    marginBottom: 25,
    justifyContent: 'center',
    color: COLORS.white,
    fontSize: SIZES.h3,
    padding: 10,
    marginTop: -10,
    fontWeight: SIZES.w5,
    fontFamily: FONTS.normal,
  },
  text_color: {
    marginTop: 0,
    fontSize: SIZES.h4,
    fontWeight: SIZES.w5,
    fontFamily: FONTS.normal,
    lineHeight: 17,
  },
});
