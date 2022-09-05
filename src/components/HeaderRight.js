import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import UnderLiveView from 'components/underlineView';
import {COLORS, ComIcons, DelIcons} from 'assets/index';
import Modal from 'react-native-modal';
import MyAddressesBottom from 'components/MyAddressesBottom';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const headerRight = props => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const onClickAddNew = () => {
    setModalVisible(false);
    navigation.navigate('AskAddress');
  };
  const onClickEdit = () => {
    setModalVisible(false);
  };
  const [token, setToken] = useState();
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('accessToken');
      setToken(value);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    retrieveData();
  }, [token]);
  const onProfilePress = () => {
    if (token) {
      navigation.navigate('Profile');
    } else {
      Toast.show({
        type: 'error',
        text1: 'Please Login To Continue',
        text1Style: {
          fontSize: 20,
          fontWeight: '400',
        },
      });
    }
  };
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 50,
        }}>
        <TouchableOpacity onPress={props.onPressWonderbites}>
          <View
            style={{
              marginLeft: 17,
              resizeMode: 'contain',
            }}>
            {ComIcons.wonderBitesBlackRed}
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={toggleModal}
            style={{
              marginLeft: 20,
              resizeMode: 'contain',
            }}>
            {DelIcons.location}
          </TouchableOpacity>
          <Modal
            isVisible={isModalVisible}
            onSwipeComplete={() => setModalVisible(false)}
            swipeDirection="down"
            backgroundColor="#FFFFFF"
            style={{
              justifyContent: 'center',
              position: 'absolute',
              alignItems: 'center',
              backgroundColor: COLORS.white,
              height: 400,
              width: '100%',
              borderRadius: 20,
              borderWidth: 1,
              marginLeft: 0,
              marginTop: 420,
            }}>
            {/* <View> */}
            <MyAddressesBottom
              toAddAddress={() => onClickAddNew()}
              toEditAddress={() => onClickEdit()}
            />
            {/* </View> */}
          </Modal>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('PopularSearch')}
            style={{
              marginLeft: 20,
              resizeMode: 'contain',
            }}>
            {DelIcons.searchBlack}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onProfilePress()}>
            <View
              style={{
                marginLeft: 15,
                marginRight: 15,
                resizeMode: 'contain',
              }}>
              {DelIcons.profile}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <UnderLiveView />
    </View>
  );
};

export default headerRight;
