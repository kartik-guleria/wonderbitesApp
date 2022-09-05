import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import MyButton from 'components/MyButton';
import MainStyle from 'styleSheet/MainStyle';
import UnderlineView from 'components/underlineView';
import NavigationHeader from 'components/NavigationHeader';
import {useTranslation} from 'react-i18next';
import styles from './style';
import Modal from 'react-native-modal';
import CartItem from 'components/CartItem';
import CodeDropDown from 'components/CodeDropDown';
import RedeemCode from 'components/RedeemCodes';
import {COLORS, FONTS, SIZES, DelIcons} from 'assets/index';
import {useSelector, useDispatch} from 'react-redux';
import { cartListRequest, applyCouponRequest, resetCouponData } from './actions';
import Config from 'react-native-config';
import Loader from 'components/Loader';
import al from 'constants/translations/al';
const CartScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const cartListData = useSelector(state => state.CartReducer.cartListData);
  const couponData = useSelector(state => state.CartReducer.couponData);
  const [cartNote, setCartNote] = useState("");
  let newSubTotal = 0;
  let subTotal = 0;
  let discount = couponData?.coupon.discountValue == null ? 0 : couponData?.coupon.discountValue;
  let deliveryCharge = 0;
  let totalAmount = 0;
  let totalQuantity = 0;
  let code = "";
  let note = "";
  useEffect(() => {
    const reRender = navigation.addListener('focus', () => {
      dispatch(cartListRequest());
    });
    return reRender;
  }, [cartListData]);
  const codesArray = [{
    id: '1',
    name: 'Coupon'
  },
  {
    id: '2',
    name: 'Wonderpoints'
  },
  {
    id: '3',
    name: 'Giftcard'
  },
  ];
  const loading = useSelector(state => state.CartReducer.loading);
  const [codeName, setCodeName] = useState('');

  const handleAddCode = () => {
    setCodeName(code);
    dispatch(applyCouponRequest({ coupon: code, cart: cartListData?.id }))
  };
  cartListData?.products.forEach(item => {
    subTotal += parseInt(item.price) * item.meta.pivot_qty;
    totalQuantity += item.meta.pivot_qty;
  });

  const deleteCode = index => {
    setCartNote(note);
    setCodeName('');
    code = "";
    dispatch(resetCouponData());
  }
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const {t, i18n} = useTranslation();
  const [selectedItem, setSelectedItem] = useState({});
  const onClick = (itemData) => {
    toggleModal();
    setSelectedItem(itemData.item);
  }
  const renderItem = itemData => {
    return (
      <><TouchableOpacity
        onPress={() => onClick(itemData)}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontFamily: FONTS.normal,
            fontWeight: SIZES.w4,
            marginTop: 5,
            marginBottom: 5,
            width: '100%',
            color: selectedItem.id === itemData.item.id ? COLORS.red : null,
          }}>
          {itemData.item.name}
        </Text>

      </TouchableOpacity>
        <View
          style={{ backgroundColor: COLORS.grey, height: 1 }}>
        </View>
      </>
    );
  }
  const renderGridItem = itemData => {
    const thumb = itemData.item.thumbnail;
    const thumbnails = `${Config.BASE_URL}${thumb}`;
    const quantity = itemData.item.meta.pivot_qty;
    return (
      <CartItem
        title={itemData.item.name}
        classfication={itemData.item.classification}
        price={itemData.item.price}
        totalPrice={itemData.item.price}
        id={itemData.item.id}
        thumbnail={thumbnails}
        itemQuantity={quantity}
        onSelect={() => {
          navigation.navigate({
            name: 'ProductDetail',
            params: { productId: itemData.item.id },
          });
        }}
      />
    );
  };

  const footerCart = () => {
    return cartListData?.products != '' ? (
      <View>
        <View style={{marginTop: 10, marginLeft: 16, marginRight: 16}}>
          <UnderlineView />

          <View style={{marginBottom: 15}}>
            <Text
              style={{
                fontFamily: FONTS.normal,
                fontSize: SIZES.h3,
                fontWeight: SIZES.w5,
                lineHeight: SIZES.l3,
                marginTop: 16,
              }}>
              {t('delivery:addANote')}
            </Text>

            <View style={[styles.noteTextField]}>
              <TextInput
                placeholder={t('delivery:theNote')}
                multiline={true}
                numberOfLines={4}
                onChangeText={text => note = text}
                defaultValue={cartNote}
                onEndEditing={() => setCartNote(note)}
                style={[styles.noteText, {marginRight: 1}]}
              />
            </View>
          </View>

          <UnderlineView />

          <View style={{marginTop: -10}}>
            <Text style={styles.coupon}>{t('delivery:redeem')}</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 6,
                  borderColor: COLORS.grey,
                  height: 32,
                  marginTop: 16,
                  marginRight: 10,
                  width: '40%',
                }}>
                <TouchableOpacity
                  onPress={toggleModal}
                  style={{
                    flexDirection: 'row',
                    height: 32,
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      marginLeft: 5,
                      marginRight: 5,
                    }}>
                    {selectedItem.name != null ? selectedItem.name : "Choose Discount"}
                  </Text>
                  <View style={{alignSelf: 'center', marginRight: 10}}>
                    {DelIcons.redArrowDown}
                  </View>
                </TouchableOpacity>
              </View>
              <Modal
                isVisible={isModalVisible}
                backdropOpacity={0.1}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection="down"
                backgroundColor="#FFFFFF"
                style={{width: '100%', marginTop: 610, marginLeft: 0}}>
                <View style={{ marginTop: -30 }}>
                  <View style={{ alignContent: 'center' }}>
                    <View style={{ alignItems: 'center', marginTop: -20, marginBottom: 40 }}>
                      {DelIcons.flatIndicatorGrey}
                    </View>
                    <FlatList
                      keyExtractor={(item, index) => item.id}
                      data={codesArray}
                      renderItem={renderItem}
                      scrollEnabled="false"
                      numColumns={1}
                    />
                  </View>
                </View>
              </Modal>

              <View style={styles.codeView}>
                <TextInput
                  style={styles.codeText}
                  placeholder={t('delivery:code')}
                  placeholderTextColor="#2B2C2D"
                  defaultValue={code}
                  onChangeText={text => code = text}
                />
              </View>
              <View style={styles.applyView}>
                <TouchableOpacity onPress={() => handleAddCode()}>
                  <Text style={styles.applyText}>{t('delivery:apply')}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <ScrollView
              horizontal
              bounces={false}
              showsHorizontalScrollIndicator={false}
              style={{marginRight: 7, marginLeft: 7}}>
              <View
                style={{
                  marginTop: 16,
                  flexDirection: 'row',
                }}>
                {codeName != "" ?

                    <RedeemCode
                    text={codeName}
                    onClick={() => deleteCode(codeName)}
                    />

                  : null}
              </View>
            </ScrollView>
          </View>

          <UnderlineView />

          <View style={styles.subtotalView}>
            <Text style={styles.subtotalText}>{t('delivery:subtotal')}</Text>
            <Text style={[styles.subtotalText, {textAlign: 'right'}]}>
              {subTotal}  L
            </Text>
          </View>
          {selectedItem.name != null ?
            <View style={styles.subtotalView}>
              <Text
                style={{
                  fontSize: SIZES.h2,
                  fontWeight: SIZES.w5,
                  fontFamily: FONTS.normal,
                  fontStyle: 'normal',
                  color: COLORS.black,
                }}>
                {selectedItem.name} {t('delivery:discount')}
              </Text>
              <Text style={[styles.subtotalText, { textAlign: 'right' }]}>
                -{discount}  L
              </Text>
            </View>
            : null} 
          <View style={styles.subtotalView}>
            <Text style={styles.subtotalText}>{t('delivery:newSubtotal')}</Text>

            <Text style={[styles.subtotalText, {textAlign: 'right'}]}>
              {newSubTotal = subTotal - discount}  L
            </Text>
          </View>

          <View style={styles.deliveryView}>
            <Text style={styles.subtotalText}>
              {t('delivery:deliveryCharge')}
            </Text>
            <Text style={[styles.subtotalText, { textAlign: 'right' }]}>0  L</Text>
          </View>

          <UnderlineView />
          <View style={styles.totalView}>
            <Text style={[styles.totalAmount, {color: COLORS.black}]}>
              {t('delivery:totalAmount')}
            </Text>
            <Text style={[styles.totalAmount, {textAlign: 'right'}]}>
              {totalAmount = newSubTotal + 0}  L
            </Text>
          </View>
          <UnderlineView />
        </View>

        <Text
          style={[
            MainStyle.descText,
            {color: COLORS.black, marginTop: 13, marginBottom: 13},
          ]}>
          You Will Earn 24.5 Wonderpoints’’
        </Text>
        <View style={{marginLeft: 16, marginRight: 16}}>
          <UnderlineView />
        </View>
        <MyButton
          title={t('delivery:continue')}
          onSelect={() => {
            navigation.navigate('Checkout', { subTotal, newSubTotal, discount, deliveryCharge, totalAmount, discountType: selectedItem.name, itemCount: totalQuantity, cartID: cartListData.id, cartNote: note == '' ? cartNote : note });
          }}
        />
      </View>
    ) : (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {DelIcons.emptyCart}
        <Text
          style={{
            marginTop: 30,
            fontFamily: FONTS.normal,
            fontSize: SIZES.h3,
            fontWeight: SIZES.w5,
            lineHeight: 17.23,
          }}>
          {t('delivery:noOrders')}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader
        title={t('delivery:myBag')}
        displayLine={true}
        displayBtn={false}
        navigation={navigation}
      />
      {cartListData?.products != '' ? (
        <View style={{marginBottom: 50}}>
          {loading ? (
            <Loader
              style={{
                position: 'relative',
                height: 100,
                width: 100,
                alignSelf: 'center',
              }}
            />
          ) : (
            <FlatList
              bounces={false}
              keyExtractor={(item, index) => item.id}
              data={cartListData?.products}
              showsVerticalScrollIndicator="false"
              ListFooterComponent={footerCart}
              renderItem={renderGridItem}
              numColumns={1}
            />
          )}
        </View>
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {DelIcons.emptyCart}
          <Text
            style={{
              marginTop: 30,
              fontFamily: FONTS.normal,
              fontSize: SIZES.h3,
              fontWeight: SIZES.w5,
              lineHeight: 17.23,
            }}>
            {t('delivery:noOrders')}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
