import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {PAYMENTDETAIL} from 'data/dummy-data';
import MyButton from 'components/MyButton';
import MainStyle from 'styleSheet/MainStyle';
import NavigationHeader from 'components/NavigationHeader';
import {useTranslation} from 'react-i18next';
import styles from './style';
import {COLORS, SIZES, DelIcons, MealPlanIcons} from 'assets/index';

const PaymentDetailScreen = (props, {route, navigation}) => {
  const {t, i18n} = useTranslation();
  const [checked, setChecked] = useState('false');
  const [active,setActive] = useState('');
  const onCheck = () => {
    if (checked === 'false'){
      setActive('false');
      setChecked('true')
    }
    else if (checked === 'true'){
    setChecked('false');
  }
  };
 const onItemPress =(itemData) => {
   setChecked('false')
   setActive(itemData.item.id);
 }
  const getFooter = () => {
    return (
      <>
        <View
          style={{
            shadowColor: 'black',
            shadowOpacity: 0.15,
            shadowOffset: {width: 0, height: 0},
            shadowRadius: 5,
            elevation: 2,
          }}>
         
          <View
            style={{
              flexDirection: 'row',
              height: 80,
              marginTop: 10,
              borderColor: '#dddddd',
              borderWidth: 1,
              padding: 15,
              borderRadius: SIZES.r,
              alignItems: 'center',
              justifyContent:'space-between'
            }}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
            {DelIcons.dollar}
            <Text style={[styles.foodName,{marginLeft:24}]}>{t('delivery:cashOnly')}</Text>
            </View>
            <TouchableOpacity onPress={()=>onCheck()}>
            { checked === 'true' ?  MealPlanIcons.radioButtonRed :MealPlanIcons.radioButtonRedEmpty}
            </TouchableOpacity>
          </View>
        
        </View>
        
        <View>
          <MyButton
            title={t('delivery:addnew')}
            onSelect={() => {
              props.navigation.navigate('AddNewCard');
            }}
          />
        </View>
      </>
    );
  };
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity onPress={()=>onItemPress(itemData)}
        style={{
          flexDirection: 'row',
          height: 80,
          marginTop: 12,
          borderColor: active === itemData.item.id ? COLORS.red: COLORS.darkGrey,
          borderWidth: 1,
          padding: 15,
          borderRadius: SIZES.r,
        }}>
        <Image
          style={styles.image}
          source={require('../../../images/visa.png')}
        />

        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'column', marginLeft: 15, marginTop: 8}}>
            <Text style={[MainStyle.descText, {fontWeight: SIZES.w5}]}>
              {itemData.item.cardNo}
            </Text>
            <Text
              style={[
                MainStyle.deliveryTime,
                {alignSelf: 'flex-start', fontWeight: SIZES.w4},
              ]}>
              {t('delivery:expires')}
              {itemData.item.expDate}
            </Text>

{active === itemData.item.id ?
            <Text
              style={[
                styles.classification,
                {color: COLORS.red, fontWeight: 'bold'},
              ]}>
              {t('delivery:active')}
            </Text>
            : null}
          </View>

          <View style={{justifyContent: 'center'}}>
            <TouchableOpacity
              style={styles.buttonStyleRed}
              onPress={() => props.navigation.navigate('Home')}>
              <View>
                <Text style={styles.text_color}>{t('delivery:edit')}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <View style={styles.screen}>
        <NavigationHeader
          title={t('delivery:paymentDetails')}
          navigation={props.navigation}
        />
        <FlatList
          bounces={false}
          style={{width: '90%', }}
          keyExtractor={(item, index) => item.id}
          data={PAYMENTDETAIL}
          showsVerticalScrollIndicator="false"
          renderItem={renderGridItem}
          numColumns={1}
          ListFooterComponent={getFooter}
          
        />
      </View>
    </SafeAreaView>
  );
};

export default PaymentDetailScreen;
