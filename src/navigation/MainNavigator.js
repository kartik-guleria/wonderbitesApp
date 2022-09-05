import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from 'common/screens/Welcome';
import SideMenuScreen from 'common/screens/SideMenuScreen';
import VerificationCodeScreen from 'common/screens/VerificationCodeScreen';
import RegisterScreen from 'common/screens/RegisterScreen';
import SignInToJoin from 'common/screens/SignInToJoin';
import SignInScreen from 'common/screens/SignInScreen';
import SignUpScreen from 'common/screens/SignUpScreen';
import ResetPasswordScreen from 'common/screens/ResetPasswordScreen';

import BottomTabs from 'navigation/BottomTabs';
import MealPlanTabs from 'navigation/MealPlanTabs';
import HomeScreen from 'common/screens/HomeScreen';
import MainScreen from 'delivery/screens/MainScreen';
import CategoryScreen from 'delivery/screens/CategoryScreen';
import ProductDetailScreen from 'delivery/screens/ProductDetailScreen';
import AddIngrieidientsScreen from 'delivery/screens/AddIngrieidientsScreen';
import CartScreen from 'delivery/screens/CartScreen';
import ConfirmationScreen from 'delivery/screens/ConfirmationScreen';

import CheckoutScreen from 'delivery/screens/CheckoutScreen';
import CheckoutCompleteScreen from 'delivery/screens/CheckoutCompleteScreen';
import OrderCompleteScreen from 'delivery/screens/OrderCompleteScreen';
import ChooseOptionScreen from 'delivery/screens/ChooseOptionScreen';
import PaymentDetailScreen from 'delivery/screens/PaymentDetailScreen';
import AddNewCardScreen from 'delivery/screens/AddNewCardScreen';
import EmptyCartScreen from 'delivery/screens/EmptyCartScreen';
import OrderHistoryScreen from 'delivery/screens/OrderHistoryScreen';
import UpcomingOrderDetailScreen from 'delivery/screens/UpcomingOrderDetailScreen';

//Profile Related Screens

import ChangeEmailScreen from 'common/screens/ChangeEmailScreen';
import SettingsScreen from 'common/screens/SettingsScreen';
import SelectLangScreen from 'common/screens/SelectLangScreen';
import AccountSettingScreen from 'common/screens/AccountSettingsScreen';
import NotificationViewScreen from 'delivery/screens/NotificationViewScreen';
import TableReservationScreen from 'delivery/screens/TableReservationScreen';
import MyBookingScreen from 'delivery/screens/MyBookingScreen';
import RateUsScreen from 'common/screens/RateUsScreen';
import AboutUsScreen from 'common/screens/AboutUsScreen';
import FeedbackScreen from 'delivery/screens/FeedbackScreen';
import ProfileScreen from 'common/screens/ProfileScreen';
import WishlistScreen from 'delivery/screens/WishlistScreen';
import PersonalDetailScreen from 'delivery/screens/PersonalDetailScreen';
import AddressListScreen from 'delivery/screens/AddressListScreen';
import MyWonderPointsScreen from 'delivery/screens/MyWonderPointsScreen';

//Address Related Screens
import AddAddressScreen from 'delivery/screens/AddAddressScreen';
import AskAddressScreen from 'delivery/screens/AskAddressScreen';
import YourLocationScreen from 'delivery/screens/YourLocationScreen';
import OpenLocSettingScreen from 'delivery/screens/OpenLocSettingScreen';

import TrackOrderScreen from 'delivery/screens/TrackOrderScreen';
import BottomViewScreen from 'delivery/screens/BottomViewScreen';
import PopularSearchScreen from 'delivery/screens/PopularSearchScreen';
import ChatSupportScreen from 'delivery/screens/ChatSupportScreen';
import MyAddressesBottom from 'components/MyAddressesBottom';
import NetNotAvailable from 'common/screens/NetNotAvailable';
import {navigationRef, replace} from 'navigation/RootNaviagtion';
import RNBootSplash from 'react-native-bootsplash';
// import testScreen from 'common/screens/testScreen';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {getUserRequest} from 'common/screens/ProfileScreen/actions';
import {setTokenAction} from 'common/actions';
// import {useNetInfo} from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';
import Reactotron from 'reactotron-react-native';
import PastOrderDetailScreen from 'delivery/screens/PastOrderDetailScreen';
import ReviewProductScreen from 'delivery/screens/ReviewProductScreen';
import EmailVerificationCodeScreen from 'common/screens/EmailVerificationCodeScreen';
import QuestionnaireFrontPage from '../mealPlan/screens/Questionnaire/QuestionnaireFrontPage';
import Q1 from '../mealPlan/screens/Questionnaire/Q1';
import Q2 from '../mealPlan/screens/Questionnaire/Q2/index';
import Q3 from '../mealPlan/screens/Questionnaire/Q3';
import Q4 from '../mealPlan/screens/Questionnaire/Q4';
import Q5 from '../mealPlan/screens/Questionnaire/Q5';
import Q6 from '../mealPlan/screens/Questionnaire/Q6';
import Q7 from '../mealPlan/screens/Questionnaire/Q7';
import Q8 from '../mealPlan/screens/Questionnaire/Q8';
import Q9 from '../mealPlan/screens/Questionnaire/Q9';
import Q10 from '../mealPlan/screens/Questionnaire/Q10';
import Q11 from '../mealPlan/screens/Questionnaire/Q11';
import Q12 from '../mealPlan/screens/Questionnaire/Q12';
import MealDetails from '../mealPlan/screens/MealDetails';
import WeeklyMealPlan from '../mealPlan/screens/WeeklyMealPlan';
import MealSubscription from '../mealPlan/screens/MealSubscription';
import CreatingMealPlan from '../mealPlan/screens/CreatingMealPlan';
import MealPlanReady from '../mealPlan/screens/MealPlanReady';
import SubscribeMealPlan from '../mealPlan/screens/SubscribeMealPlan';
import ScheduleCall from '../mealPlan/screens/ScheduleCall';
import CallScheduled from '../mealPlan/screens/CallScheduled';
import UnsubscribeCall from '../mealPlan/screens/UnsubscribeCall';
import SuperLunchMeal from '../mealKit/screens/SuperLunchMeal';
import SubscribeMealKit from '../mealKit/screens/SubscribeMealKit';
import WelcomeMealKit from '../mealKit/screens/WelcomeMealKit';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const loginData = useSelector(state => state.loginReducer.loginData);
  const token = useSelector(state => state.commonReducer.token);
  const loading = useSelector(state => state.commonReducer.loading);
  const dispatch = useDispatch();

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('accessToken');
      dispatch(setTokenAction(value));
    } catch (e) {
      console.error(e);
    }
  };

  // const [netInfo, setNetInfo] = useState('');
  // NetInfo.fetch().then(state => {
  //   Toast.show({
  //     text1: `${state.isConnected}`,
  //   });
  // });
  // const unsubscribe = NetInfo.addEventListener(state => {
  //   console.log('Connection type', state.type);
  //   console.log('Is connected?', state.isConnected);
  // });
  // unsubscribe();
  // const netInfo =  useNetInfo();
  // console.log(netInfo.isConnected);

  useEffect(() => {
    // NetInfo.fetch().then(state => {
    //   Toast.show({
    //     text1: `${state.isConnected}`,
    //   });
    // });
    // const unsubscribe = NetInfo.addEventListener(state => {
    //   console.log('Connection type', state.type);
    //   console.log('Is connected?', state.isConnected);
    // });
    // unsubscribe();
    // Reactotron.log('G O T   N E T   I N F O', netInfo);
    dispatch(getUserRequest());
    retrieveData();
    console.log(token);
    axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
      Accept: `application/json`,
    };
  }, [token]);

  const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  if (!loading) {
    RNBootSplash.hide();
  }
  const onBoardingScreens = () => (
    // {netInfo ? <Stack.Screen name="Home" component={HomeScreen} />:
    <>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SideMenu" component={SideMenuScreen} />
      <Stack.Screen
        name="VerificationCode"
        component={VerificationCodeScreen}
      />
      <Stack.Screen name="AboutUs" component={AboutUsScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="EmailVerification"
        component={EmailVerificationCodeScreen}
      />

      <Stack.Screen name="SignJoin" component={SignInToJoin} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="AskAddress" component={AskAddressScreen} />
      <Stack.Screen name="SelectLang" component={SelectLangScreen} />
      <Stack.Screen name="AddAddress" component={AddAddressScreen} />

      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MealPlanTabs"
        component={MealPlanTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen
              name="AddIngrieidients"
              component={AddIngrieidientsScreen}
            />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="QuestionnaireFront"
        component={QuestionnaireFrontPage}
      />
      <Stack.Screen name="Q1" component={Q1} />
      <Stack.Screen name="Q2" component={Q2} />
      <Stack.Screen name="Q3" component={Q3} />
      <Stack.Screen name="Q4" component={Q4} />
      <Stack.Screen name="Q5" component={Q5} />
      <Stack.Screen name="Q6" component={Q6} />
      <Stack.Screen name="Q7" component={Q7} />
      <Stack.Screen name="Q8" component={Q8} />
      <Stack.Screen name="Q9" component={Q9} />
      <Stack.Screen name="Q10" component={Q10} />
      <Stack.Screen name="Q11" component={Q11} />

      <Stack.Screen name="WeeklyMealPlan" component={WeeklyMealPlan} />
      <Stack.Screen name="MealSubscription" component={MealSubscription} />

      <Stack.Screen name="Q12" component={Q12} />
      <Stack.Screen name="CreatingMealPlan" component={CreatingMealPlan} />
      <Stack.Screen name="MealPlanReady" component={MealPlanReady} />
      <Stack.Screen name="SubscribeMealPlan" component={SubscribeMealPlan} />
      <Stack.Screen name="ScheduleCall" component={ScheduleCall} />
      <Stack.Screen name="CallScheduled" component={CallScheduled} />
      <Stack.Screen name="UnsubscribeCall" component={UnsubscribeCall} />
      <Stack.Screen name="MealDetails" component={MealDetails} />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      <Stack.Screen name="ChooseOption" component={ChooseOptionScreen} />
      <Stack.Screen name="SuperLunchMeal" component={SuperLunchMeal} />
      <Stack.Screen name="SubscribeMealKit" component={SubscribeMealKit} />
      <Stack.Screen name="WelcomeMealKit" component={WelcomeMealKit} />
      <Stack.Screen name="NetNotAvailable" component={NetNotAvailable} />
    </>
  );
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={screenOptions}>
        {!token ? (
          onBoardingScreens()
        ) : (
          <>
            <Stack.Screen
              name="BottomTabs"
              component={BottomTabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MealPlanTabs"
              component={MealPlanTabs}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetailScreen}
            />
            <Stack.Screen
              name="AddIngrieidients"
              component={AddIngrieidientsScreen}
            />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
            <Stack.Screen
              name="CheckoutComplete"
              component={CheckoutCompleteScreen}
            />
            <Stack.Screen
              name="OrderComplete"
              component={OrderCompleteScreen}
            />
            <Stack.Screen name="ChooseOption" component={ChooseOptionScreen} />
            <Stack.Screen
              name="PaymentDetail"
              component={PaymentDetailScreen}
            />
            <Stack.Screen name="AddNewCard" component={AddNewCardScreen} />
            <Stack.Screen name="EmptyCart" component={EmptyCartScreen} />
            <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
            <Stack.Screen
              name="PastOrderDetail"
              component={PastOrderDetailScreen}
            />
            <Stack.Screen
              name="UpcomingOrderDetail"
              component={UpcomingOrderDetailScreen}
            />
            <Stack.Screen name="ChangeEmail" component={ChangeEmailScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="SelectLang" component={SelectLangScreen} />
            <Stack.Screen
              name="AccountSetting"
              component={AccountSettingScreen}
            />
            <Stack.Screen
              name="NotificationView"
              component={NotificationViewScreen}
            />
            <Stack.Screen
              name="TableReservation"
              component={TableReservationScreen}
            />
            <Stack.Screen name="MyBooking" component={MyBookingScreen} />
            <Stack.Screen name="RateUs" component={RateUsScreen} />
            <Stack.Screen name="AboutUs" component={AboutUsScreen} />
            <Stack.Screen name="Feedback" component={FeedbackScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Wishlist" component={WishlistScreen} />
            <Stack.Screen
              name="PersonalDetail"
              component={PersonalDetailScreen}
            />
            <Stack.Screen name="AddressList" component={AddressListScreen} />
            <Stack.Screen
              name="MyWonderPoints"
              component={MyWonderPointsScreen}
            />
            <Stack.Screen name="AddAddress" component={AddAddressScreen} />
            <Stack.Screen name="AskAddress" component={AskAddressScreen} />
            <Stack.Screen name="YourLocation" component={YourLocationScreen} />
            <Stack.Screen
              name="OpenLocSetting"
              component={OpenLocSettingScreen}
            />
            <Stack.Screen
              name="ReviewProduct"
              component={ReviewProductScreen}
            />
            <Stack.Screen name="TrackOrder" component={TrackOrderScreen} />
            <Stack.Screen name="BottomView" component={BottomViewScreen} />
            <Stack.Screen
              name="PopularSearch"
              component={PopularSearchScreen}
            />
            <Stack.Screen name="ChatSupport" component={ChatSupportScreen} />
            <Stack.Screen
              name="MyAddressBottom"
              component={MyAddressesBottom}
            />
            <Stack.Screen
              name="QuestionnaireFront"
              component={QuestionnaireFrontPage}
            />
            <Stack.Screen name="Q1" component={Q1} />
            <Stack.Screen name="Q2" component={Q2} />
            <Stack.Screen name="Q3" component={Q3} />
            <Stack.Screen name="Q4" component={Q4} />
            <Stack.Screen name="Q5" component={Q5} />
            <Stack.Screen name="Q6" component={Q6} />
            <Stack.Screen name="Q7" component={Q7} />
            <Stack.Screen name="Q8" component={Q8} />
            <Stack.Screen name="Q9" component={Q9} />
            <Stack.Screen name="Q10" component={Q10} />
            <Stack.Screen name="Q11" component={Q11} />
            <Stack.Screen name="Q12" component={Q12} />

            <Stack.Screen name="WeeklyMealPlan" component={WeeklyMealPlan} />
            <Stack.Screen
              name="MealSubscription"
              component={MealSubscription}
            />

            <Stack.Screen
              name="CreatingMealPlan"
              component={CreatingMealPlan}
            />
            <Stack.Screen name="MealPlanReady" component={MealPlanReady} />
            <Stack.Screen
              name="SubscribeMealPlan"
              component={SubscribeMealPlan}
            />
            <Stack.Screen name="ScheduleCall" component={ScheduleCall} />
            <Stack.Screen name="CallScheduled" component={CallScheduled} />
            <Stack.Screen name="UnsubscribeCall" component={UnsubscribeCall} />
            <Stack.Screen name="MealDetails" component={MealDetails} />
            <Stack.Screen name="SuperLunchMeal" component={SuperLunchMeal} />
            <Stack.Screen
              name="SubscribeMealKit"
              component={SubscribeMealKit}
            />
            <Stack.Screen name="WelcomeMealKit" component={WelcomeMealKit} />
            <Stack.Screen name="NetNotAvailable" component={NetNotAvailable} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
