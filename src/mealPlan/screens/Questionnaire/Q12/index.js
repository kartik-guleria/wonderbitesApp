import {FONTS, COLORS, SIZES} from 'assets/';
import NavigationHeaderQuestionnaire from 'components/NavigationHeaderQuestionnaire';
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import UnderlineView from 'components/underlineView';
import RadioButton from 'components/RadioButton';
import MyButton from 'components/MyButton';
import MainStyle from 'styleSheet/MainStyle';
import {useTranslation} from 'react-i18next';

const Q10 = props => {
  const {t, i18n} = useTranslation();
  const [selectedWeek, setSelectedWeek] = useState('1');
  const DATA = [
    {id: 1, title: '5'},
    {id: 2, title: '6'},
  ];
  const renderOptions = itemData => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 40,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              fontFamily: FONTS.normal,
              fontSize: SIZES.h2,
              fontWeight: SIZES.w5,
              lineHeight: SIZES.l3,
            }}>
            {itemData.item.title} {t('mealPlan:daysWeek')}
          </Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <RadioButton />
        </View>
      </View>
    );
  };
  const onCreateClick = () => {
    props.navigation.navigate('CreatingMealPlan');
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeaderQuestionnaire
        navigation={props.navigation}
        title="12 / 12"
        redWidth="100%"
        greyWidth="0%"
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
            {t('mealPlan:howManyDays')}
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
              marginLeft: 54,
              marginRight: 54,
            }}>
            {t('mealPlan:chooseOptionDays')}
          </Text>
          <UnderlineView />
          <View style={{marginLeft: 16, marginRight: 16, marginTop: 25}}>
            <FlatList
              bounces={false}
              data={DATA}
              showsVerticalScrollIndicator="false"
              renderItem={renderOptions}
              keyExtractor={item => item.id}
            />
          </View>

          <View
            style={{
              height: 40,
              borderColor: COLORS.grey,
              borderWidth: 1,
              borderRadius: 16,
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={() => setSelectedWeek('1')}>
              <Text
                style={{
                  color: selectedWeek === '1' ? COLORS.black : COLORS.grey,
                  alignSelf: 'flex-end',
                  fontSize: SIZES.h,
                  fontFamily: FONTS.normal,
                  fontWeight: SIZES.w5,
                  lineHeight: SIZES.l7,
                  padding: 12,
                }}>
                1 {t('mealPlan:weeks')}
              </Text>
            </TouchableOpacity>

            <View style={{width: 1, backgroundColor: COLORS.grey}}></View>

            <TouchableOpacity onPress={() => setSelectedWeek('2')}>
              <Text
                style={{
                  color: selectedWeek === '2' ? COLORS.black : COLORS.grey,
                  alignSelf: 'flex-end',
                  fontSize: SIZES.h,
                  fontFamily: FONTS.normal,
                  fontWeight: SIZES.w5,
                  lineHeight: SIZES.l7,
                  padding: 12,
                }}>
                2 {t('mealPlan:weeks')}
              </Text>
            </TouchableOpacity>
            <View style={{width: 1, backgroundColor: COLORS.grey}}></View>

            <TouchableOpacity onPress={() => setSelectedWeek('3')}>
              <Text
                style={{
                  color: selectedWeek === '3' ? COLORS.black : COLORS.grey,
                  alignSelf: 'flex-end',
                  fontSize: SIZES.h,
                  fontFamily: FONTS.normal,
                  fontWeight: SIZES.w5,
                  lineHeight: SIZES.l7,
                  padding: 12,
                }}>
                3 {t('mealPlan:weeks')}
              </Text>
            </TouchableOpacity>
            <View style={{width: 1, backgroundColor: COLORS.grey}}></View>

            <TouchableOpacity onPress={() => setSelectedWeek('4')}>
              <Text
                style={{
                  color: selectedWeek === '4' ? COLORS.black : COLORS.grey,
                  alignSelf: 'flex-end',
                  fontSize: SIZES.h,
                  fontFamily: FONTS.normal,
                  fontWeight: SIZES.w5,
                  lineHeight: SIZES.l7,
                  padding: 12,
                }}>
                4 {t('mealPlan:weeks')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginBottom: 10}}>
          <MyButton title={t('mealPlan:createMyPlan')} onSelect={() => onCreateClick()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Q10;
