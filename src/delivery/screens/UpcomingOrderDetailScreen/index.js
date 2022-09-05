import React, { useState, Component, useEffect } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
  SafeAreaView
} from 'react-native';
import { ORDERHISTORYPAST } from 'data/dummy-data';
import MainStyle from 'styleSheet/MainStyle';
import UnderlineView from 'components/underlineView';
import NavigationHeader from 'components/NavigationHeader';
import { useTranslation } from 'react-i18next';
import styles from './style';
import { COLORS, SIZES } from 'assets/index';
import Config from 'react-native-config';
//For API Setup
import { useDispatch, useSelector } from 'react-redux';
import { getPastOrderDetailRequest } from 'delivery/screens/PastOrderDetailScreen/actions'


const PastOrderDetailScreen = ({ route, navigation }) => {
  const { t, i18n } = useTranslation();
  const { orderId } = route.params;
  const dispatch = useDispatch();
  let subTotal = 0
  useEffect(() => {
    dispatch(getPastOrderDetailRequest({ orderId: orderId, params: { with: ["order.products", "order.products.media"] } }));
  }, []);

  const ordersData = useSelector(
    state => state.PastOrderDetailReducer.upcomingOrderDetailData,
  );
  ordersData?.products.forEach(item => {
    subTotal += parseInt(item.price);
  });
  const showAlert1 = () => {
    Alert.alert(
      'Cancel Order',
      'Are you sure you want to cancel this order?',
      [
        {
          text: 'Go Back',
          style: 'cancel',
          onPress: () => console.log('OK Pressed'),
        },
        {
          text: 'Cancel Order',
          onPress: () => console.log('Cancel Pressed'),
        },
      ],
    );
  };
  const renderGridItem = itemData => {
    return (
      <View
        style={{
          marginTop: 20,
        }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: SIZES.f1 }}>
            <Text style={styles.orderTitle}>x1 {itemData.item.name}</Text>
            <Text style={MainStyle.descHistoryText}>{itemData.item.description}</Text>
            <Text style={styles.price}>{itemData.item.price}  L</Text>
          </View>
          <View
            style={{
              backgroundColor: '#F2F3F0',
              height: 60,
              width: 60,
              borderRadius: SIZES.r,
            }}>
            <Image
              style={styles.image}
              source={{ uri: `${Config.BASE_URL}/${itemData.item.thumbnail}` }}
            />
          </View>
        </View>
      </View>
    );
  };
  const getFooter = itemData => {
    return (
      <View style={{ marginTop: 10 }}>
        <UnderlineView />

        <View style={styles.subtotalView}>
          <Text style={styles.subNdelivText}>{t('delivery:subtotal')}</Text>

          <Text style={[styles.subNdelivText, { textAlign: 'right' }]}>
            {subTotal}  L
          </Text>
        </View>

        <View style={styles.subtotalView}>
          <Text style={[styles.subNdelivText, { width: 200 }]}>
            {t('delivery:discount')}
          </Text>

          <Text style={[styles.subNdelivText, { textAlign: 'right' }]}>
            -0L
          </Text>
        </View>

        <View style={styles.subtotalView}>
          <Text style={styles.subNdelivText}>{t('delivery:newSubtotal')}</Text>

          <Text style={[styles.subNdelivText, { textAlign: 'right' }]}>
            {subTotal}  L
          </Text>
        </View>

        <View style={styles.subtotalView}>
          <Text style={styles.subNdelivText}>{t('delivery:deliveryCharge')}</Text>

          <Text style={[styles.subNdelivText, { textAlign: 'right' }]}>0  L</Text>
        </View>
        <View style={{ marginTop: 16 }}>
          <UnderlineView />
        </View>
        <View style={[styles.subtotalView, { marginTop: 10 }]}>
          <Text style={styles.totalText}>{t('delivery:totalAmount')}</Text>
          <Text style={[styles.totalText, { color: COLORS.red }]}>{subTotal}  L</Text>
        </View>
        <TouchableOpacity style={styles.buttonView} onPress={showAlert1}>
          <Text style={styles.buttonText}>{t('delivery:cancelOrder')}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ marginTop: 30 }}>
      <SafeAreaView>
        <NavigationHeader title={t('delivery:orderHistory')} navigation={navigation} />
        <UnderlineView />

        <View style={{ marginLeft: SIZES.mlr1, marginRight: SIZES.mlr1, marginTop: -12 }}>
          <FlatList
            bounces={false}
            keyExtractor={(item, index) => item.id}
            data={ordersData?.products}
            renderItem={renderGridItem}
            ListFooterComponent={getFooter}
            numColumns={1}
            directionLockEnabled={true}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default PastOrderDetailScreen;
