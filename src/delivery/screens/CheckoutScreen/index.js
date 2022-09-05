import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import MapView from 'components/MapView';
import { Marker } from 'react-native-maps';
import { MARKER_DELTA } from 'utils/constants';
import UnderlineView from 'components/underlineView';
import NavigationHeader from 'components/NavigationHeader';
import {useTranslation} from 'react-i18next';
import styles from './style';
import {COLORS, SIZES, DelIcons} from 'assets/index';
import {useSelector, useDispatch} from 'react-redux';
import { getUserRequest } from 'common/screens/ProfileScreen/actions';
import { resetCouponData } from '../CartScreen/actions';
import { setCheckoutRequest } from './actions';
import { replace } from 'navigation/RootNaviagtion';
import Toast from 'react-native-toast-message';
import Config from 'react-native-config';
// import stripe from 'react-native-stripe-payments';

const CheckoutScreen = ({ navigation, route }) => {
  const [marker, changeMarker] = useState({
    latitude: 30.7333,
    longitude: 76.7794,
    latitudeDelta: 0.015 * 5,
    longitudeDelta: 0.0121 * 5,
  });
  const dispatch = useDispatch();
  const [addData, setAddData] = useState({});
  useEffect(() => {

    dispatch(getUserRequest());
    defaultAddress();
    return;
  }, [userData]);
  const { subTotal, newSubTotal, discount, deliveryCharge, totalAmount, discountType, itemCount, cartID, cartNote } = route.params;
  const userData = useSelector(state => state.getUserReducer.userData);
  console.log(JSON.stringify(userData));
  const defaultAddress = () => {
    return userData?.addresses.map(item => ({
      ...item,
      notes: item.id == userData?.address_id ? setAddData(item) : null
    }
    ))
  }

  const onPlaceOrder = () => {
    if (userData?.address_id == null) {
      Toast.show({
        type: 'error',
        text1: 'No Address for your Order. Please Add Address for Order',
        text1Style: {
          fontSize: 20,
          fontWeight: '400',
        },
      });
    } else {
      dispatch(setCheckoutRequest({
        cart: cartID,
        address: userData?.address_id,
        payment_method: 'COD',
        note: cartNote,
      }));
      dispatch(resetCouponData());
      replace('CheckoutComplete')
    }
  }
  //Stripe payment account setup
  // stripe.setOptions({ publishingKey: 'STRIPE_PUBLISHING_KEY' });
  // const cardDetails = {
  //   number: '4242424242424242',
  //   expMonth: 10,
  //   expYear: 21,
  //   cvc: '888',
  // }
  // stripe.confirmPayment('client_secret_from_backend', cardDetails)
  //   .then(result => {
  //     // result of type PaymentResult
  //   })
  //   .catch(err =>
  //   // error performing payment
  // )


  const { t, i18n } = useTranslation();

  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <StatusBar barStyle="dark-content" />
      <NavigationHeader
        title={t('delivery:completeOrder')}
        navigation={navigation}
      />
      <ScrollView bounces={false}>
        <View style={styles.viewContainer}>
          <Text style={[MainStyle.inputPhone, {marginLeft: 0}]}>
            {t('delivery:deliveringTo')}
          </Text>

          <View style={styles.personDetailsView}>
           <View style = {{flexDirection:'row'}}>

              <Image
                style={styles.image}
                source={{ uri: userData?.image_path == null ? userData?.avatar : `${Config.BASE_URL}/uploads/${userData.image_path}` }}
              />

            <View style={styles.nameView}>
                <Text style={MainStyle.inputPhone}>{userData?.first_name} {userData?.last_name}</Text>
              <Text
                style={[
                  MainStyle.prodDescTextLight,
                  {marginLeft: 10, marginTop: 8},
                ]}>
                {userData?.mobile}
              </Text>
            </View>
            </View>

            <UnderlineView />

            <View style={{marginTop:16}}>
              <View style={{flexDirection: 'row'}}>
                {DelIcons.deliveryRed}
                <View
                  style={{
                    flex: SIZES.f1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={[MainStyle.inputPhone, {marginLeft: 35}]}>
                    {t('delivery:deliveryAddress')}
                  </Text>
                  <TouchableOpacity onPress={() => navigation.navigate(userData?.address_id == null ? 'AskAddress' : 'AddressList')}>
                    <Text style={[MainStyle.inputPhone, {color: COLORS.red}]}>
                      {t(userData?.address_id == null ? 'common:addAddress' : 'delivery:change')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text
                  style={[
                    MainStyle.inputPhone,
                    {marginLeft: 55, marginTop: 20},
                  ]}>
                  {addData?.type}
                </Text>
                <View
                  style={{
                    marginTop: 16,
                    marginLeft: 55,
                    marginBottom: 5,
                    marginRight: 24,
                  }}>
                  <Text style={MainStyle.prodDescTextLight}>
                    {addData?.city}, {addData?.street}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.line}></View>

            {/* <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row', marginTop: 16}}>
                {DelIcons.paymentMethodRed}

                <View
                  style={{
                    flex: SIZES.f1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.payment}>
                    {t('delivery:paymentMethod')}
                  </Text>
                  <TouchableOpacity onPress={() => navigation.navigate('PaymentDetail')}>
                    <Text style={[MainStyle.inputPhone, {color: COLORS.red}]}>
                      {t('delivery:change')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{marginLeft: 60}}>
             <View style ={{flexDirection:'row',marginTop: 20}}>
              {DelIcons.visaCard}
                <Text style={[styles.address,{marginLeft:10}]}>
                    **** **** **** 4566
                </Text>
                </View>
                <View style={{marginTop: 16, marginBottom: 5, marginRight: 24}}>
                  <Text style={MainStyle.prodDescTextLight}>
                    {addData?.city}, {addData?.street}
                  </Text>
                </View>
              </View>
            </View> */}

            {/* <View style={styles.line}></View> */}

            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row', marginTop: 16}}>
                {DelIcons.arrivalTime}

                <View
                  style={{
                    flex: SIZES.f1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={[MainStyle.inputPhone, {marginLeft: 35}]}>
                    {t('delivery:estimatedTime')}
                  </Text>
                  <View style={{
                    marginTop: 4,
                    height: 47,
                    width: 60,
                    marginRight: 5,
                    resizeMode: 'contain',
                    borderRadius: 4
                  }}>
                    <MapView region={marker}>
                      <Marker coordinate={marker} />
                    </MapView>
                  </View>

                </View>
              </View>
              <View
                style={{
                  marginTop: -20,
                  marginLeft: 55,
                  marginRight: 115,
                  marginBottom: 5,
                }}>
                <Text style={MainStyle.prodDescTextLight}>
                  11th July, 2021 10:45 AM
                </Text>
              </View>
            </View>

            <UnderlineView />

            <View style={styles.itemTotalView}>
              <Text style={styles.itemTotal}>{t('delivery:subtotal')}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.itemTotal}>{subTotal} L</Text>
              </View>
            </View>
            {discountType != null ?
              <View style={styles.itemTotalView}>
                <Text style={styles.itemTotal}>
                  {discountType} {t('delivery:discount')}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.itemTotal}>-{discount} L</Text>
                </View>
              </View>
              : null}
            <View style={styles.itemTotalView}>
              <Text style={styles.itemTotal}>{t('delivery:newSubtotal')}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.itemTotal}>{newSubTotal} L</Text>
              </View>

            </View>

            <View style={styles.deliveryChargeView}>
              <Text style={styles.itemTotal}>
                {t('delivery:deliveryCharge')}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.itemTotal}>{deliveryCharge} L</Text>
              </View>
            </View>

            <View style={styles.line}></View>

            <View style={styles.totalPriceView}>
              <View style={{marginTop: 25, flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.totalPrice}>{totalAmount} L</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.totalItems}>
                    {t('delivery:yourOrder')} ({itemCount} {t('delivery:items')}){' '}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={onPlaceOrder}
                style={styles.button}>
                <Text style={styles.buttonText}>
                  {t('delivery:placeOrder')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
