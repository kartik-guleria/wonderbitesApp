import {FONTS, MealPlanIcons, SIZES, COLORS} from 'assets/';
import NavigationHeaderQuestionnaire from 'components/NavigationHeaderQuestionnaire';
import NextArrowButton from 'components/NextArrowButton';
import React, {useState} from 'react';
import {View, Text, SafeAreaView,TextInput} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import { useTranslation } from 'react-i18next';

const Q3 = props => {
  const { t, i18n } = useTranslation();
  const onArrowClick = () => {
    if (age === '') {
      null
    } else {
      props.navigation.navigate('Q4');
    }
  }
  const [age, setAge] = useState('');
  return (
    <SafeAreaView
      style={MainStyle.safeAreaContainerLight}>
      <NavigationHeaderQuestionnaire
        navigation={props.navigation}
        title="3 / 12"
        redWidth="18.18%"
        greyWidth="81.82%"
      />
      <View style={{flex:1,justifyContent: 'space-between'}}>
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
            {t('mealPlan:howOld')}
          </Text>

          <TextInput
            style={{
              marginTop: 38,
              textAlign: 'center',
              fontFamily: FONTS.normal,
              fontSize: 60,
              fontWeight: SIZES.w6,
              lineHeight: 63.72,
            }}
            selectionColor= {COLORS.darkGrey}
            placeholder="0"
            maxLength={3}
            keyboardType="numeric"
            onChangeText={text => setAge(text)}
          />
        </View>
        <View style={{marginBottom: 21}}>
          <NextArrowButton condition = {age === ''} onSelect = {()=> onArrowClick()}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Q3;
