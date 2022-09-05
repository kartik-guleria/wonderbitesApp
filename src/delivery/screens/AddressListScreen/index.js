import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import MyButton from 'components/MyButton';
import MainStyle from 'styleSheet/MainStyle';
import NavigationHeader from 'components/NavigationHeader';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import {COLORS, DelIcons, SIZES} from 'assets/index';
import { getAddressRequest } from './actions';
import Loader from 'components/Loader';
import { addAddressRequest } from 'delivery/screens/AddAddressScreen/actions';

const AddressListScreen = props => {
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();
  const addressData = useSelector(state => state.getAddressListReducer.addressData);
  const loading =  useSelector(state => state.getAddressListReducer.loading);
  const userData = useSelector(state => state.getUserReducer.userData);
  const {t, i18n} = useTranslation();
  const [selectedAddress, setSelectedAddress] = useState(userData.address_id);

  useEffect(() => {
    dispatch(getAddressRequest());
    return;
  }, []);
  const renderGridItem = itemData => {
    return (
      <View>
      <TouchableOpacity
        onPress={() => setSelectedAddress(itemData.item.id)}
          style={{
            flexDirection: 'row',
            minHeight: 80,
          marginTop: 12,
          borderColor:
              itemData.item.id == selectedAddress ? COLORS.red : COLORS.grey,
          borderWidth: 1,
          padding: 15,
          borderRadius: SIZES.r,
        }}>
          <View style={{ justifyContent: 'center', width: '10%' }}>
          {itemData.item.type === 'Home'
            ? itemData.item.type === 'Home' &&
                itemData.item.id == selectedAddress
              ? DelIcons.activeHome
              : DelIcons.inActiveHome
            : itemData.item.type === 'Office'
            ? itemData.item.type === 'Office' &&
                  itemData.item.id == selectedAddress
              ? DelIcons.activeOffice
              : DelIcons.inActiveOffice
            : itemData.item.type === 'Other' &&
                  itemData.item.id == selectedAddress
            ? DelIcons.activeOther
            : DelIcons.inActiveOther}
          {/* { (itemData.item.type === 'office' && itemData.item.id === selectedAddress) ? DelIcons.activeOffice : DelIcons.inActiveOffice }  */}
          {/* { (itemData.item.type === 'Other' && itemData.item.id === selectedAddress) ? DelIcons.activeOther : DelIcons.inActiveOther } */}
        </View>

        <View
          style={{
              flex: 1,
              flexDirection: 'row',
          }}>
            <View style={{ flexDirection: 'column', marginLeft: 15, width: '70%', maxWidth: '71%' }}>
            <Text
              style={[
                MainStyle.descText,
                {fontWeight: SIZES.w5, textAlign: 'left'},
              ]}>
              {itemData.item.type}
            </Text>
              <Text
                numberOfLines={1}
              style={[
                MainStyle.deliveryTime,
                { alignSelf: 'flex-start', marginTop: 5, fontWeight: SIZES.w4, maxWidth: '90%' },
              ]}>
              {itemData.item.street}, {itemData.item.city}
            </Text>
              {itemData.item.id == selectedAddress ? (
              <Text
                style={[
                  styles.classification,
                  {color: COLORS.red, fontWeight: 'bold'},
                ]}>
                active
              </Text>
            ) : null}
          </View>

            <View style={{ justifyContent: 'center', width: '15%' }}>
            <TouchableOpacity
              style={styles.buttonStyleRed}
              onPress={() =>
                props.navigation.navigate('AddAddress', {
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
                })
              }>
              <View>
                <Text style={styles.text_color}>{t('delivery:edit')}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader
        displayLine={true}
        navigation={props.navigation}
        title={t('delivery:myAddresses')}
      />
      {loading ? <Loader style={{ position: 'relative', height: 100, width: 100, alignSelf: 'center' }} /> : null}

      <View style={{ flex: 1 }}>
        {/* <UnderlineView /> */}
        <FlatList
          bounces={false}
          style={{ marginLeft: 16, marginRight: 16 }}
          keyExtractor={(item, index) => item.id}
          data={addressData}
          showsVerticalScrollIndicator="false"
          renderItem={renderGridItem}
          numColumns={1}
        />

        <View
          style={{
            width: '100%',
            bottom: 0,
            position: 'absolute',
          }}>
          <MyButton
            title={t('delivery:add')}
            onSelect={() => {
              props.navigation.navigate('AskAddress');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddressListScreen;
