import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MyButton from 'components/MyButton';
import MainStyle from 'styleSheet/MainStyle';
import InputField from 'components/InputField';
import UnderlineView from 'components/underlineView';
import NavigationHeader from 'components/NavigationHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';
import {ADDADDRESS} from 'data/dummy-data';
import AddressGrid from 'components/AddressGrid';
import {FONTS, SIZES, DelIcons} from 'assets/index';
import {useSelector, useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';
import SuccessModel from 'components/SuccessModel';
import {use} from 'i18next';
import Modal from 'react-native-modal';
import {addAddressRequest} from './actions';

const AddAddressScreen = ({navigation, route}) => {
  const { t, i18n } = useTranslation();
  const {
    id,
    first_name,
    last_name,
    phone,
    street,
    city,
    type,
    location,
    default_set,
  } = route.params;
  const loginData = useSelector(state => state.loginReducer.loginData);
  const [paramData, setParamData] = useState({
    addressId: '',
    firstName: first_name,
    lastName: last_name,
    cityName: city,
    streetName: street,
    phoneNo: phone,
    location: location,
    selectedType: {id: '1', name: 'Home'},
    is_default: default_set,
    errorMsg: '',
  });

  const dispatch = useDispatch();
  const addressData = useSelector(state => state.addAddressReducer.addressData);
  const apiError = useSelector(state => state.addAddressReducer.error);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const showToast = errorMsg => {
    Toast.show({
      type: 'error',
      text1: 'Error:   ' + errorMsg,
      text1Style: {
        fontSize: 20,
        fontWeight: '400',
      },
    });
  };
  useEffect(() => {
    if (apiError) {
      setParamData({ ...paramData, errorMsg: apiError.message });
    } else if (addressData) {

      // toggleModal();
    }
    return () => {

    };
  }, [apiError, addressData]);

  const checkTextInput = () => {
    let errorMsg = '';
    if (!paramData.firstName.trim()) {
      errorMsg = 'Please enter your first name';
    } else if (!paramData.lastName.trim()) {
      errorMsg = 'Please enter your last name';
    } else if (!paramData.cityName.trim()) {
      errorMsg = 'Please enter the city';
    } else if (!paramData.streetName.trim()) {
      errorMsg = 'Please enter the Street Address';
      // } else if (!phoneNo.trim()) {
      //   errorMsg = 'Please enter the Phone number';
    } else {
      dispatch(
        addAddressRequest({
          firstName: paramData.firstName,
          lastName: paramData.lastName,
          city: paramData.cityName,
          street: paramData.streetName,
          phone: paramData.phoneNo,
          location: location,
          type: paramData.selectedType.name,
          is_default: paramData.isChecked,
          addressId: id,
        }),
      );
      navigation.navigate('AddressList');
      return;
    }
    showToast(errorMsg);
    return;
  };

  const renderAddressGridItem = itemData => {
    return (
      <AddressGrid
        onSelect={() => {
          setParamData({
            ...paramData,
            selectedType: {id: itemData.item.id, name: itemData.item.title},
          });
        }}
        title={itemData.item.title}
        menuImage={itemData.item.icon}
        menuImageInActive={itemData.item.iconInActive}
        menuIndex={itemData.item.id}
        selectedItem={paramData.selectedType.id}
      />
    );
  };
  const showInputField = props => {
    return (
      <View>
        <Text
          style={{
            fontSize: SIZES.h4,
            fontFamily: FONTS.normal,
            fontWeight: SIZES.w5,
            marginTop: 20,
          }}>
          Title
        </Text>
        <TextInput
          style={{
            marginTop: 15,
            fontSize: SIZES.h3,
            fontFamily: FONTS.normal,
            fontWeight: SIZES.w4,
          }}
          placeholder="Other Address Name"

        />
        <UnderlineView />
      </View>
    );
  };
  const onCheckboxPress = () => {
    setParamData({...paramData, isChecked: !paramData.isChecked});
  };
  const selectedBox = props => {
    return (
      <View>
        {paramData.isChecked ? DelIcons.checkboxRed : DelIcons.checkBoxWhite}
      </View>
    );
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader
        title={t('delivery:addressDetails')}
        navigation={navigation}
        displayLine={false}
      />
      <ScrollView bounces={false}>
        <View style={[MainStyle.mainBody, { marginTop: 10 }]}>
          <View
            style={{
              marginRight: 10,
              marginLeft: 10,
              justifyContent: 'center',
            }}>
            <View>
              <View>
                <KeyboardAvoidingView enabled>
                  <InputField
                    placeholder={t('common:FirstName')}
                    capitalize="none"
                    keyboardType="default"
                    returnKeyType="next"
                    secureText={false}
                    checkVal={value =>
                      setParamData({...paramData, firstName: value})
                    }
                    txtValue={first_name}
                  />
                  <InputField
                    placeholder={t('common:LastName')}
                    capitalize="none"
                    keyboardType="default"
                    returnKeyType="next"
                    secureText={false}
                    checkVal={value =>
                      setParamData({...paramData, lastName: value})
                    }
                    txtValue={last_name}
                  />
                  <InputField
                    placeholder={t('delivery:city')}
                    capitalize="none"
                    keyboardType="default"
                    returnKeyType="next"
                    secureText={false}
                    txtValue={city}
                    checkVal={value =>
                      setParamData({...paramData, cityName: value})
                    }
                  />
                  <InputField
                    placeholder={t('delivery:streetAddress')}
                    capitalize="none"
                    keyboardType="default"
                    returnKeyType="next"
                    secureText={false}
                    txtValue={street}
                    checkVal={value =>
                      setParamData({...paramData, streetName: value})
                    }
                  />
                  <InputField
                    placeholder={t('delivery:phoneNumber')}
                    capitalize="none"
                    keyboardType="default"
                    returnKeyType="next"
                    secureText={false}
                    checkVal={value =>
                      setParamData({...paramData, phoneNo: value})
                    }
                    txtValue={phone}
                  />

                  <View style={{marginTop: 40, marginBottom: 40}}>
                    <FlatList
                      bounces={false}
                      scrollEnabled={false}
                      horizontal={true}
                      numColumns={1}
                      data={ADDADDRESS}
                      renderItem={renderAddressGridItem}
                    />
                  </View>
                  <UnderlineView />
                  <View>
                    {paramData.selectedType.id === '3' && showInputField()}
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: 20,
                    }}>
                    <View style={{marginRight: 10}}>
                      <TouchableOpacity onPress={onCheckboxPress}>
                        {selectedBox()}
                      </TouchableOpacity>
                    </View>
                    <Text style={MainStyle.centerTextStyle}>
                      {t('delivery:primaryAddress')}
                    </Text>
                  </View>
                </KeyboardAvoidingView>
              </View>
            </View>
          </View>
        </View>
        <Modal isVisible={isModalVisible}>
          <SuccessModel
            successTitle="User address created successfully !"
            onSelect={toggleModal}
            type="Success"
          />
        </Modal>
      </ScrollView>
      <View style={{ marginLeft: 10, marginRight: 10 }}>
        <MyButton
          title={t('delivery:addAddress')}
          onSelect={() => checkTextInput()}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddAddressScreen;
