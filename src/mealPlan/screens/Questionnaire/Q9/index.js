import {FONTS,COLORS,SIZES} from 'assets/';
import NavigationHeaderQuestionnaire from 'components/NavigationHeaderQuestionnaire';
import React, { useState } from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import NextArrowButton from 'components/NextArrowButton';
import UnderlineView from 'components/underlineView';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MainStyle from 'styleSheet/MainStyle';
import { useTranslation } from 'react-i18next';
const Q9 = props => {
  const { t, i18n } = useTranslation();
  const [selectedItem, setSelectedItem ] = useState([]);
  const ITEMS = [
    {id: 1, title: 'AVOCADO'},
    {id: 2, title: 'BEEF'},
    {id: 3, title: 'BREAD'},
    {id: 4, title: 'CARROTS'},
    {id: 5, title: 'CAULIFLOWER'},
    {id: 6, title: 'EGGS'},
    {id: 7, title: 'LAMB'},
    {id: 8, title: 'MUSHROOMS'},
    {id: 9, title: 'ONION'},
    {id: 10, title: 'POTATO'},
    {id: 11, title: 'BELL PEPPERS'},
    {id: 12, title: 'SHRIMP'},
  ];
  const onSelectingItem = itemData => {
setSelectedItem(itemData.item.id);
  };
  const renderOptions = itemData => {
    return (
      <TouchableOpacity onPress={() => onSelectingItem(itemData)}
        style={{
          borderRadius: 18,
          height: 31,
          borderWidth: 1,
          borderColor:  itemData.item.id === selectedItem  ? COLORS.red : COLORS.darkGrey,
          alignContent: 'center',
          justifyContent: 'center',
          marginRight: 16,
          marginBottom: 16,
        }}>
        <Text
          style={{
            marginLeft: 16,
            marginRight: 16,
            marginTop: 0,
            textAlign: 'center',
            marginBottom: 0,
            fontFamily: FONTS.normal,
            flexDirection: 'row',
            fontSize: SIZES.h,
            fontWeight: SIZES.w5,
            color: itemData.item.id === selectedItem  ? COLORS.red : COLORS.black
          }}>
          {itemData.item.title}
        </Text>
     {itemData.item.id === selectedItem ?  <View style = {{height:1,flex:1, right:16,left:16,backgroundColor:COLORS.red,position:'absolute'}}></View> : null }
       
      </TouchableOpacity>
    );
  };
  const onArrowClick = () => {
    props.navigation.navigate('Q10');
  };
  return (
    <SafeAreaView
      style={MainStyle.safeAreaContainerLight}>
      <NavigationHeaderQuestionnaire
        navigation={props.navigation}
        title="9 / 12"
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
           {t('mealPlan:foodYouDislike')}
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
              marginLeft: 16,
              marginRight: 16,
            }}>
             {t('mealPlan:crossIngredients')}
          </Text>
          <UnderlineView />
          <View style={{marginTop: 25}}>
            <FlatList
              bounces={false}
              data={ITEMS}
              numColumns={3}
              showsVerticalScrollIndicator="false"
              renderItem={renderOptions}
              keyExtractor={item => item.id}
              contentContainerStyle={{alignSelf:'center'}}
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

export default Q9;
