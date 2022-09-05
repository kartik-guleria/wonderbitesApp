import { COLORS } from 'assets/';
import { FONTS } from 'assets/';
import { SIZES } from 'assets/';
import MyButton from 'components/MyButton';
import NavigationHeader from 'components/NavigationHeader';
import React from 'react';
import {View, Text, FlatList,Image, SafeAreaView} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';

const SuperLunchMeal = props => {
  const DATA = [{id :1,day: 'Day 1',title:'Super Lunch Meal',description:'Salads, Fruits Bowls, Pitas, Sanwich , peanuts'}, {id:2,day: 'Day 2',title:'Vegetable Soup',description:'Salads, Fruits Bowls, Pitas, Sanwich , peanuts'}, {id:3,day: 'Day 3',title:'Rainbow Quinoa',description:'Salads, Fruits Bowls, Pitas, Sanwich , peanuts'},{id :4,day: 'Day 4',title:'Tomato Chicken',description:'Salads, Fruits Bowls, Pitas, Sanwich , peanuts'},{id :5,day: 'Day 5',title:'Spiced Steaks',description:'Salads, Fruits Bowls, Pitas, Sanwich , peanuts'}];

  const renderItem = itemData => {
    return (
      <View style={{borderBottomWidth:1,borderBottomColor:'#F5F5F5',marginLeft:16,marginRight:14}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',height:143}}>  
        <View style={{justifyContent:'center',width:'50%'}}>
          <Text style = {{fontSize:SIZES.h1,fontFamily:FONTS.normal,fontWeight:SIZES.w5,lineHeight:13.4,color:COLORS.red}}>{itemData.item.day}</Text>
          <Text style = {{marginTop:9,fontSize:SIZES.h2,fontFamily:FONTS.normal,fontWeight:SIZES.w5,lineHeight:15.31}}>{itemData.item.title}</Text>
          <Text style = {{marginTop:11,fontSize:SIZES.h1,fontFamily:FONTS.normal,fontWeight:SIZES.w4,lineHeight:15.78}}>{itemData.item.description}</Text>
        </View>
        <Image style = {{alignSelf:'center',height:103,width:127}} source={require('../../../images/dummyLunch.png')} />
      </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader
        title="Super Lunch Meal"
        navigation={props.navigation}
      />
      <View style = {{flex:1}}>
          <FlatList
                bounces={false}
                keyExtractor={(item, index) => item.id}
                data={DATA}
                showsVerticalScrollIndicator="false"
                renderItem={renderItem}
                />
<MyButton title = "Create Plan" onSelect = {()=> props.navigation.navigate('SubscribeMealKit')}/>
        </View>
    </SafeAreaView>
  );
};

export default SuperLunchMeal;
