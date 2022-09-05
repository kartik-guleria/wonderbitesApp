import React, {useEffect, useState} from 'react';
import BannerSlider from 'components/BannerSlider';
import MainStyle from 'styleSheet/MainStyle';
import HeaderRight from 'components/HeaderRight';
import {useTranslation} from 'react-i18next';
import Modal from 'react-native-modal';
import CuisinesBottomSheet from 'components/CuisinesBottomSheet';
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {CUISINES} from 'data/dummy-data';
import styles from './style';
import {COLORS, FONTS, SIZES, DelIcons} from 'assets/index';
import {useDispatch, useSelector} from 'react-redux';
import {getUserRequest} from 'common/screens/ProfileScreen/actions';
import {fetchCategoryRequest} from './actions';
import {replace} from 'navigation/RootNaviagtion';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchCuisinesRequest} from 'delivery/screens/BottomViewScreen/actions';
import Config from 'react-native-config';
import Loader from 'components/Loader';
// import { setPushNotificationsDeviceToken } from 'react-native-fbsdk/lib/commonjs/FBAppEventsLogger';
const MainScreen = props => {
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = id => {
    {id === '1' ? setModalVisible(true): null}
  };
  useEffect(() => {
    dispatch(getUserRequest());
    // const reRender = props.navigation.addListener('focus', () => {
      dispatch(fetchCategoryRequest({ params: { type: "product" } }));
    // });
    // return reRender;
    return;
  }, []);
  const onCuisineClick = id => {
    toggleModal(id); 
  };
  const loginData = useSelector(state => state.loginReducer.loginData);
  const categoryData = useSelector(
    state => state.CategoryListReducer.categoryData,
  );
  const loading = useSelector(state => state.CategoryListReducer.loading);
  const images = [require('images/banner.png'), require('images/banner.png')];
  const {t, i18n} = useTranslation();
  const [token, setToken] = useState();
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('accessToken');
      setToken(value);
    } catch (e) {
      console.error(e);
    }
  };
  // alert(JSON.stringify(categoryData.image_path));
  useEffect(() => {
    dispatch(fetchCuisinesRequest());
    retrieveData();
  }, [token]);
  const checkLoginData = () => {
    if (token) {
      null;
    } else {
      replace('SignJoin');
    }
  };
  const Header = () => {
    return (
      <View>
        <FlatList
          bounces={false}
          horizontal
          data={CUISINES}
          showsHorizontalScrollIndicator={false}
          keyExtractor={items => items.id}
          renderItem={renderCuisinesItem}
        />
        <View style={styles.container}>
          <BannerSlider images={images} />
        </View>
        <View style={{flex: SIZES.f1, alignItems: 'center'}}>
          <Text style={styles.headingDesc}>{t('delivery:topChoices')}</Text>
        </View>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View style={{flex: SIZES.f1, alignItems: 'center', margin: 10}}>
        <Text style={[styles.headingDesc, {marginTop: 10, marginBottom: 15}]}>
          {t('delivery:todayPick')}
        </Text>
        <Image
          style={{
            justifyContent: 'flex-end',
            width: '94%',
            borderRadius: SIZES.r3,
            alignSelf: 'center',
          }}
          source={require('images/banner.png')}
        />
      </View>
    );
  };

  const renderCategoryGridItem = itemData => {
    // console.log(`${Config.BASE_URL}/uploads/${itemData.item.image_path}`);
  
    return (
      <View>
        {loading ? (
          <Loader style={{height: 100, width: 100, position: 'relative'}} />
        ) : (
          <TouchableOpacity
            onPress={() => {
              // Pass and merge params back to home screen
              props.navigation.navigate({
                name: 'Category',
                params: {categoryId: itemData.item.id},
              });
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                // flex: SIZES.f1,
              }}>
              <Image
                style={{
                  justifyContent: 'flex-end',
                  width: Dimensions.get('window').width/5.4,
                  height: Dimensions.get('window').width/5.4,
                  alignSelf: 'center',
                  marginLeft: 15,
                  marginRight: 9,
                  marginTop: 10,
                  marginBottom: 8,
                  borderRadius: Dimensions.get('window').width/2.7,
                  }}
                  source={require('assets/images/pizza.jpg')}
                  // source={{ uri: `${Config.BASE_URL}/uploads/${itemData.item.image_path}` }}
              />
              <Text
                style={{
                  maxWidth: 100,
                  alignContent: 'center',
                  fontSize: SIZES.h,
                  color: COLORS.black,
                  fontWeight: SIZES.w5,
                  fontFamily: FONTS.normal,
                  marginTop: -5,
                  textAlign: 'center',
                }}>
                  {itemData.item.name}

              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderCuisinesItem = items => {
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: SIZES.f1,
          borderColor: COLORS.grey,
          borderWidth: 1,
          borderRadius: SIZES.r1,
          height: 34,
          marginLeft: SIZES.mlr1,
          marginTop: 5,
          marginBottom: 5,
        }}
        onPress={() => onCuisineClick(items.item.id)}>
        {/* onPress={() => setSelectedIndex(items.item.id)}>
        {toggleModal()} */}
        <Modal
          isVisible={isModalVisible}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection="down"
          backgroundColor="#FFFFFF"
          style={{width: '100%', marginTop: 200, marginLeft: 0}}>
          <View style={{marginTop: 10}}>
            <CuisinesBottomSheet onPressClearAll={null} />
          </View>
        </Modal>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: SIZES.f1,
            height: 34,
            marginTop: 8,
            marginBottom: 8,
            marginLeft: 12,
            marginRight: 12,
          }}>
          <Text
            style={{
              alignContent: 'center',
              fontSize: SIZES.h,
              color: COLORS.black,
              fontWeight: SIZES.w5,
              fontFamily: FONTS.normal,
            }}>
            {items.item.title}
          </Text>
          <View style={{marginLeft: 10}}>
            {items.item.id === '1' ? DelIcons.blackDownArrow : null}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <HeaderRight
        navigation={props.navigation}
        onPressWonderbites={() => checkLoginData()}
      />
      <View>
        <FlatList
          bounces={false}
          numColumns={4}
          // horizontal={true}
          showsVerticalScrollIndicator={false}
          data={categoryData}
          ListHeaderComponent={Header}
          ListFooterComponent={Footer}
          renderItem={renderCategoryGridItem}
        />
      </View>
    </SafeAreaView>
  );
};

MainScreen.navigationOptions = {title: 'Welcome', headerShown: false};

export default MainScreen;
