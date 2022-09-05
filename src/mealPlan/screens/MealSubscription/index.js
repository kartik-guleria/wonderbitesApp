import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import MealSubsComp from 'components/MealPlanComp/MealSubsComp';
import MainStyle from 'styleSheet/MainStyle';
import {useTranslation} from 'react-i18next';
import {DelIcons, FONTS, MealKitIcons, MealPlanIcons, SIZES} from 'assets/index';
import {useNavigation} from '@react-navigation/native';
import NavigationHeader from 'components/NavigationHeader';
import DropDownMenu from '../DropDownMenu';
const MealSubscription = ({route}) => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();

  const renderProductGridItem = itemData => {
    // alert(JSON.stringify(catProductData?.products));
    return (
      <MealSubsComp
        title={itemData.item.name}
        shortDesc={itemData.item.description}
        longDesc={itemData.item.description}
        rating={itemData.item.rating}
        price={itemData.item.price}
        image={itemData.item.thumbnail}
        kcal={itemData.item.calories}
        onSelect={() => {
          props.navigation.navigate('MealDetails');
        }}
      />
    );
  };
  const checkLoginData = () => {
    navigation.pop();
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    //   alert('he')
    setModalVisible(true);
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader title="My Subscription" navigation={navigation} />
      <ScrollView>
        <View style={{marginBottom: 50}}>
          <View>
            <View
              style={{
                margin: 15,
                backgroundColor: '#F7F7F7',
                borderRadius: 4,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={[
                    MainStyle.textTitle,
                    {fontWeight: '500', marginLeft: 4},
                  ]}>
                  {' '}
                  Monthly Meal Plan
                </Text>
                <Text
                  style={[
                    MainStyle.descTextLight,
                    {
                      fontSize: 14,
                      textAlign: 'left',
                      marginLeft: 17,
                      marginBottom: 16,
                    },
                  ]}>
                  Monthly <Text style={{fontSize: 6}}> ⬤ </Text>
                  <Text> 5 Days a week </Text>
                  <Text style={{fontSize: 6}}> ⬤ </Text>
                  <Text> 3 weeks</Text>{' '}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => toggleModal()}
                style={{marginRight: 8, marginTop: 10}}>
                {MealKitIcons.menuButton}
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
                marginBottom: 10,
              }}>
              <Text
                style={[MainStyle.textTitle, {marginLeft: 18, marginTop: 0}]}>
                Current Week
              </Text>
            </View>
          </View>
          <DropDownMenu />
          <Modal
            isVisible={isModalVisible}
            onSwipeComplete={() => setModalVisible(false)}
            swipeDirection="down"
            backgroundColor="#FFFFFF"
            style={{ marginTop: 650, marginBottom: 20, marginLeft: 0, marginRight: 0 }}>
            <View style={{marginTop: -10, alignItems: 'center'}}>
              {DelIcons.flatIndicatorGrey}
              <View style={{marginTop:33,marginLeft:16,flexDirection: 'row'}}>
                <View style={{width: '15%'}}>{MealPlanIcons.calender}</View>
                <Text style={{width: '85%',fontFamily:FONTS.normal,fontSize:SIZES.h2,fontWeight:SIZES.w5,lineHeight:15.31,alignSelf:'center'}}>Reschedule meal plan</Text>
              </View>
              <View style={{flexDirection: 'row',marginTop:26,marginLeft:16}}>
                <View style={{width: '15%'}}>{MealPlanIcons.calender}</View>
                <Text style={{width: '85%',fontFamily:FONTS.normal,fontSize:SIZES.h2,fontWeight:SIZES.w5,lineHeight:15.31,alignSelf:'center'}}>Unsubscribe</Text>
              </View>
            </View>


          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MealSubscription;
