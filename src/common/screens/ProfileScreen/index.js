import React, {useEffect} from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import UnderlineView from 'components/underlineView';
import NavigationHeader from 'components/NavigationHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';
import styles from './style';
import { COLORS, FONTS, SIZES } from 'assets/index';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { getUserRequest,logOutRequest } from './actions';
import { ComIcons } from 'assets/svg/commonSVG';
import Config from 'react-native-config';
import ProfileButtonsCategory from 'models/profile_buttons';
import API from 'constants/api';
const ProfileScreen = props => {
  const { t, i18n } = useTranslation();

  //Static Data Starts
  const PROFILECATEGORIES = [
    new ProfileButtonsCategory(
      'c1',
      ComIcons.personalDetails,
      t('delivery:personalDetails'),
      'PersonalDetail',
    ),
    new ProfileButtonsCategory(
      'c2',
      ComIcons.myWonderpoints,
      t('delivery:myWonderPoints'),
      'MyWonderPoints',
    ),
    new ProfileButtonsCategory('c3', ComIcons.settings, t('delivery:settings'), 'Settings'),
    new ProfileButtonsCategory(
      'c4',
      ComIcons.notifications,
      t('delivery:notifications'),
      'NotificationView',
    ),
    new ProfileButtonsCategory(
      'c5',
      ComIcons.orderHistory,
      t('delivery:orderHistory'),
      'OrderHistory',
    ),
    new ProfileButtonsCategory(
      'c6',
      ComIcons.mySubscriptions,
      t('delivery:mySubscriptions'),
      'TableReservation',
    ),
    new ProfileButtonsCategory('c7', ComIcons.wishlist, t('delivery:wishlist'), 'Wishlist'),
    new ProfileButtonsCategory(
      'c8',
      ComIcons.myBookings,
      t('delivery:myWonderPoints'),
      'MyBooking',
    ),
    new ProfileButtonsCategory(
      'c9',
      ComIcons.chatSupport,
      t('delivery:chatSupport'),
      'ChatSupport',
    ),
    new ProfileButtonsCategory('c10', ComIcons.about, t('common:AboutUs'), 'AboutUs'),
  ];

//Static Data End
  const storeData = async value => {
    try {
      await AsyncStorage.removeItem('accessToken');
    } catch (e) {
      console.error(e);
    }
  };
  const onLogOut = () => {
    storeData();
    dispatch(logOutRequest());
  };

  const dispatch = useDispatch();
  const userData = useSelector(state => state.getUserReducer.userData);
  useEffect(() => {
    const reRender = props.navigation.addListener('focus', () => {
      dispatch(getUserRequest());
    });
    return reRender;
  }, []);

  const getFooter = () => {
    return (
      <View style={{marginLeft: 20}}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Feedback')}>
          <Text style={styles.buttonFeedAndRate}>
            {t('common:SendFeedback')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('RateUs')}>
          <Text style={[styles.buttonFeedAndRate, {marginTop: 26}]}>
            {t('common:RateUs')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onLogOut()}>
          <Text style={styles.logoutButton}>{t('common:LogOut')}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const getHeader = () => {
    
    return (
      <View>
        <View style={styles.profileDetailView}>
      <Image
            style={styles.profileImage}
            source={{ uri: userData?.image_path == null ? userData?.avatar : `${Config.BASE_URL}/uploads/${userData.image_path}`}}
          />
          <View style={{marginLeft: 24}}>
            <Text style={styles.name}>
              {userData?.first_name} {userData?.last_name}
            </Text>
            <Text style={styles.email}>{userData?.email}</Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: SIZES.mlr1,
            marginRight: SIZES.mlr1,
            marginBottom: 20,
          }}>
          <UnderlineView />
        </View>
      </View>
    );
  };

  const renderGridItem = itemData => {
    var profileIcon = itemData.item.image;
    return (
      <View style={{marginLeft: 17, marginRight: 17}}>
        <TouchableOpacity
          style={{marginBottom: 40}}
          onPress={() => itemData.item.id == 'c10' ? props.navigation.navigate({
            name: itemData.item.nextScreen,
            params: {
              paramKey: itemData.item.options,
              pageUrl: API.ABOUT_URL
            },
          }) : props.navigation.navigate(itemData.item.nextScreen)}>
          <View style={{flexDirection: 'row'}}>
            <View>{profileIcon}</View>
            <View style={styles.optionsView}>
              <Text
                style={{
                  color: COLORS.black,
                  fontSize: SIZES.h2,
                  fontWeight: SIZES.w5,
                  fontFamily: FONTS.normal,
                }}>
                {itemData.item.options}
              </Text>
              <View style={styles.arrowImage}>{ComIcons.arrowRightRed}</View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader
        title={t('common:Profile')}
        navigation={props.navigation}
      />
      <FlatList
        bounces={false}
        style={{marginTop: 10}}
        keyExtractor={(item, index) => item.id}
        data={PROFILECATEGORIES}
        renderItem={renderGridItem}
        ListHeaderComponent={getHeader}
        ListFooterComponent={getFooter}
        numColumns={1}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;
