import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS, SIZES, DelIcons } from '../../assets/index';
import UnderlineView from '../underlineView';
import { useSelector, useDispatch } from 'react-redux';
import { getAddressRequest } from 'delivery/screens/AddressListScreen/actions';
import { deleteAddressRequest, deleteAddressRequestSuccess } from './actions';
import { replace } from 'navigation/RootNaviagtion';
import { useNavigation } from '@react-navigation/native';
import { add } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import Loader from 'components/Loader';
import {useTranslation} from 'react-i18next';

const MyAddressesBottom = props => {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();
  const addressData = useSelector(state => state.getAddressListReducer.addressData);
  const loading =  useSelector(state => state.getAddressListReducer.loading);
  const [selectedIndex, setSelectedIndex] = useState('1');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddressRequest());
    return;
  }, []);

  const deleteAddress = (addressId) => {
   dispatch(deleteAddressRequest(addressId));
    return;
  };
  const toAddAddressScreen = itemId => {
    setSelectedIndex(itemId);
  };
  const combineFunction = (itemData) => {
    props.toEditAddress();
    navigation.navigate('AddAddress', {
      id: itemData.item.id,
      first_name: itemData.item.first_name,
      last_name: itemData.item.last_name,
      phone: itemData.item.phone,
      street: itemData.item.street,
      city: itemData.item.city,
      type: itemData.item.type,
      latitude: itemData.item.latitude,
      longitude: itemData.item.longitude,
      default_set: itemData.item.default_set,
    });
  }
  const Header = () => {
    return (
      <View style={{marginTop:10 }}>
        <View style={{ alignItems: 'center' }}>{DelIcons.flatIndicatorGrey}</View>
        <Text
          style={{
            fontSize: SIZES.h3,
            fontWeight: SIZES.w5,
            fontFamily: FONTS.normal,
            lineHeight: SIZES.l4,
            marginBottom: 16,
            marginTop: 16,
          }}>
          {t('delivery:myAddresses')}
        </Text>
        <UnderlineView />
        <Text
          style={{
            fontSize: SIZES.h1,
            fontWeight: SIZES.w3,
            fontFamily: FONTS.normal,
            lineHeight: SIZES.l2,
            marginBottom: 28,
            marginTop: 16,
          }}>
            {t('delivery:manageMyAddresses')}
        </Text>
        {loading ? <Loader style={{ position: 'relative', height: 100, width: 100, alignSelf: 'center' }} /> : null}
      </View>

    );
  };

  const Footer = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={props.toAddAddress}>
          <View
            style={{
              borderRadius: SIZES.r,
              borderColor:
                COLORS.red,
              borderWidth: 1,
              width: 105,
              height: 105,
              marginLeft: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <View>
                {DelIcons.inActiveAddNew}
              </View>
            </View>
            <Text
              style={{
                marginTop: 8,
                fontSize: SIZES.h,
                fontWeight: SIZES.w7,
                fontFamily: FONTS.normal,
                lineHeight: 13.26,
              }}>
             {t('delivery:addNew')}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  const renderGridItem = itemData => {
    return (
      <View>
        <TouchableOpacity onPress={() => toAddAddressScreen(itemData.item.id)}>
          <View
            style={{
              borderRadius: SIZES.r,
              borderColor:
                itemData.item.id === selectedIndex ? COLORS.red : COLORS.grey,
              borderWidth: 1,
              width: 105,
              height: 105,
              marginLeft: 15,
              marginBottom: 15,
              alignItems: 'center',
            }}>
            <View style={{ flexDirection: 'row', marginLeft: 32 }}>
              <View style={{ marginTop: 8 }}>
                {itemData.item.type === 'Home'
                  ? itemData.item.type === 'Home' &&
                    itemData.item.id === selectedIndex
                    ? DelIcons.activeHome
                    : DelIcons.inActiveHome
                  : itemData.item.type === 'Office'
                    ? itemData.item.type === 'Office' &&
                      itemData.item.id === selectedIndex
                      ? DelIcons.activeOffice
                      : DelIcons.inActiveOffice
                    : itemData.item.type === 'Other' &&
                      itemData.item.id === selectedIndex
                      ? DelIcons.activeOther
                      : DelIcons.inActiveOther}
              </View>
              <TouchableOpacity 
                onPress={() => combineFunction(itemData)}
                style={{ marginTop: 4, marginLeft: 20 }} >
                {itemData.item.id === selectedIndex
                  ? DelIcons.activeEdit
                  : DelIcons.inActiveEdit} 
              </TouchableOpacity>
            </View>
            <Text
              style={{
                marginTop: 8,
                fontSize: SIZES.h2,
                fontWeight: SIZES.w5,
                fontFamily: FONTS.normal,
                lineHeight: SIZES.l4,
              }}>
              {itemData.item.type}
            </Text>
            <Text
              numberOfLines={2}
              style={{
                marginTop: 7,
                marginLeft: 5,
                marginRight: 5,
                fontSize: SIZES.h,
                fontWeight: SIZES.w4,
                fontFamily: FONTS.normal,
                lineHeight: SIZES.l2,
                maxWidth: 70,
                maxHeight: 25,
              }}>
              {itemData.item.city}
            </Text>
            <TouchableOpacity
              onPress={() => deleteAddress(itemData.item.id)}
              style={{ alignSelf: 'flex-end', marginRight: 5 }}>
              {itemData.item.id === selectedIndex
                ? DelIcons.activeDelete
                : DelIcons.inActiveDelete}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

      </View>
    );
  };
  return (
    <View style={{
      marginBottom: 30
    }} >
              <FlatList
                bounces={false}
                keyExtractor={(item, index) => item.id}
                data={addressData}
                renderItem={renderGridItem}
                scrollEnabled="false"
                numColumns={3}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
                columnWrapperStyle={styles.row}
      />
    </View >

  );
};
export default MyAddressesBottom;
const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
