import React, {useState, useEffect} from 'react';
import styles from './style';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES, ComIcons, DelIcons, NavIcons} from 'assets/index';
import 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useDispatch, useSelector} from 'react-redux';
import {deleteItemRequest} from 'delivery/screens/CartScreen/actions';
import {addToCartRequest} from 'delivery/screens/CategoryScreen/actions';
import {cartListRequest} from 'delivery/screens/CartScreen/actions';
import {useTranslation} from 'react-i18next';

const CartItem = props => {
  const {t, i18n} = useTranslation();
  const [itemQuantity, setQuantity] = useState(props.itemQuantity);
  const dispatch = useDispatch();
  const incrementValue = id => {
    setQuantity(itemQuantity + 1);
    const addedProductObject = {
      action: 'ADD',
      products: {
        [id]: {
          qty: itemQuantity + 1,
        },
      },
    };
    setQuantity(itemQuantity + 1);
    dispatch(addToCartRequest(addedProductObject));
    dispatch(cartListRequest());
  };
  const decrementValue = id => {
    const decreaseItemObject = {
      action: 'ADD',
      products: {
        [id]: {
          qty: itemQuantity - 1,
        },
      },
    };
    const deleteItemObject = {
      action: 'REMOVE',
        products: [id]
    };

    if (itemQuantity > 1) {
      setQuantity(itemQuantity - 1);
      dispatch(addToCartRequest(decreaseItemObject));
      dispatch(cartListRequest());
    } else if (itemQuantity == 1) {
      setQuantity(itemQuantity - 1);
      dispatch(deleteItemRequest(deleteItemObject));
      dispatch(cartListRequest());
    } else {
      null;
    }

  };
  const rightSwipeActions = () => {
    return (
      <View style={styles.swipeView}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => decrementValue(props.id)}>
            <View>{DelIcons.minusQuantityRed}</View>
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 8,
              marginRight: 8,
              fontSize: SIZES.h3,
              fontWeight: SIZES.w6,
              alignSelf: 'center',
              width: 15,
            }}>
            {itemQuantity}
          </Text>
          <TouchableOpacity onPress={() => incrementValue(props.id)}>
            <View>{DelIcons.plusQuantityRed}</View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <Swipeable renderRightActions={rightSwipeActions}>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: '#F2F3F0',
          borderRadius: SIZES.r1,
          height: 80,
          margin: 8,
          shadowColor: COLORS.titleBlack,
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.15,
          shadowRadius: 2,
          backgroundColor: COLORS.white,
        }}>
        <Image
          style={{height: 79, width: 79, borderRadius: 12}}
          source={{uri: props.thumbnail}}
        />
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: 10,
            }}>
            <Text style={styles.foodName}>{props.title}</Text>
            <Text style={styles.classification}>{props.classfication}</Text>
            <Text style={styles.foodPrice}>{props.price}L</Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              marginRight: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.editTheMeal}
                onPress={props.onSelect}>
                <Text>{t('delivery:editTheMeal')}</Text>
                <View style={{marginLeft: 3, marginTop: 5}}>
                  {DelIcons.editArrowRight}
                </View>
                <View style={{marginTop: 5}}>{DelIcons.editArrowRight}</View>
              </TouchableOpacity>
            </View>
            <Text
              style={[
                styles.totalPrice,
                {fontSize: SIZES.h, textAlign: 'right', marginRight: -1},
              ]}>
              x {itemQuantity}
            </Text>
            <Text
              style={[
                styles.totalPrice,
                {textAlign: 'right', marginRight: -1},
              ]}>
              {itemQuantity * props.totalPrice}L
            </Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};
export default CartItem;
