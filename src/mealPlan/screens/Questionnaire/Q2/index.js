import {FONTS,COLORS,SIZES,MealPlanIcons} from 'assets/';
import NavigationHeaderQuestionnaire from 'components/NavigationHeaderQuestionnaire';
import React from 'react';
import {View, Text, SafeAreaView, FlatList,TouchableOpacity} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import {useTranslation} from 'react-i18next'
const Q2 = props => {
  const { t, i18n } = useTranslation();
  const GENDER = [
    {
      image: MealPlanIcons.femaleIcon,
      gender: t('mealPlan:female'),
    },
    {
      image: MealPlanIcons.maleIcon,
      gender: t('mealPlan:male'),
    },
  ];
  const renderOptions = itemData => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Q3')}
        style={{
          height: 110,
          borderRadius: 5,
          borderWidth: 1,
          marginBottom: 20,
          justifyContent:'center',
          borderColor: COLORS.grey,
          width:108,
          flexDirection:'column',
          marginRight:30,
          marginLeft:30
        }}>
        <View style={{alignSelf:'center',alignItems:'center'}}>
          {itemData.item.image}

          <Text
            style={{
              textAlign:'center',
              fontFamily: FONTS.normal,
              fontSize: SIZES.h2,
              fontWeight: SIZES.w5,
              lineHeight: SIZES.l3,
              marginTop: 16,
            }}>
            {itemData.item.gender}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={MainStyle.safeAreaContainerLight}>
      <NavigationHeaderQuestionnaire
        navigation={props.navigation}
        title="2 / 12"
        redWidth="9.09%"
        greyWidth="90.91%"
      />
      <Text
        style={{
          marginTop: 51,
          textAlign: 'center',
          fontFamily: FONTS.normal,
          fontSize: SIZES.h5,
          fontWeight: SIZES.w5,
          lineHeight: SIZES.l6,
        }}>
        {t('mealPlan:whatGender')}
      </Text>
      <View style={{alignSelf:'center', marginTop: 42}}>
        <FlatList
        horizontal
          bounces={false}
          data={GENDER}
          showsVerticalScrollIndicator="false"
          renderItem={renderOptions}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Q2;
