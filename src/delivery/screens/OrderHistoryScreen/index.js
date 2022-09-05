//order History past screen
import React, { Component, useEffect, useState } from 'react';
import {
  SafeAreaView,
  SectionList,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import Config from 'react-native-config';
import moment from 'moment';
import {sectionListData} from 'data/sectionListData';
import OrderHistoryTab from 'components/orderHistoryTab';
import MainStyle from 'styleSheet/MainStyle';
import Stars from 'react-native-stars';
import NavigationHeader from 'components/NavigationHeader';
import { useTranslation } from 'react-i18next';
import { getPastOrdersRequest } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style';
import {
  COLORS,
  DelIcons,
} from 'assets/index';
// import { FlatList } from 'react-native-gesture-handler';

const OrderHistoryScreen = props => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [orderType, setOrderType] = useState('delivered');
  const [orderTypeId, setOrderTypeId] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPastData, setOrdersPastData] = useState([]);

  const ordersData = useSelector(
    state => state.PastOrdersReducer.pastOrdersData,
  );
  useEffect(() => {
    dispatch(getPastOrdersRequest({ params: { status: orderType, with: ["order.products", "order.products.media"] } }));
    // currentPage != 1 ? setOrdersPastData((value) => [...value, ...ordersData?.data]) : setOrdersPastData([ordersData?.data]);
  }, [orderType, currentPage]);



  const onSelectSwitch = index => {
    if (index == 2) {
      setOrderType("upcoming");
      setOrderTypeId(2);
      setCurrentPage(1);
    } else {
      setOrderType("delivered");
      setOrderTypeId(1);
      setCurrentPage(1)
    }
  };
  const renderGridItem = items => {
    let subTotal = 0
    const commaSep = items.item.products?.map(item => item.name).join(', ');
    items.item.products?.forEach(item => {
      subTotal += parseInt(item.price)
    });
    return (
      <View style={styles.sectionBox}>
        <View style={styles.sectionBoxView}>
          <View style={styles.titleNbuttonView}>
            <Text style={styles.titleText}>{commaSep}</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate({
                name: orderTypeId == 2 ? 'UpcomingOrderDetail' : 'PastOrderDetail',
                params: { orderId: items.item.id },
              })}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.arrowimage}>
                    {DelIcons.bigBlackArrowRight}
                    {DelIcons.bigBlackArrowRight}
                </View>
                </View>
              </TouchableOpacity>
            </View>
          <Text style={styles.date}> {moment(items.item.created_at).format('DD-MM-yyyy | HH:mm')} </Text>
          <View style={{ flexDirection: 'row' }}>
            {items.item.products?.map((item, idx) => (
              <Image style={styles.orderImages} source={{ uri: `${Config.BASE_URL}/${item.thumbnail}` }} />
            ))}
            </View>
            <View style={styles.detailsHeadingView}>
            <Text style={styles.detailsHeading}>{orderTypeId == 2 ? "Delivering..." : "Order Rate"}</Text>
              <Text style={styles.detailsHeading}>Products</Text>
              <Text style={[styles.detailsHeading, {marginRight: 3}]}>
                Order Price
              </Text>
            </View>

          <View style={styles.orderDetailsView}>
            {orderTypeId == 2 ?
              <TouchableOpacity onPress={() => props.navigation.navigate("TrackOrder")}>
                <Text style={[
                  styles.orderDetails,
                  { color: COLORS.red, marginRight: 4 },
                ]}>Track Order</Text></TouchableOpacity>
              :
              <View style={{}}>
                <Stars
                  count={5}
                  starSize={20}
                  spacing={2}
                  fullStar={
                    <Image
                      style={styles.myStarStyle}
                      source={require('/images/starFill.png')}
                    />
                  }
                  emptyStar={
                    <Image
                      style={styles.myStarStyle}
                      source={require('/images/starEmpty.png')}
                    />
                  }
                />
              </View>
            }
              <Text style={[styles.orderDetails, {marginLeft: -4}]}>
              {items.item.products?.length} Products
              </Text>

              <Text
                style={[
                  styles.orderDetails,
                  {color: COLORS.red, marginRight: 4},
                ]}>
              {subTotal}  L
            </Text>
          </View>
        </View>
        </View>
    )
  }
  // class SectionListItem extends Component {
  //   render() {
  //     return (
  //       <View style={styles.sectionBox}>
  //         <View style={styles.sectionBoxView}>
  //           <View style={styles.titleNbuttonView}>
  //             <Text style={styles.titleText}>{this.props.item.id}</Text>
  //             <TouchableOpacity
  //               onPress={() => props.navigation.navigate('PastOrderDetail')}>
  //               <View style={{flexDirection: 'row'}}>
  //                 <View style={styles.arrowimage}>
  //                   {DelIcons.bigBlackArrowRight}
  //                   {DelIcons.bigBlackArrowRight}
  //                 </View>
  //               </View>
  //             </TouchableOpacity>
  //           </View>
  //           <Text style={styles.date}>{this.props.item.created_at}</Text>
  //           <View style={{flexDirection: 'row'}}>
  //             <Image
  //               style={styles.orderImages}
  //               source='../images/noodle.png'
  //             />
  //             <Image
  //               style={styles.orderImages}
  //               source='../images/noodle.png'
  //             />
  //           </View>
  //           <View style={styles.detailsHeadingView}>
  //             <Text style={styles.detailsHeading}>Order Rate</Text>
  //             <Text style={styles.detailsHeading}>Products</Text>
  //             <Text style={[styles.detailsHeading, {marginRight: 3}]}>
  //               Order Price
  //             </Text>
  //           </View>

  //           <View style={styles.orderDetailsView}>
  //             <View style={{}}>
  //               <Stars
  //                 count={5}
  //                 starSize={20}
  //                 spacing={2}
  //                 fullStar={
  //                   <Image
  //                     style={styles.myStarStyle}
  //                     source={require('/images/starFill.png')}
  //                   />
  //                 }
  //                 emptyStar={
  //                   <Image
  //                     style={styles.myStarStyle}
  //                     source={require('/images/starEmpty.png')}
  //                   />
  //                 }
  //               />
  //             </View>

  //             <Text style={[styles.orderDetails, {marginLeft: -4}]}>
  //               ABCD Products
  //             </Text>

  //             <Text
  //               style={[
  //                 styles.orderDetails,
  //                 {color: COLORS.red, marginRight: 4},
  //               ]}>
  //               300   L
  //             </Text>
  //           </View>
  //         </View>
  //       </View>
  //     );
  //   }
  // }
  // class SectionHeader extends Component {
  //   render() {
  //     return (
  //       <View style={styles.monthView}>
  //         <Text style={styles.monthText}>{this.props.section.id}</Text>
  //         <Text style={styles.monthOrders}>
  //           {this.props.section.created_at} Orders
  //         </Text>
  //       </View>
  //     );
  //   }
  // }

  // render() {
  return (
    <View
      style={[
        MainStyle.screen,
        { justifyContent: 'flex-start' },
      ]}>
      <SafeAreaView>
        <NavigationHeader title={t('delivery:orderHistory')} navigation={props.navigation} />
        <View>
          <View>
          <OrderHistoryTab
            selectionMode={1}
            option1= {t('delivery:pastOrders')}
            option2={t('delivery:upcomingOrders')}
            onSelectSwitch={onSelectSwitch}
            selectionColor={COLORS.background2}
          />
          {/* <View style={[styles.screen, {marginTop: 100}]}>
            <Image
              source={require('../../images/orderEmpty.gif')}
              style={styles.image}
            />

            <Text style={styles.sectionDescription}>Nothing in here !!!</Text>
          </View> */}

            <FlatList style={{ marginBottom: 180 }}
                // bounces={false}
                // keyExtractor={(item, index) => item?.id}
                data={ordersData?.data}
                // onEndReached={() => setCurrentPage(ordersData?.last_page <= currentPage + 1 ? currentPage + 1 : currentPage)}
                // onEndReachedThreshold={0.5}
                renderItem={renderGridItem}
                numColumns={1}
              scrollEnabled={true}
                directionalLockEnabled={true}
              />

          </View>
          {/* <SectionList
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return <SectionListItem item={item} index={index} />;
            }}
            renderSectionHeader={({ ordersData }) => {
              return <SectionHeader section={ordersData} />;
            }}
            sections={sectionListData}
            keyExtractor={(item, index) => item.id}
            stickySectionHeadersEnabled={false}
          /> */}
        </View>
      </SafeAreaView>
    </View>
  );
  // }
};
export default OrderHistoryScreen;
