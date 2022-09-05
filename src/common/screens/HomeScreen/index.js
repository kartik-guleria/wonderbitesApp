import React , {useEffect} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import ServiceGridTile from 'components/ServiceGridTile';
import {SERVICES} from 'data/dummy-data';
import MainStyle from 'styleSheet/MainStyle';
import HeaderRight from 'components/HeaderRight';
import { useSelector } from 'react-redux';

const HomeScreen = props => {
  const loginData = useSelector(state => state.loginReducer.loginData);
  const checkLoginData = () =>{
    if (loginData) {
      null
    }
    else{
      props.navigation.pop();
    }
    };
  const renderServiceGridItem = itemData => {
    return (
      <ServiceGridTile
        title={itemData.item.title}
        menuImage={itemData.item.icon}
        menuImageInActive={itemData.item.iconInActive}
        menuIndex={itemData.item.id}
        onSelect={() => {
          if (itemData.item.id == '1') {
            props.navigation.navigate('Main', {
              serviceId: itemData.item.id,
            });
          } 
          else if (itemData.item.id == '3') {
            props.navigation.navigate('WelcomeMealKit', {
              serviceId: itemData.item.id,
            });
          }
          else if (itemData.item.id == '4') {
            props.navigation.navigate('MealPlanTabs', {
              serviceId: itemData.item.id,
            });
          }
        }}
      />
    );
  };

  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <View>
        <HeaderRight navigation={props.navigation}  onPressWonderbites = {() => checkLoginData()} />
        <View style={MainStyle.wrapperView}>
          <FlatList
            bounces={false}
            numColumns={2}
            data={SERVICES}
            renderItem={renderServiceGridItem}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
