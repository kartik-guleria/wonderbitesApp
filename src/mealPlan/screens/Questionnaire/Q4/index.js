import {SIZES} from 'assets/';
import {FONTS} from 'assets/';
import NavigationHeaderQuestionnaire from 'components/NavigationHeaderQuestionnaire';
import React, {useState} from 'react';
import {View, Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import NextArrowButton from 'components/NextArrowButton';
import {COLORS} from 'assets/';
import MainStyle from 'styleSheet/MainStyle';
import { useTranslation } from 'react-i18next';
const Q4 = props => {
  const { t, i18n } = useTranslation();
  const [height, setHeight] = useState('');
  const [selectedMeasurement, setSelectedMeasurement] = useState('2');
  const onArrowClick = () => {
    if (height === '') {
      null;
    } else {
      props.navigation.navigate('Q5');
    }
  };
  return (
    <SafeAreaView
      style={MainStyle.safeAreaContainerLight}>
      <NavigationHeaderQuestionnaire
        navigation={props.navigation}
        title="4 / 12"
        redWidth="27.27%"
        greyWidth="72.73%"
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
           {t('mealPlan:howTall')}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
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
              onChangeText={text => setHeight(text)}
            />
            <Text
              style={{
                alignSelf: 'flex-end',
                fontSize: 15,
                fontFamily: FONTS.normal,
                fontWeight: SIZES.w5,
                lineHeight: SIZES.l7,
                marginBottom:6,
                marginLeft: 16,
              }}>
             {selectedMeasurement === '1' ? "FT" : "CM"}
            </Text>
          </View>
        </View>
        <View style={{
            height: 32,
            borderColor: COLORS.grey,
            borderWidth: 1,
            borderRadius: 16,
            alignSelf: 'center',
            alignItems:'center',
            flexDirection:'row',
            marginTop:-250
          }}>
          
          <TouchableOpacity onPress={() => setSelectedMeasurement('1')}>
          <Text
            style={{
              color : selectedMeasurement === '1' ? COLORS.black : COLORS.grey,
              alignSelf: 'flex-end',
              fontSize: 15,
              fontFamily: FONTS.normal,
              fontWeight: SIZES.w5,
              lineHeight: SIZES.l7,
              alignSelf:'center',
              marginLeft:35,
              marginRight:35}}>
            FT
          </Text>
          </TouchableOpacity>
          
          <View style={{width: 1, alignSelf:'stretch',backgroundColor: COLORS.grey}}></View>
          
          <TouchableOpacity onPress={() => setSelectedMeasurement('2')}>
          <Text
            style={{
              color : selectedMeasurement === '2' ? COLORS.black : COLORS.grey,
              alignSelf: 'flex-end',
              fontSize: 15,
              fontFamily: FONTS.normal,
              fontWeight: SIZES.w5,
              lineHeight: SIZES.l7,
              alignSelf:'center',
              marginLeft:35,
              marginRight:35,
            }}>
            CM
          </Text>
          </TouchableOpacity>
       
        </View>

        <View style={{marginBottom: 21}}>
          <NextArrowButton onSelect={() => onArrowClick()} condition = {height === ''} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Q4;
