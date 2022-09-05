import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import MainStyles from 'styleSheet/MainStyle';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import NavigationHeader from 'components/NavigationHeader';
import {useTranslation} from 'react-i18next';
import styles from './style';
import {COLORS, SIZES, DelIcons} from 'assets/index';
import {useDispatch, useSelector} from 'react-redux';
import {getWishlistRequest, deleteWishlistRequest} from './actions';
import { addToCartRequest } from '../CategoryScreen/actions';
import { cartListRequest } from '../CartScreen/actions';
import {deleteWishlistItemRequest} from './actions';
const WishlistScreen = props => {
  const dispatch = useDispatch();
  const getWishlistData = useSelector(
    state => state.WishlistReducer.getWishlistData,
  );
  useEffect(() => {
    dispatch(getWishlistRequest());
    return;
  },[]);
  const {t, i18n} = useTranslation();
  const onAddToBag = itemData => {
    const addedProductObject = {
      action: 'ADD',
      products: {
        [itemData.item.id]: {
          qty: 1
        },
      },
    };
    dispatch(addToCartRequest(addedProductObject));
    dispatch(cartListRequest());
  };

  const onDeleteItem = itemData => {
    const deleteItemObject = {
      action: 'REMOVE',
      products: [itemData.item.id],
    };
    dispatch(deleteWishlistItemRequest(deleteItemObject));
    dispatch(getWishlistRequest());
    console.log(JSON.stringify(deleteItemObject));
  };

  const rightSwipeActions = itemData => {
    return (
      <View
        style={[
          styles.cellStyle,
          {width: 100, marginLeft: 0, justifyContent: 'center'},
        ]}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center'}}
            onPress={() => onDeleteItem(itemData)}>
            <View>{DelIcons.deleteWishlist}</View>
            <Text
              style={{
                fontSize: SIZES.h1,
                alignSelf: 'center',
                marginTop: 15,
              }}>
              {t('delivery:delete')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderGridItem = itemData => {
    return (
      <Swipeable renderRightActions={() => rightSwipeActions(itemData)}>
        <View style={styles.cellStyle}>
          <Image style={styles.image} source={require('/images/cart.png')} />

          <View
            style={{
              alignSelf: 'center',
              flex: SIZES.f1,
              marginLeft: 8,
              marginRight: 8,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <Text style={styles.foodName}>{itemData.item.name}</Text>
              <Text style={styles.totalPrice}>{itemData.item.price}L</Text>
            </View>

            <Text style={styles.classification}>
              Noodles with lime in a plate. The ingridients of this plate
              are....
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.foodPrice, {color: COLORS.black}]}>
                4.9
                <Text style={[styles.foodPrice, {color: COLORS.red}]}>*</Text>
              </Text>
              <TouchableOpacity
                style={styles.buttonStyleRed}
                onPress={() => onAddToBag(itemData)}>
                <View>
                  <Text style={styles.text_color}> {t('delivery:addToBag')}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Swipeable>
    );
  };

  return (
    <SafeAreaView style={MainStyles.safeAreaContainerLight}>
      <View style = {{flex:1,marginBottom:100}}>
        <StatusBar barStyle="dark-content" />
        <NavigationHeader title={t('delivery:wishlist')} navigation={props.navigation} />
        {getWishlistData?.products != '' ? (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 15,
              }}>
                <Text
                  style={[
                    MainStyles.deliveryTime,
                    {textDecorationLine: 'underline',fontSize:SIZES.h,marginLeft:10,marginRight:5},
                  ]}>
                  {t('delivery:addToCart')}
                </Text>
                <Text
                  style={[
                    MainStyles.deliveryTime,
                    {textDecorationLine: 'underline'},
                  ]}>
                 {t('delivery:clearAll')}
                </Text>
              </View>

            <FlatList
              bounces={false}
              keyExtractor={(item, index) => item.id}
              data={getWishlistData?.products}
              showsVerticalScrollIndicator="false"
              renderItem={renderGridItem}
              numColumns={1}
            />
          </View>
        ) : (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('images/emptyWishlist.gif')}
              style={styles.imageWish}
            />
            <Text
              style={[
                styles.sectionTitle,
                {
                  fontSize: 18,
                  fontWeight: '500',
                  marginTop: 10,
                  marginBottom: 10,
                },
              ]}>
              {t('delivery:wishlistEmpty')}
            </Text>
            <Text style={styles.classification}>
            {t('delivery:tapHeart')}
            </Text>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => props.navigation.navigate('Home')}>
              <View>
                <Text style={styles.buttonText1}>{t('delivery:addNow')}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default WishlistScreen;
