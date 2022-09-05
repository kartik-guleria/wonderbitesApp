// order history past detail screen code

import React, { useEffect, useState } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
  SafeAreaView
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Config from 'react-native-config';
import { COLORS, FONTS, SIZES } from 'assets/index';
//install the dependency "npm install react-native-stars --save"
import MainStyle from 'styleSheet/MainStyle';
import UnderlineView from 'components/underlineView';
import NavigationHeader from 'components/NavigationHeader';
import styles from './style';
//For API Setup
import { useDispatch, useSelector } from 'react-redux';
import { getPastOrderDetailRequest } from './actions'

const PastOrderDetailScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { orderId } = route.params;
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


  const renderGridItem = itemData => {
    return (
      <View
        style={{
          marginTop: 20,
        }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2 }}>
            <Text style={styles.orderTitle}>x1 {itemData.item.name}</Text>
            <Text style={[MainStyle.descHistoryText, { marginTop: 5 }]}>{itemData.item.description}</Text>
            <Text style={[styles.price, { marginTop: 10 }]}>{itemData.item.price}  L</Text>
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
        {/* <TouchableOpacity style={{ alignSelf: 'flex-start' }}
          onPress={() => navigation.navigate({
            name: 'ReviewProduct',
            params: { productTitle: itemData.item.name, productDetail: itemData.item.description, productPrice: itemData.item.price },
          })}
            >
          <Text style={{ fontFamily: FONTS.normal, fontSize: SIZES.h1, fontWeight: SIZES.w4, lineHeight: SIZES.l4 }}>
            Review this Product
          </Text>
          <View style={{ height: 1, backgroundColor: COLORS.black, width: 139, marginTop: -1.5 }}></View>
        </TouchableOpacity> */}
      </View>
    );
  };
  const getFooter = itemData => {
    return (
      <View style={{ marginTop: 10 }}>
        <UnderlineView />
        <View>
          <View style={styles.subtotalView}>
            <Text style={styles.subNdelivText}>Subtotal & Tax</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.subNdelivText}>{subTotal}</Text>
              <Text style={styles.subNdelivText}>  L</Text>
            </View>
          </View>

          <View style={styles.subtotalView}>
            <Text style={styles.subNdelivText}>Delivery Charge</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.subNdelivText}>0</Text>
              <Text style={styles.subNdelivText}>  L</Text>
            </View>
          </View>

          <View style={[styles.subtotalView, { marginTop: 16 }]}>
            <Text style={styles.totalText}>Total Amount Paid</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.totalText, { color: COLORS.red }]}>{subTotal}</Text>
              <Text style={[styles.totalText, { color: COLORS.red }]}>  L</Text>
            </View>
          </View>
        </View>
        <UnderlineView />

        <View style={styles.bottomSectionView}>
          {ordersData?.note != null ? <View>
          <Text style={styles.sendText}>Order Note:</Text>
          <Text style={styles.questionText}>
            {ordersData?.note}
          </Text>
            <UnderlineView />
          </View> : null}
          <Text style={styles.sendText}>Send us your feedback</Text>
          <Text style={styles.questionText}>
            Do you have any suggestion or want to share your opinion about the
            food? Let us know!
          </Text>
          <UnderlineView />
          <Text style={styles.howText}>How did you like the food ? </Text>

          <View style={styles.boxView}>
            <TextInput
              style={styles.feedbackText}
              multiline
              placeholder="Enter your feedback here..."
            />
          </View>

          <TouchableOpacity style={styles.buttonView}>
            <Text style={styles.buttonText}>Submit </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader title={'Order History'} navigation={navigation} />
      <View style={MainStyle.screen}>
        <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          data={ordersData?.products}
          renderItem={renderGridItem}
          ListFooterComponent={getFooter}
          numColumns={1}
          directionalLockEnabled={true} />
      </View>
    </SafeAreaView>
  );
};

export default PastOrderDetailScreen;
